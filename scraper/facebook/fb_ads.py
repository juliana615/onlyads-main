import os
import requests
import json
from bs4 import BeautifulSoup
import re

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
    res_json = {
        'cta_type': snapshot.get('cta_type'),
        'likes': snapshot.get('page_like_count'),
        'format': snapshot.get('display_format'),
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

def get_result_json(data):
    ad_id = data.get('id')
    page_id = data.get('page_id')
    details_from_library = get_details_from_ads_libray(ad_id)
    # print(details_from_library)
    details_from_graphql = get_details_from_graphql(ad_id, page_id)
    # print(details_from_graphql)
    return {**data, **details_from_library, **details_from_graphql}
    
def main():
    with open('./data.txt', 'r', encoding='utf-8') as fh_data:
        data = fh_data.read()
    sample_data = data.split('\n')[0]
    data_json = json.loads(sample_data)
    result_json = get_result_json(data_json)
    print(result_json)
    
if __name__ == '__main__':
    main()