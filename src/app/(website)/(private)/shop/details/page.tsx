'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import AdsItem from '@/components/AdsItem'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function ShopDetail() {
  const [curStatus, setCurStatus] = useState(0)
  const [activeButton, setActiveButton] = useState('7d')

  const adInformation = [
    { label: 'Sold', value: '231' },
    { label: 'Impressions', value: '185.9k' },
    { label: 'Like', value: '4.9k' },
    { label: 'Shares', value: '2' },
    { label: 'Ad Cost', value: '$1.6K-6.7K' },
    { label: 'Store', value: 'Framealove Store', underline: true },
    { label: 'Sales', value: '671' },
    { label: 'Platform', value: 'Tiktok Shop' },
  ]
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
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Shop', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-black dark:text-white text-2xl font-bold">Framealove</p>
          <div className="flex flex-row gap-[10px]">
            <div className="flex flex-row items-center justify-center gap-2 p-2 border rounded-lg text-xs border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark text-black dark:text-white">
              <div className="h-[14px] w-[14px] dark:bg-woocommerce-dark bg-woocommerce-light bg-no-repeat"></div>
              See Shop Site
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 border rounded-lg text-xs border-grayLightActive dark:border-grayNormal bg-white dark:bg-grayDarker text-black dark:text-white">
              Share
              <div className="h-4 w-4 dark:bg-share1-dark bg-share1-light bg-no-repeat"></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 border rounded-lg text-xs border-grayLightActive dark:border-grayNormal bg-white dark:bg-grayDarker text-black dark:text-white">
              Collect
              <div className="h-4 w-4 dark:bg-item-dark-bookmark bg-item-light-bookmark bg-no-repeat"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-2 border-b-2 border-grayLight dark:border-grayDark py-2">
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
              Ad Analytics
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
              Growing Ads Competition
            </span>
            {curStatus === 1 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
          </div>
        </div>
        {curStatus === 0 ? (
          <>
            <div className="flex flex-col justify-center items-center lg:items-stretch lg:grid lg:grid-cols-[1.5fr_3fr_2fr] gap-4 py-4">
              <div className="flex flex-col items-center md:items-start rounded-2xl bg-cover bg-center bg-[url('/assets/images/ads-detail-img.png')] w-full lg:min-w-[348px] min-h-[400px]"></div>
              <div className="flex flex-col justify-between gap-3">
                <div className="flex flex-col border border-grayLight dark:border-grayDark bg-white dark:bg-grayDarker text-black dark:text-white rounded-md shadow p-4">
                  <p className="text-sm text-grayNormal font-semibold mb-2">Product Name</p>
                  <p className="text-sm mb-2">Timeless Elegance Rolex Chain WristWatch</p>
                  <p className="text-sm text-grayNormal font-semibold mb-2">Price</p>
                  <p className="text-s[18px] font-semibold text-primaryNormal mb-2">$19,000</p>
                  <p className="text-sm text-grayNormal font-semibold mb-2">Description</p>
                  <p className="text-sm mb-2">
                    Estimated 3 business days of production + shipping time, unless coupled with
                    products that have a longer stated production time. This does not include
                    holidays.
                  </p>
                  <div className="flex flex-row gap-[6px] mb-2">
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                      <div className="h-4 w-4 dark:bg-item-dark-chart bg-item-light-chart bg-no-repeat"></div>
                      <p className="text-xs text-black dark:text-white">185.9K</p>
                    </div>
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                      <div className="h-4 w-4 dark:bg-item-dark-hand bg-item-light-hand bg-no-repeat"></div>
                      <p className="text-xs text-black dark:text-white">5.9K</p>
                    </div>
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                      <div className="h-4 w-4 dark:bg-item-dark-calendar bg-item-light-calendar bg-no-repeat"></div>
                      <p className="text-xs text-black dark:text-white">8</p>
                    </div>
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                      <div className="h-4 w-4 dark:bg-item-dark-share bg-item-light-share bg-no-repeat"></div>
                      <p className="text-xs text-black dark:text-white">2</p>
                    </div>
                  </div>
                  <div className="bg-grayLight dark:bg-grayDark rounded-md px-2 flex flex-row items-center justify-center w-max gap-1">
                    <div className="h-4 w-4 dark:bg-link-dark bg-link-light bg-no-repeat"></div>
                    <p className="text-xs text-black dark:text-white py-1">Tiktok Shop Now</p>
                    <div className="border-r border-grayLightActive dark:border-grayDarker w-1 h-full"></div>
                    <p className="text-xs text-primaryNormal py-1">Freamalove</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 border border-grayLight dark:border-grayDark bg-white dark:bg-grayDarker text-black dark:text-white rounded-md shadow p-4">
                  <div className="flex flex-col">
                    <p className="text-xs text-grayNormal dark:text-grayLightActive">
                      Product link:
                    </p>
                    <p className="text-sm underline">
                      https://www.framealove.com/products/timeless-elegance-rolex-chain-wristwatch/
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-between border border-grayLight dark:border-grayDark bg-white dark:bg-grayDarker text-black dark:text-white rounded-md shadow w-full">
                <p className="text-base font-semibold p-3">Ad Information</p>
                <div className="flex flex-col pb-1">
                  {adInformation.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-[10px] border-t border-grayLight dark:border-grayDark"
                    >
                      <p className="text-xs text-grayDark dark:text-grayLightActive">
                        {item.label}
                      </p>
                      <p
                        className={`text-black dark:text-white font-medium text-sm ${item.underline ? 'underline' : ''}`}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-xl text-black dark:text-white font-semibold">Data Analytics</p>
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
            <div className="flex flex-row flex-wrap gap-6">
              <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
                <div className="h-[30px] w-[30px] dark:bg-dark-card-impression bg-light-card-impression bg-no-repeat"></div>
                <p className="text-xs text-grayDark dark:text-grayLightActive">Impressions</p>
                <p className="text-[18px] text-black dark:text-white">185.9k</p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
                <div className="h-[30px] w-[30px] dark:bg-dark-card-like bg-light-card-like bg-no-repeat"></div>
                <p className="text-xs text-grayDark dark:text-grayLightActive">Likes</p>
                <p className="text-[18px] text-black dark:text-white">4.9k</p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
                <div className="h-[30px] w-[30px] dark:bg-dark-card-number bg-light-card-number bg-no-repeat"></div>
                <p className="text-xs text-grayDark dark:text-grayLightActive">Number of Ads</p>
                <p className="text-[18px] text-black dark:text-white">5</p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
                <div className="h-[30px] w-[30px] dark:bg-dark-card-sold bg-light-card-sold bg-no-repeat"></div>
                <p className="text-xs text-grayDark dark:text-grayLightActive">Sold</p>
                <p className="text-[18px] text-black dark:text-white">185</p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
                <div className="h-[30px] w-[30px] dark:bg-dark-card-cost bg-light-card-cost bg-no-repeat"></div>
                <p className="text-xs text-grayDark dark:text-grayLightActive">Ads Cost</p>
                <p className="text-[18px] text-black dark:text-white">$1.6K-6.7K</p>
              </div>
            </div>
            <div>Graphic</div>
            <div className="flex flex-col gap-5">
              <p className="text-xl text-black dark:text-white font-semibold">Product Details</p>
              <div className="custom-scrollbar overflow-x-auto max-w-[90vw] sm:max-w-full rounded-lg">
                <table className="min-w-full table-auto border-collapse border border-grayLight dark:border-grayDark">
                  <thead className="bg-gray-100 dark:bg-grayDark">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                        Date
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                        Sold
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                        Number of Ads
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                        Ad Impression
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                        Ad Cost
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-grayNormal dark:text-grayLight">
                        Likes
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
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.ads}</td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">
                          {row.impressions}
                        </td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.cost}</td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.likes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <p className="text-[18px] font-semibold text-black dark:text-white">
                Similar Growing Ads Competition
              </p>
              <div className="flex flex-row items-center justify-center gap-1 p-2 text-xs border rounded-lg border-grayLightActive dark:border-grayNormal bg-white dark:bg-grayDark text-black dark:text-white">
                <div className="h-[14px] w-[14px] dark:bg-download-dark bg-download-light bg-no-repeat"></div>
                Download Video
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 border-b-2 border-grayLight dark:border-grayDark py-2">
              <div className="flex flex-row items-center justify-center gap-2 px-2 text-grayNormal dark:text-white text-sm cursor-pointer">
                <div className="h-4 w-4 dark:bg-all-dark bg-all-light bg-no-repeat"></div>
                <p>All</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="flex flex-row items-center justify-center gap-2 px-2">
                  <div className="h-5 w-5 dark:bg-tiktok-dark bg-tiktok-light bg-no-repeat mb-1"></div>
                  <span className="text-primaryNormal font-semibold mb-1 sm:mr-4">Tiktok</span>
                </div>
                <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 px-2 text-grayNormal dark:text-white text-sm cursor-pointer">
                <div className="h-5 w-5 dark:bg-facebook-dark bg-facebook-light bg-no-repeat"></div>
                <p>Facebook</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-3">
          <p className="text-xl text-black dark:text-white font-semibold">Tiktok Ads (5)</p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <AdsItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
