'use client'

import React, { useState } from 'react'
import AdsItem from '../AdsItem'
import Image from 'next/image'

export default function AdvertiserTiktok() {
  const [curStatus, setCurStatus] = useState(0)
  const [activeButton, setActiveButton] = useState('7d')

  const data = [
    {
      advertiser: 'shop.tiktok.com',
      numberAds: '23.7M',
      impression: '71.5M',
      like: '237',
      durations: '23.7M',
    },
    {
      advertiser: 'shop.tiktok.com',
      numberAds: '23.7M',
      impression: '71.5M',
      like: '237',
      durations: '23.7M',
    },
    {
      advertiser: 'shop.tiktok.com',
      numberAds: '23.7M',
      impression: '71.5M',
      like: '237',
      durations: '23.7M',
    },
    {
      advertiser: 'shop.tiktok.com',
      numberAds: '23.7M',
      impression: '71.5M',
      like: '237',
      durations: '23.7M',
    },
  ]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-semibold text-black dark:text-white">Tiktok Analytics</p>
        <div className="flex items-center justify-center">
          <div className="flex overflow-hidden border border-l rounded-lg border-grayLightActive dark:border-grayNormal">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeButton === '7d'
                  ? 'bg-primaryNormal text-white dark:text-black'
                  : 'bg-grayLight dark:bg-grayDark text-dark dark:text-white'
              }`}
              onClick={() => setActiveButton('7d')}
            >
              7d
            </button>
            <button
              className={`border-l border-grayLightActive dark:border-grayNormal px-4 py-2 text-sm font-medium ${
                activeButton === '30d'
                  ? 'bg-primaryNormal text-white dark:text-black'
                  : 'bg-grayLight dark:bg-grayDark text-dark dark:text-white'
              }`}
              onClick={() => setActiveButton('30d')}
            >
              30d
            </button>
            <button
              className={`border-l border-grayLightActive dark:border-grayNormal px-4 py-2 text-sm font-medium ${
                activeButton === '3m'
                  ? 'bg-primaryNormal text-white dark:text-black'
                  : 'bg-grayLight dark:bg-grayDark text-dark dark:text-white'
              }`}
              onClick={() => setActiveButton('3m')}
            >
              3m
            </button>
            <button
              className={`border-l border-grayLightActive dark:border-grayNormal px-4 py-2 text-sm font-medium ${
                activeButton === '1y'
                  ? 'bg-primaryNormal text-white dark:text-black'
                  : 'bg-grayLight dark:bg-grayDark text-dark dark:text-white'
              }`}
              onClick={() => setActiveButton('1y')}
            >
              1y
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-6 p-5 border rounded-lg shadow-sm lg:justify-between border-grayLight dark:border-grayDark">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Impressions</p>
          <p className="text-[18px] text-black dark:text-white">6.67B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Likes</p>
          <p className="text-[18px] text-black dark:text-white">2.3B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Like Rate</p>
          <p className="text-[18px] text-black dark:text-white">1.8%</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Number of Ads</p>
          <p className="text-[18px] text-black dark:text-white">4.6B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Ad Cost</p>
          <p className="text-[18px] text-black dark:text-white">$67.89M-1.9B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Ad Run Time</p>
          <p className="text-[18px] text-black dark:text-white">1081</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Start Date</p>
          <p className="text-[18px] text-black dark:text-white">Nov 12, 2022</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">End Date</p>
          <p className="text-[18px] text-black dark:text-white">Nov 12, 2022</p>
        </div>
      </div>
      {/* Filter Tabs */}
      <div className="flex items-center justify-start mb-4">
        <div className="flex flex-row items-center justify-start w-full gap-2 py-2 border-b-2 border-grayLight dark:border-grayDark">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setCurStatus(0)}
          >
            <span
              className={`${
                curStatus === 0 ? 'text-primaryNormal font-semibold mb-2' : 'text-grayNormal mb-1'
              } sm:mr-4`}
            >
              Tiktok Ads
            </span>
            {curStatus === 0 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setCurStatus(1)}
          >
            <span
              className={`${
                curStatus === 1 ? 'text-primaryNormal font-semibold mb-2' : 'text-grayNormal mb-1'
              } sm:mr-4`}
            >
              Tiktok Influencers
            </span>
            {curStatus === 1 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
          </div>
        </div>
      </div>
      {/* Filter Options */}
      {curStatus === 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold text-black dark:text-white">Tiktok Ads (20)</p>
          {/* Filter tabs */}
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex flex-row flex-wrap justify-center gap-2">
              <select className="w-full px-4 py-2 text-sm bg-white border rounded-md outline-none lg:w-auto dark:bg-grayDarker dark:text-white dark:border-grayDark">
                <option value="">Ad Keyword</option>
                <option value="keyword1">Keyword 1</option>
                <option value="keyword2">Keyword 2</option>
              </select>
              <input
                type="text"
                placeholder="Enter keywords, Ads info, text, link etc"
                className="flex-grow px-4 py-2 text-sm border rounded-md outline-none dark:text-white bg-grayLight dark:bg-grayDark dark:border-grayDark"
              />
              <div className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm border rounded-md text-grayDark dark:text-white bg-grayLight dark:bg-grayDark dark:border-grayDark">
                <div className="w-4 h-4 bg-no-repeat dark:bg-filter-dark bg-filter-light"></div>
                Add Exclusions
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button className="px-2 py-2 text-sm text-black rounded-md dark:text-white">
                Collapse
              </button>
              <div className="w-3 h-3 bg-no-repeat dark:bg-header-dark-corner bg-header-light-corner"></div>
            </div>
          </div>
          {/* Filter Options */}
          <div className="flex flex-row items-start text-grayNormal dark:text-white">
            <p className="w-10 mr-8">Basic:</p>
            <div className="flex flex-row flex-wrap gap-2">
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Ecom Platform</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Region/Country</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Language</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">CTA Button</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Audience</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Landing Page Link</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Format/Duration</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row items-start text-grayNormal dark:text-white">
            <p className="w-10 mr-8">Data:</p>
            <div className="flex flex-row flex-wrap gap-2">
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Impressions</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Likes</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Comments</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Shares</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Engagements</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Download</option>
              </select>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Like Rate</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row items-start text-grayNormal dark:text-white">
            <p className="w-10 mr-8">Period:</p>
            <div className="flex flex-row flex-wrap gap-2">
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Ad Run Time</option>
              </select>
              <input
                className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                defaultValue="Creation Date"
              />
              <input
                className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                defaultValue="First Seen"
              />
              <input
                className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                defaultValue="Last Seen"
              />
              <div className="flex items-center space-x-2 w-[172px]">
                <input
                  type="checkbox"
                  id="excludeViewAds"
                  className="w-6 h-6 bg-white border border-gray-300 outline-none rounded-xl dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="excludeViewAds"
                  className="text-sm font-medium cursor-pointer dark:text-white"
                >
                  Exclude View Ads
                </label>
              </div>
              <input
                className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                defaultValue="View Ads"
              />
            </div>
          </div>
          {/* Additional Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-row items-center justify-center gap-1 px-1 text-sm text-black border rounded-md bg-grayLight dark:bg-grayDark dark:text-white dark:border-grayDark">
              <div className="w-4 h-4 bg-no-repeat dark:bg-sort-dark bg-sort-light"></div>
              <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                Sort By:
              </p>
              <select className="py-2 bg-transparent outline-none">
                <option value="">Creation Date</option>
              </select>
            </div>
            <div className="flex flex-row gap-2">
              <button className="px-4 py-2 text-sm text-black border rounded-md dark:text-white dark:border-grayDark">
                Save Current Search
              </button>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:text-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Save Filters</option>
              </select>
            </div>
          </div>
          <div className="border-t border-grayLight dark:border-grayDark"></div>
          {/* Tags */}
          <div className="flex flex-row flex-wrap items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 text-sm text-black rounded-full bg-grayLight dark:bg-grayDark dark:text-white">
              <div className="w-4 h-4 bg-no-repeat dark:bg-woocommerce-dark bg-woocommerce-light"></div>
              Woocommerce <button className="ml-2">✕</button>
            </div>
            <div className="flex flex-row gap-2">
              <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:bg-grayDarker dark:border-grayDark">
                Clear All
              </button>
              <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:bg-grayDarker dark:border-grayDark">
                Save Filter
              </button>
            </div>
          </div>
          {/* Items */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <AdsItem />
              </div>
            ))}
          </div>
        </div>
      )}
      {curStatus === 1 && (
        <div className="mt-3 custom-scrollbar overflow-x-auto max-w-[90vw] sm:max-w-full rounded-lg">
          <table className="min-w-full border border-collapse table-auto border-grayLight dark:border-grayDark">
            <thead className="bg-gray-100 dark:bg-grayDark">
              <tr>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Influencers
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Number of Ads
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Ads Cost
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Ad Run Time
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Data
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Newest Ads
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-grayDarker h-15 border-grayLight dark:border-grayDark"
                >
                  <td className="px-4 py-2 text-sm text-dark dark:text-white w-[300px] min-w-[300px]">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/assets/images/advertiser-tabel-image.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <div className="flex flex-col items-center justify-between">
                        <div className="flex flex-col items-start">
                          <p className="text-sm font-bold text-black dark:text-white">Afuna.Og</p>
                          <p className="text-sm font-medium text-grayNormal dark:text-grayLight">
                            Afuna.Og
                          </p>
                          <p>
                            <span className="text-xs text-black dark:text-white">1k</span>{' '}
                            <span className="text-xs text-grayNormal dark:text-grayLight">
                              Followers
                            </span>{' '}
                            <span className="text-xs text-black dark:text-white">52</span>{' '}
                            <span className="text-xs text-grayNormal dark:text-grayLight">
                              Videos
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.numberAds}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.impression}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.like}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">
                    <div className="flex flex-col items-start justify-between">
                      <div className="flex flex-row gap-2">
                        <p className="text-xs text-grayNormal dark:text-grayLight">Impressions:</p>
                        <p className="text-xs text-black dark:text-white">50.6K</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <p className="text-xs text-grayNormal dark:text-grayLight">Likes:</p>
                        <p className="text-xs text-black dark:text-white">120</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <p className="text-xs text-grayNormal dark:text-grayLight">Like Rate:</p>
                        <p className="text-xs text-black dark:text-white">0.24%</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-row gap-1">
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">
                    <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-bookmark bg-item-light-bookmark"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
