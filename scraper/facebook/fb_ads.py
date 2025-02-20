import os
import requests
import json
from bs4 import BeautifulSoup
import re
from pymongo import MongoClient
import time
from urllib.parse import urlparse

client = MongoClient('mongodb://seo_cromom_user:SOh3TbYhx8ypJPxmt1oOfLUjkoipuy88999978Gty@127.0.0.1:27017/seo_cromom_db')
db = client.seo_cromom_db
collection = db.facebook

video_dir = os.path.join(os.getcwd(), 'video')
if not os.path.isdir(video_dir):
    os.mkdir(video_dir)
    
def find_sub_json(json_obj, key):
    """
    Recursively search for a sub-JSON containing the specified key.

    :param json_obj: The JSON object to search (dictionary or list)
    :param key: The key to search for
    :return: The sub-JSON (dictionary) containing the key, or None if not found
    """
    # Check if the current object is a dictionary
    if isinstance(json_obj, dict):
        # If the key exists in the current dictionary, return it
        if key in json_obj:
            return json_obj
        # Otherwise, recurse for each value in the dictionary
        for value in json_obj.values():
            result = find_sub_json(value, key)
            if result is not None:
                return result

    # Check if the current object is a list
    elif isinstance(json_obj, list):
        # Recurse for each element in the list
        for item in json_obj:
            result = find_sub_json(item, key)
            if result is not None:
                return result

    # If no match found, return None
    return None

def download_video(url, save_path):
    if os.path.isfile(save_path):
        print(f"Video already downloaded here: {save_path}")
        return True

    response = requests.get(url, stream=True)
    
    if response.status_code == 200:
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Video downloaded successfully and saved as {save_path}")
        return True
    else:
        print(f"Failed to download the video. Status code: {response.status_code}")
        return False
        
def get_details_from_ads_libray(id):
    url = f'https://www.facebook.com/ads/archive/?id={id}'
    response = requests.get(url)
    if response.status_code != 200:
        print(f'Response Error: {response.status_code}')
        return {}
    soup = BeautifulSoup(response.text, 'html.parser')
    script_tags = soup.find_all('script', {'type': 'application/json'})
    # print(len(script_tags))
    my_script = script_tags[12]
    script_content = my_script.text
    content_json = json.loads(script_content)
    my_json = find_sub_json(content_json, 'cavalryLid')
    # print(my_json)
    ad_card = my_json.get('entryPointRoot').get('otherProps').get('deeplinkAdCard')
    if ad_card != '':
        snapshot = ad_card.get('snapshot')
    else:
        print('deeplinkAdCard field is empty')
        return {}
    format = snapshot.get('display_format')
    if format == 'video':
        video_url = snapshot.get('videos')[0].get('video_sd_url')
        parsed_url = urlparse(video_url)
        video_name = os.path.basename(parsed_url.path)
        video_path = os.path.join(video_dir, video_name)
        download_video(video_url, video_path)
    else:
        video_path = ''
        
    res_json = {
        'cta_type': snapshot.get('cta_type'),
        'likes': snapshot.get('page_like_count'),
        'format': snapshot.get('display_format'),
        'video': video_path,
        'ad_run_time': ad_card.get('startDate')
    }
    return res_json

def get_details_from_graphql(ad_id, page_id):
    url = 'https://www.facebook.com/api/graphql/'
    with open('./parameter.json', 'rb') as fh_params:
        parameter_json = json.load(fh_params)
    headers = parameter_json.get('headers')
    referer = headers.get('Referer')
    referer = referer[:referer.rfind('=')+1] + page_id
    headers['Referer'] = referer
    data = parameter_json.get('body')
    data = re.sub(r'%22adArchiveID%22%3A%22\d+%22', f'%22adArchiveID%22%3A%22{ad_id}%22', data)
    data = re.sub(r'%22pageID%22%3A%22\d+%22', f'%22pageID%22%3A%22{page_id}%22', data)
    response = requests.post(url, headers=headers, data=data)
    if response.status_code != 200:
        print(f'Response Error: {response.status_code}')
        return {}
    try:
        response_json = response.json()
        aaa_info = response_json.get('data').get('ad_library_main').get('ad_details').get('aaa_info')
        if aaa_info != '':
            res_json = {
                'gender_audience': aaa_info.get('gender_audience'),
                'age_audience': aaa_info.get('age_audience'),
                'location_audience': aaa_info.get('location_audience')
            }
            return res_json
        else:
            print('aaa_info field not exist!')
            return {}
    except requests.exceptions.JSONDecodeError:
        print("Error: Response is not valid JSON.")
        print("Response content:", response.text)
        return {}
    except Exception as e:
        print(f"Detail is not retrieved due to this error: {e}")
        return {}
        

def get_result_json(data):
    ad_id = data.get('id')
    page_id = data.get('page_id')
    details_from_library = get_details_from_ads_libray(ad_id)
    # print(details_from_library)
    details_from_graphql = get_details_from_graphql(ad_id, page_id)
    # print(details_from_graphql)
    return {**data, **details_from_library, **details_from_graphql}
    
def insert_or_update_db(data):
    result = collection.find_one({"id": data.get("id")})
    if result:
        collection.update_one({"id": data.get("id")}, {"$set": data})
        print(f'Updated: {data.get("id")}')
    else:
        collection.insert_one(data)
        print(f'Inserted: {data.get("id")}')

def show_db_collection_all():
    documents = collection.find()
    for doc in documents:
        print(doc)
    
def main():
    # collection.delete_many({})
    # show_db_collection_all()
    with open('./data.txt', 'r', encoding='utf-8') as fh_data:
        data = fh_data.read()
    sample_data = data.split('\n')
    for i in range(len(sample_data)):
        data_json = json.loads(sample_data[i])
        result_json = get_result_json(data_json)
        # print(result_json)
        insert_or_update_db(result_json)
            # video_url = 
            
        # if i == 10:
        #     break
        # print("Waiting for 3 seconds...")
        # time.sleep(3)
    client.close()
    
if __name__ == '__main__':
    main()