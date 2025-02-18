(async () => {
  const limit = 10; // This is the maximum limit
  const accessToken = 'EAAO6YiKbTzwBO9ZAgn3ufLbscYqElZANK4qHhrRLnUVNzdg5LDD0pC2wclIC94CP5nxSQurUs3oUWBQSdgAW0J3HMeEZBEphJbFRN8c9Vc4ZBzWsXZAGhIHEu7oRQXbXawUN3ZAXLphkGr9RCvu11UQUYUkFh5YgXvEuXpYQwzqEmjLZAXXT37HWkUIRvqcrRQ4P4N5DoK5w2sIaTBr';
  const reachedCountries= ['']; //['BR', 'IN', 'GB', 'US', 'CA', 'AR', 'AU', 'AT', 'BE', 'CL', 'CN', 'CO', 'HR', 'DK', 'DO', 'EG', 'FI', 'FR', 'DE', 'GR', 'HK', 'ID', 'IE', 'IL', 'IT', 'JP', 'JO', 'KW', 'LB', 'MY', 'MX', 'NL', 'NZ', 'NG', 'NO', 'PK', 'PA', 'PE', 'PH', 'PL', 'RU', 'SA', 'RS', 'SG', 'ZA', 'KR', 'ES', 'SE', 'CH', 'TW', 'TH', 'TR', 'AE', 'VE', 'PT', 'LU', 'BG', 'CZ', 'SI', 'IS', 'SK', 'LT', 'TT', 'BD', 'LK', 'KE', 'HU', 'MA', 'CY', 'JM', 'EC', 'RO', 'BO', 'GT', 'CR', 'QA', 'SV', 'HN', 'NI', 'PY', 'UY', 'PR', 'BA', 'PS', 'TN', 'BH', 'VN', 'GH', 'MU', 'UA', 'MT', 'BS', 'MV', 'OM', 'MK', 'LV', 'EE', 'IQ', 'DZ', 'AL', 'NP', 'MO', 'ME', 'SN', 'GE', 'BN', 'UG', 'GP', 'BB', 'AZ', 'TZ', 'LY', 'MQ', 'CM', 'BW', 'ET', 'KZ', 'NA', 'MG', 'NC', 'MD', 'FJ', 'BY', 'JE', 'GU', 'YE', 'ZM', 'IM', 'HT', 'KH', 'AW', 'PF', 'AF', 'BM', 'GY', 'AM', 'MW', 'AG', 'RW', 'GG', 'GM', 'FO', 'LC', 'KY', 'BJ', 'AD', 'GD', 'VI', 'BZ', 'VC', 'MN', 'MZ', 'ML', 'AO', 'GF', 'UZ', 'DJ', 'BF', 'MC', 'TG', 'GL', 'GA', 'GI', 'CD', 'KG', 'PG', 'BT', 'KN', 'SZ', 'LS', 'LA', 'LI', 'MP', 'SR', 'SC', 'VG', 'TC', 'DM', 'MR', 'AX', 'SM', 'SL', 'NE', 'CG', 'AI', 'YT', 'CV', 'GN', 'TM', 'BI', 'TJ', 'VU', 'SB', 'ER', 'WS', 'AS', 'FK', 'GQ', 'TO', 'KM', 'PW', 'FM', 'CF', 'SO', 'MH', 'VA', 'TD', 'KI', 'ST', 'TV', 'NR', 'RE', 'LR', 'ZW', 'CI', 'MM', 'AN', 'AQ', 'BQ', 'BV', 'IO', 'CX', 'CC', 'CK', 'CW', 'TF', 'GW', 'HM', 'XK', 'MS', 'NU', 'NF', 'PN', 'BL', 'SH', 'MF', 'PM', 'SX', 'GS', 'SS', 'SJ', 'TL', 'TK', 'UM', 'WF', 'EH']
  const searchTerms=`''`; //`'e-commerce'`;
  // ads_archive?ad_reached_countries=['']&limit=10&pretty=0&search_terms=''&ad_type=FINANCIAL_PRODUCTS_AND_SERVICES_ADS&fields=id,ad_creation_time,ad_creative_bodies,ad_creative_link_captions,ad_creative_link_descriptions,ad_creative_link_titles,ad_delivery_start_time,ad_delivery_stop_time,ad_snapshot_url,beneficiary_payers,eu_total_reach,languages,page_id,page_name,publisher_platforms
  const deliveryDateMin = '2022-10-01';
  const deliveryDateMax = '2022-10-01';
  const response = await fetch(
    `https://graph.facebook.com/v21.0/ads_archive?access_token=${accessToken}&search_terms=${searchTerms}&limit=${limit}&ad_reached_countries=[${reachedCountries.map(code=>`'${code}'`).join(',')}]&fields=id,ad_creation_time,ad_creative_bodies,ad_creative_link_captions,ad_creative_link_descriptions,ad_creative_link_titles,ad_delivery_start_time,ad_delivery_stop_time,ad_snapshot_url,beneficiary_payers,eu_total_reach,languages,page_id,page_name,publisher_platforms&ad_delivery_date_min=${deliveryDateMin}&ad_delivery_date_max=${deliveryDateMax}&ad_active_status=ALL`,
    //"https://graph.facebook.com/v21.0/ads_archive?access_token=EAASYwsAmLZBABO10qyh7ZChHlTh1CtlDNo3JH7iRpm4ZBtw0gZAmLZCHNCED4MPqvg8jMZA1HSBm3DbhhkHiyyjZBcXsf2ERjEUKbLlpOZCnX3z2MpaxMEZAcj8u8XpmTdl9h71aemZClkN92HlbQoTEmIZAHAB2ZBJYSKCCWIC3m9qNhkwiubWTbtp8MNdMzPBbHFM8ZBR26WKEe453ZCsSbVRIvykbPx3PcRrnJUEWiVP3AZBHAZDZD&search_terms=%27e-commerce%27&limit=1982&ad_reached_countries=[%27US%27]&after=c2NyYXBpbmdfY3Vyc29yOk1UY3pNekk1T1RJd01Eb3hNRGt4TmpNNU1EVTFORE01TlRVMgZDZD",
    {
      "method": "GET"
    });
  // console.log(await response.text());
  const { data, paging } = await response.json();
  console.log(data, paging);
})()

// Access-token: 
// EAAO6YiKbTzwBO9ZAgn3ufLbscYqElZANK4qHhrRLnUVNzdg5LDD0pC2wclIC94CP5nxSQurUs3oUWBQSdgAW0J3HMeEZBEphJbFRN8c9Vc4ZBzWsXZAGhIHEu7oRQXbXawUN3ZAXLphkGr9RCvu11UQUYUkFh5YgXvEuXpYQwzqEmjLZAXXT37HWkUIRvqcrRQ4P4N5DoK5w2sIaTBr
// Lifespan: 60 days from 2024/12/17

// Token Exchange: 
// https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=1049355580297020&client_secret=8fe3c257f355f0bea532527942003b5c&fb_exchange_token=EAAO6YiKbTzwBO4HA6QZBMdZBcKlpG45ZBqYNxLxSBOAqfBSZCKmQLp2xoeUJta58ZCNfsK7JcJ35pam5OWjsSe4iILVyohSgqZC2efq1DteXjXBZCiBuhlzSEauvAZBWf39Y5TQY161GY3AFrKT3dH7TWNOkVtJmZBs3psLiQNAZCXgMedAyROlDiZAp4kvZBMJxBUQquJ18u1A6D48oScbiG301RIFDvcOWqUm6ZBRdGIcjqMxGAe38f2wZBNKgZDZD


$ python3 fb_ads_library_api_cli.py -t EAAO6YiKbTzwBO9ZAgn3ufLbscYqElZANK4qHhrRLnUVNzdg5LDD0pC2wclIC94CP5nxSQurUs3oUWBQSdgAW0J3HMeEZBEphJbFRN8c9Vc4ZBzWsXZAGhIHEu7oRQXbXawUN3ZAXLphkGr9RCvu11UQUYUkFh5YgXvEuXpYQwzqEmjLZAXXT37HWkUIRvqcrRQ4P4N5DoK5w2sIaTBr -f 'page_id,ad_snapshot_url,ad_delivery_start_time' -c 'CA' -s '.' -v count