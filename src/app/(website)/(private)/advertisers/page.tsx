'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import ProductItem from '@/components/ProductItem'
import Image from 'next/image'
import Link from 'next/link'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function Advertisers() {
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
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Advertisers', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <p className="text-2xl font-bold text-center text-black dark:text-white">
          Browse Advertisers
        </p>
        <div className="flex items-center justify-center">
          <div className="flex flex-row p-1 rounded-lg w-max bg-grayLight dark:bg-grayDark">
            <div className="flex flex-row items-center justify-center w-24 h-8 gap-1 bg-white rounded-md cursor-pointer dark:bg-grayDarker">
              <Image src="/assets/icons/light-active-all.svg" alt="" width={20} height={20} />
              <span className="text-base text-primaryDark">All</span>
            </div>
            <div className="flex flex-row items-center justify-center h-8 gap-1 rounded-md cursor-pointer w-28">
              <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
              <span className="text-base text-primaryDark">Tiktok</span>
            </div>
            <div className="flex flex-row items-center justify-center h-8 gap-1 rounded-md cursor-pointer w-28">
              <div className="w-5 h-5 bg-no-repeat dark:bg-facebook-dark bg-facebook-light"></div>
              <span className="text-base text-grayDark dark:text-grayLightActive">Facebook</span>
            </div>
          </div>
        </div>
        {/* Search and Exclusions */}
        <div className="relative flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="flex flex-row flex-wrap justify-center gap-2">
            <select className="w-full px-4 py-2 text-sm bg-white border rounded-md outline-none lg:w-auto dark:bg-grayDarker dark:text-white dark:border-grayDark">
              <option value="">Advertiser Keyword</option>
              <option value="keyword1">Keyword 1</option>
              <option value="keyword2">Keyword 2</option>
            </select>
            <input
              type="text"
              placeholder="Enter keywords, Ads info, text, link etc"
              className="flex-grow px-4 py-2 text-sm border rounded-md outline-none dark:text-white bg-grayLight dark:bg-grayDark dark:border-grayDark"
            />
          </div>
          <div className="flex flex-row items-center justify-center lg:absolute lg:right-0">
            <button className="px-2 py-2 text-sm text-black rounded-md dark:text-white">
              Collapse
            </button>
            <div className="w-3 h-3 bg-no-repeat dark:bg-header-dark-corner bg-header-light-corner"></div>
          </div>
        </div>
        {/* Filter Tabs */}
        <div className="flex items-center justify-start">
          <div className="flex flex-row items-center justify-start w-full gap-2 py-2 border-b-2 border-grayLight dark:border-grayDark">
            <div className="flex flex-col items-center cursor-pointer">
              <div className="flex flex-row items-center justify-center gap-2 px-2">
                <Image src="/assets/icons/light-active-all.svg" width={20} height={20} alt="" />
                <span className="mb-1 font-semibold text-primaryNormal sm:mr-4">All</span>
              </div>
              <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 px-2 text-sm cursor-pointer text-grayNormal dark:text-white">
              <div className="w-5 h-5 bg-no-repeat dark:bg-commerce-dark bg-commerce-light"></div>
              <p>E-commerce </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 px-2 text-sm cursor-pointer text-grayNormal dark:text-white">
              <div className="w-4 h-4 bg-no-repeat dark:bg-website-dark bg-website-light"></div>
              <p>Website</p>
            </div>
          </div>
        </div>
        {/* Filter Options */}
        <div className="flex flex-row items-start mt-4 text-grayNormal dark:text-white">
          <p className="w-10 mr-8">Basic:</p>
          <div className="flex flex-row flex-wrap gap-2">
            <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
              <option value="">Ecom Platform</option>
            </select>
            <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
              <option value="">Region/Country</option>
            </select>
            <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
              <option value="">No. of Ads</option>
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
              <option value="">Ad Run Time</option>
            </select>
            <input
              className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
              defaultValue="Start Date"
            />
            <input
              className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
              defaultValue="End Date"
            />
          </div>
        </div>
        <div className="flex flex-row items-start text-grayNormal dark:text-white">
          <p className="w-10 mr-8">Time:</p>
          <div className="flex flex-row flex-wrap gap-2">
            <button className="px-4 py-2 text-sm bg-white border rounded-md outline-none dark:bg-grayDarker dark:border-grayDark">
              All
            </button>
            <button className="px-4 py-2 text-sm bg-white border rounded-md outline-none dark:bg-grayDarker dark:border-grayDark">
              Yesterday
            </button>
            <button className="px-4 py-2 text-sm bg-white border rounded-md outline-none dark:bg-grayDarker dark:border-grayDark">
              Last 7 Days
            </button>
            <button className="px-4 py-2 text-sm bg-white border rounded-md outline-none dark:bg-grayDarker dark:border-grayDark">
              Last 30 Days
            </button>
            <button className="px-4 py-2 text-sm bg-white border rounded-md outline-none dark:bg-grayDarker dark:border-grayDark">
              Last 90 Days
            </button>
          </div>
        </div>
        {/* Additional Actions */}
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
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
          <div className="flex flex-row flex-wrap gap-2">
            <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark">
              Clear All
            </button>
            <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark">
              Save Filter
            </button>
          </div>
        </div>
        <div className="mt-3 custom-scrollbar overflow-x-auto max-w-[90vw] sm:max-w-full rounded-lg">
          <table className="min-w-full border border-collapse table-auto border-grayLight dark:border-grayDark">
            <thead className="bg-gray-100 dark:bg-grayDark">
              <tr>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Advertiser
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Platform
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Number of Ads
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Impressions (TikTok)
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Likes
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Durations
                </th>
                <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                  Regions
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
                  className="relative bg-white border-b dark:bg-grayDarker h-15 border-grayLight dark:border-grayDark"
                >
                  <td className="px-4 py-2 text-sm text-dark dark:text-white w-[300px] min-w-[300px]">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/assets/images/light-shopitem-image1.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      <p className="pt-2 text-sm font-bold text-black dark:text-white">
                        {row.advertiser}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">
                    <div className="flex flex-row gap-2">
                      <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
                      <div className="w-5 h-5 bg-no-repeat dark:bg-facebook-dark bg-facebook-light"></div>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.numberAds}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.impression}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.like}</td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.durations}</td>
                  <td className="px-4 py-2">
                    <div className="flex flex-row gap-1">
                      <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                      <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                      <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                      <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-row gap-1">
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                      <Image
                        src="/assets/images/table-item-image.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm text-dark dark:text-white">
                    <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-bookmark bg-item-light-bookmark"></div>
                    <Link href="/advertisers/details" className="absolute inset-0"></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
