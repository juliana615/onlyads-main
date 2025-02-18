'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export default function AdvertiserData() {
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
        <p className="text-xl font-semibold text-black dark:text-white">Data Analytics</p>
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
      <div className="flex flex-row flex-wrap gap-6 p-5 border rounded-lg shadow-sm border-grayLight dark:border-grayDark">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Impressions (TikTok)</p>
          <p className="text-[18px] text-black dark:text-white">6.67B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">
            Likes (TikTok & Facebook)
          </p>
          <p className="text-[18px] text-black dark:text-white">2.3B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Like Rate (TikTok)</p>
          <p className="text-[18px] text-black dark:text-white">1.8%</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">
            Number of Ads (TikTok & Facebook)
          </p>
          <p className="text-[18px] text-black dark:text-white">4.6B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Ad Cost (TikTok)</p>
          <p className="text-[18px] text-black dark:text-white">$67.89M-1.9B</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">
            Ad Run Time (TikTok & Facebook)
          </p>
          <p className="text-[18px] text-black dark:text-white">1081</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">
            Start Date (TikTok & Facebook)
          </p>
          <p className="text-[18px] text-black dark:text-white">Nov 12, 2022</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">
            End Date (TikTok & Facebook)
          </p>
          <p className="text-[18px] text-black dark:text-white">Nov 12, 2022</p>
        </div>
      </div>
      <div>Graphic</div>
      <div className="flex flex-col gap-5">
        <p className="text-xl font-semibold text-black dark:text-white">Product Details</p>
        <div className="custom-scrollbar overflow-x-auto max-w-[90vw] sm:max-w-full rounded-lg">
          <table className="min-w-full border border-collapse table-auto border-grayLight dark:border-grayDark">
            <thead className="bg-gray-100 dark:bg-grayDark">
              <tr>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Date
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Impressions
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Likes
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Like Rate
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Number of Ads
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Ad Run Time
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Ad Cost
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Ad Date
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-grayDarker h-15 border-grayLight dark:border-grayDark"
                >
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.date}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.sold}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.ads}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.impressions}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.cost}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.likes}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.impressions}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.impressions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col flex-wrap p-5 border rounded-lg shadow-sm border-grayLight dark:border-grayDark">
        <p className="text-base font-semibold text-black dark:text-white">
          Countries/Region of Ads
        </p>
        <div className="flex flex-col flex-wrap justify-between sm:flex-row">
          <div className="flex flex-col sm:w-[45%] justify-between mt-4 space-y-2">
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
              <span className="text-base text-black dark:text-white">Tiktok</span>
            </div>
            <p className="text-sm font-medium text-left text-grayNormal dark:text-grayLight">
              Countries
            </p>
            <div className="flex items-center justify-start gap-2">
              <Image
                src="/assets/flags/canada-medium.png"
                alt="Canada Flag"
                width={36}
                height={28}
              />
              <div className="flex w-full px-2 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                <p className="text-xs font-medium text-warningDarker">92.78%</p>
              </div>
            </div>
            {[...Array(5)].map((_, index) => (
              <div className="flex items-center justify-start gap-2" key={index}>
                <Image
                  src="/assets/flags/canada-medium.png"
                  alt="Canada Flag"
                  width={36}
                  height={28}
                />
                <div className="flex bg-warningLightActive dark:bg-warningLight w-[40%] rounded-md px-2 py-1">
                  <p className="text-xs font-medium text-warningDarker">12.43%</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:w-[45%] justify-between mt-4 space-y-2">
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 bg-no-repeat dark:bg-facebook-dark bg-facebook-light"></div>
              <span className="text-base text-black dark:text-white">Facebook</span>
            </div>
            <p className="text-sm font-medium text-left text-grayNormal dark:text-grayLight">
              Countries
            </p>
            <div className="flex items-center justify-start gap-2">
              <Image
                src="/assets/flags/canada-medium.png"
                alt="Canada Flag"
                width={36}
                height={28}
              />
              <div className="flex w-full px-2 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                <p className="text-xs font-medium text-warningDarker">92.78%</p>
              </div>
            </div>
            {[...Array(5)].map((_, index) => (
              <div className="flex items-center justify-start gap-2" key={index}>
                <Image
                  src="/assets/flags/canada-medium.png"
                  alt="Canada Flag"
                  width={36}
                  height={28}
                />
                <div className="flex bg-warningLightActive dark:bg-warningLight w-[40%] rounded-md px-2 py-1">
                  <p className="text-xs font-medium text-warningDarker">12.43%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
