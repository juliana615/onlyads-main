import os
import json
import requests
from bs4 import BeautifulSoup
from itertools import product
import time
import argparse

cur_dir = os.getcwd()
results_dir = os.path.join(cur_dir, 'results')
status_file = os.path.join(results_dir, 'status.txt')
headers_file = os.path.join(results_dir, 'headers.json')
filter_file = os.path.join(results_dir, 'filter.json')
list_file = os.path.join(results_dir, 'list.txt')
if not os.path.isfile(list_file):
    with open(list_file, 'w') as fh_list_init:
        fh_list_init.write('')
detail_file = os.path.join(results_dir, 'details.txt')
if not os.path.isfile(detail_file):
    with open(detail_file, 'w') as fh_detail_init:
        fh_detail_init.write('')

status = {
    "objective": 1
}

def get_lists_from_creative_center():
    is_first_run = True
    # fixed params
    period = 180
    order_by = 'like'
    limit = 20

    # ### Manual header retrieval URL ###
    # https://ads.tiktok.com/business/creativecenter/inspiration/topads/pad/en?period=30&region=US
    # ###################################
    with open(headers_file, 'rb') as fh_headers:
        headers_json = json.load(fh_headers)
    headers = headers_json.get('headers')
    
    with open(filter_file, 'rb') as fh_filter:
        filter_json = json.load(fh_filter)
    
    ad_language = filter_json.get('ad_language')
    lang_countries = filter_json.get('lang_countries')
    country = filter_json.get('country')
    aggr_category_id = filter_json.get('aggr_category_id')
    industry = filter_json.get('industry')
    
    category_id_to_value = {item['id']: item['value'] for item in aggr_category_id}
    
    # check progress
    if not os.path.isfile(status_file):
        status = {
            "lang": "en",
            "country": "US",
            "industry": 0,
            "page": 1
        }
        with open(status_file, 'w', encoding='utf-8') as fh_status_write:
            json.dump(status, fh_status_write, indent=4)
    else:
        with open(status_file, 'rb') as fh_status_read:
            status = json.load(fh_status_read)
    
    lang_countries_list = list(lang_countries.items())
    
    
    start_index = next((i for i, (lang, _) in enumerate(lang_countries_list) if lang == status.get("lang")), None)

    if start_index is None:
        print(f"Language '{status.get("lang")}' not found.")
    else:
        # Iterate through the remaining languages and countries
        for i in range(start_index, len(lang_countries_list)):
            current_language, countries = lang_countries_list[i]

            # For the starting language, find the index of the specified country code
            if current_language == status.get("lang"):
                try:
                    country_index = countries.index(status.get("country"))
                except ValueError:
                    print(f"Country code '{status.get("country")}' not found in language '{status.get("lang")}'.")
                    country_index = 0  # Default to start from the beginning if not found
            else:
                # For subsequent languages, start from the beginning
                country_index = 0

            # Iterate through the countries for the current language
            for j in range(country_index, len(countries)):
                current_country = countries[j]
                if current_language == status.get("lang") and current_country == status.get("country"):
                    start_industry = status.get("industry")
                else:
                    start_industry = 0
                    
                for k in range(start_industry, len(industry)):
                    current_industry = industry[k]
                    if current_language == status.get("lang") and current_country == status.get("country") and current_industry == status.get("industry"):
                        start_page = status.get("page")
                    else:
                        start_page = 1
                    has_more = True
                    page = start_page
                    while has_more:
                        url = f'https://ads.tiktok.com/creative_radar_api/v1/top_ads/v2/list?period={period}&industry={current_industry.get('id')}&page={page}&limit={limit}&order_by={order_by}&country_code={current_country}&ad_language={current_language}'
                        page += 1
                        print(url)
                        response = requests.get(url, headers=headers)
                        if response.status_code != 200:
                            print(f'Request Error: {response.status_code}')
                            exit(0)
                        response_json = response.json()
                        data_json = response_json.get('data')
                        if data_json == None:
                            print('Error: data_json is None')
                            has_more = False
                            continue
                        materials_json = data_json.get('materials')
                        if len(materials_json) == 0:
                            print('No ads for this filter')
                            has_more = False
                            continue
                        pagination_json = data_json.get('pagination')
                        for material in materials_json:
                            result_json = {
                                "country": current_country,
                                "language": current_language,
                                "likes": material.get('like'),
                                "main_category": category_id_to_value,
                                "sub_category": current_industry.get('value'),
                                "ctr": material.get('ctr'),
                                "id": material.get('id'),
                                "ad_title": material.get('ad_title'),
                                "brand_name": material.get('brand_name'),
                                "vid": material.get('video_info').get('vid'),
                                "duration": material.get('video_info').get('duration'),
                                "video_url": material.get('video_info').get('video_url')
                            }
                            # print(result_json)
                            with open(list_file, 'a', encoding='utf-8') as fh_list:
                                fh_list.write(json.dumps(result_json) + '\n')
                        status = {
                            "lang": current_language,
                            "country": current_country,
                            "industry": industry.index(current_industry),
                            "page": page,
                        }
                        with open(status_file, 'w', encoding='utf-8') as fh_status:
                            json.dump(status, fh_status, indent=4)
                        if page > 20 or pagination_json.get('has_more') == 'false':
                            has_more = False
                        time.sleep(1)
    return True
    
def get_details_from_creative_center():
    with open(list_file, 'r', encoding='utf-8') as fh_list_read:
        list_content = fh_list_read.readlines()
    with open(headers_file, 'rb') as fh_headers:
        headers_json = json.load(fh_headers)
    headers = headers_json.get('headers')
    for a_list in list_content:
        list_json = json.loads(a_list)
        url = f'https://ads.tiktok.com/creative_radar_api/v1/top_ads/v2/detail?material_id={list_json.get('id')}'
        print(f'url: {url}')
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f'Request Error: {response.status_code}')
            exit(0)
        response_json = response.json()
        data_json = response_json.get('data')
        if data_json == None:
            print('data_json is None')
            continue
        result_json = {
            "id": data_json.get('id'),
            "brand_name": data_json.get('brand_name'),
            "comment": data_json.get('comment'),
            "share": data_json.get('share'),
            "has_summary": data_json.get('has_summary'),
            "keyword_list": data_json.get('keyword_list'),
            "landing_page": data_json.get('landing_page'),
            "source": data_json.get('source'),
        }
        with open(detail_file, 'a') as fh_detail_write:
            fh_detail_write.write(json.dumps(result_json) + '\n')
        
        
def main():
    parser = argparse.ArgumentParser(description="TikTok ads scraper")
    parser.add_argument('--verbose', '-v', action='store_true', help="Enable verbose mode")
    parser.add_argument('--mode', '-m', type=str, default='all', help="Specify list or detail to get")
    args = parser.parse_args()
    if args.verbose:
        print("Verbose mode is enabled.")
    if not args.mode:
        print("[-] Error: Mode not given")
        exit(0)
    mode = args.mode
    if mode == 'list':
        get_lists_from_creative_center()
    elif mode == 'detail':
        get_details_from_creative_center()
        
if __name__ == '__main__':
    main()