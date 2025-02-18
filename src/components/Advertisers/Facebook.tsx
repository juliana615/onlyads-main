'use client'

import React, { useState } from 'react'
import AdsItem from '../AdsItem'

export default function AdvertiserFacebook() {
  const [curStatus, setCurStatus] = useState(0)
  const [activeButton, setActiveButton] = useState('7d')

  const data = [
    {
      date: 'Nov 16, 2024',
      sold: 56,
      ads: 3,
      impressions: '71.5K',
      cost: '$244.56–89.69',
      likes: 567,
    },
    {
      date: 'Nov 10, 2024',
      sold: 5,
      ads: 3,
      impressions: '3K',
      cost: '$10.56–22.78',
      likes: 89,
    },
    {
      date: 'Nov 9, 2024',
      sold: 32,
      ads: 5,
      impressions: '87K',
      cost: '$23.51–42.01',
      likes: 22,
    },
    {
      date: 'Nov 2, 2024',
      sold: 78,
      ads: 1,
      impressions: '5K',
      cost: '$56.23–67.55',
      likes: 345,
    },
  ]
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl text-black dark:text-white font-semibold">Facebook Analytics</p>
        <div className="flex items-center justify-center">
          <div className="flex border border-l border-grayLightActive dark:border-grayNormal rounded-lg overflow-hidden">
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
      <div className="flex flex-row flex-wrap justify-start lg:justify-between gap-6 p-5 rounded-lg border border-grayLight dark:border-grayDark shadow-sm">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Likes</p>
          <p className="text-[18px] text-black dark:text-white">2.3B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Number of Ads</p>
          <p className="text-[18px] text-black dark:text-white">4.6B</p>
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
        <div className="flex flex-row items-center justify-start gap-2 border-b-2 border-grayLight dark:border-grayDark py-2 w-full">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setCurStatus(0)}
          >
            <span
              className={`${
                curStatus === 0
                  ? 'text-primaryNormal font-semibold mb-2'
                  : 'text-grayNormal dark:text-grayLightActive mb-1'
              } sm:mr-4`}
            >
              Facebook Ads
            </span>
            {curStatus === 0 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setCurStatus(1)}
          >
            <span
              className={`${
                curStatus === 1
                  ? 'text-primaryNormal font-semibold mb-2'
                  : 'text-grayNormal dark:text-grayLightActive mb-1'
              } sm:mr-4`}
            >
              Data Analytics
            </span>
            {curStatus === 1 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
          </div>
        </div>
      </div>
      {/* Filter Options */}
      {curStatus === 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-xl text-black dark:text-white font-semibold">Facebook Ads (20)</p>
          {/* Filter tabs */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-row flex-wrap justify-center gap-2">
              <select className="px-4 py-2 rounded-md border outline-none text-sm w-full lg:w-auto bg-white dark:bg-grayDarker dark:text-white dark:border-grayDark">
                <option value="">Ad Keyword</option>
                <option value="keyword1">Keyword 1</option>
                <option value="keyword2">Keyword 2</option>
              </select>
              <input
                type="text"
                placeholder="Enter keywords, Ads info, text, link etc"
                className="flex-grow px-4 py-2 rounded-md text-sm outline-none dark:text-white bg-grayLight dark:bg-grayDark border dark:border-grayDark"
              />
              <div className="flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-md text-sm text-grayDark dark:text-white bg-grayLight dark:bg-grayDark border dark:border-grayDark">
                <div className="h-4 w-4 dark:bg-filter-dark bg-filter-light bg-no-repeat"></div>
                Add Exclusions
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button className="px-2 py-2 rounded-md text-sm text-black dark:text-white">
                Collapse
              </button>
              <div className="h-3 w-3 dark:bg-header-dark-corner bg-header-light-corner bg-no-repeat"></div>
            </div>
          </div>
          {/* Filter Options */}
          <div className="flex flex-row items-start text-grayNormal dark:text-white">
            <p className="mr-8 w-10">Basic:</p>
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
            <p className="mr-8 w-10">Data:</p>
            <div className="flex flex-row flex-wrap gap-2">
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
                <option value="">Reactions</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row items-start text-grayNormal dark:text-white">
            <p className="mr-8 w-10">Period:</p>
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
            </div>
          </div>
          {/* Additional Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-row items-center justify-center px-1 gap-1 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white  dark:border-grayDark">
              <div className="h-4 w-4 dark:bg-sort-dark bg-sort-light bg-no-repeat"></div>
              <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                Sort By:
              </p>
              <select className="py-2 bg-transparent outline-none">
                <option value="">Creation Date</option>
              </select>
            </div>
            <div className="flex flex-row gap-2">
              <button className="px-4 py-2 border rounded-md text-sm text-black dark:text-white dark:border-grayDark">
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
            <div className="flex flex-row gap-1 items-center justify-center px-3 py-2 bg-grayLight dark:bg-grayDark text-black dark:text-white rounded-full text-sm">
              <div className="h-4 w-4 dark:bg-woocommerce-dark bg-woocommerce-light bg-no-repeat"></div>
              Woocommerce <button className="ml-2">✕</button>
            </div>
            <div className="flex flex-row gap-2">
              <button className="px-4 py-2 border rounded-md text-sm text-grayDark dark:bg-grayDarker dark:border-grayDark shadow-sm">
                Clear All
              </button>
              <button className="px-4 py-2 border rounded-md text-sm text-grayDark dark:bg-grayDarker dark:border-grayDark shadow-sm">
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
        <div className="flex flex-col gap-3">
          <div>Graphic</div>
          <div className="custom-scrollbar overflow-x-auto max-w-[90vw] sm:max-w-full rounded-lg">
            <table className="min-w-full table-auto border-collapse border border-grayLight dark:border-grayDark">
              <thead className="bg-gray-100 dark:bg-grayDark">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                    Impressions
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                    Number of Ads
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                    Likes
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                    Comments
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                    Share
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={index}
                    className="bg-white dark:bg-grayDarker h-15 border-b border-grayLight dark:border-grayDark"
                  >
                    <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.date}</td>
                    <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.sold}</td>
                    <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.cost}</td>
                    <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.likes}</td>
                    <td className="px-4 py-2 text-sm text-dark dark:text-white">
                      {row.impressions}
                    </td>
                    <td className="px-4 py-2 text-sm text-dark dark:text-white">
                      {row.impressions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
