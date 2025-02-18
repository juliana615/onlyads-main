'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import ProductItem from '@/components/ProductItem'
import Image from 'next/image'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function ShopItem() {
  const [curStatus, setCurStatus] = useState(0)
  const [activeButton, setActiveButton] = useState('7d')

  const data = [
    {
      date: 'Nov 16, 2024',
      price: '$23,423',
      sold: 56,
      ads: 3,
      impressions: '71.5K',
      cost: '$244.56–89.69',
      likes: 567,
      likesrate: '1.2%',
    },
    {
      date: 'Nov 10, 2024',
      price: '$23,423',
      sold: 5,
      ads: 3,
      impressions: '3K',
      cost: '$10.56–22.78',
      likes: 89,
      likesrate: '1.2%',
    },
    {
      date: 'Nov 9, 2024',
      price: '$23,423',
      sold: 32,
      ads: 5,
      impressions: '87K',
      cost: '$23.51–42.01',
      likes: 22,
      likesrate: '1.2%',
    },
    {
      date: 'Nov 2, 2024',
      price: '$23,423',
      sold: 78,
      ads: 1,
      impressions: '5K',
      cost: '$56.23–67.55',
      likes: 345,
      likesrate: '1.2%',
    },
  ]
  const productData = [
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
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex flex-row items-center justify-center gap-2">
            <Image width={20} height={20} src="/assets/images/light-shopitem-image1.png" alt="" />
            <p className="text-2xl font-bold text-black dark:text-white">Framealove</p>
          </div>
          <div className="flex flex-row gap-[10px]">
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black bg-white border rounded-lg border-grayLightActive dark:border-grayNormal dark:bg-grayDarker dark:text-white">
              Share
              <div className="w-4 h-4 bg-no-repeat dark:bg-share1-dark bg-share1-light"></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black bg-white border rounded-lg border-grayLightActive dark:border-grayNormal dark:bg-grayDarker dark:text-white">
              Collect
              <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-bookmark bg-item-light-bookmark"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 border rounded-lg shadow-sm gap-7 border-grayLight dark:border-grayDark">
          <div className="flex flex-row flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-xs text-grayDark dark:text-grayLightActive">Platform</p>
              <p className="text-[18px] text-black dark:text-white">TikTok Shop</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs text-grayDark dark:text-grayLightActive">Country</p>
              <div className="flex flex-row items-center justify-center gap-1">
                <Image width={20} height={20} src="/assets/flags/canada.png" alt="" />
                <p className="text-[18px] text-black dark:text-white">Canada</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs text-grayDark dark:text-grayLightActive">
                First Seen-Last Seen
              </p>
              <p className="text-[18px] text-black dark:text-white">Aug 24, 2024-Dec 6, 2024</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-6">
            <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
              <div className="h-[30px] w-[30px] dark:bg-dark-card-sales bg-light-card-sales bg-no-repeat"></div>
              <p className="text-xs text-grayDark dark:text-grayLightActive">
                Sales / Sales by Ads
              </p>
              <p className="text-[18px] text-black dark:text-white">185.9K/653.90K</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
              <div className="h-[30px] w-[30px] dark:bg-dark-card-product bg-light-card-product bg-no-repeat"></div>
              <p className="text-xs text-grayDark dark:text-grayLightActive">
                Product /Product by Ads
              </p>
              <p className="text-[18px] text-black dark:text-white">44/22</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
              <div className="h-[30px] w-[30px] dark:bg-dark-card-impression bg-light-card-impression bg-no-repeat"></div>
              <p className="text-xs text-grayDark dark:text-grayLightActive">Ad Impressions</p>
              <p className="text-[18px] text-black dark:text-white">78.9M</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
              <div className="h-[30px] w-[30px] dark:bg-dark-card-cost bg-light-card-cost bg-no-repeat"></div>
              <p className="text-xs text-grayDark dark:text-grayLightActive">Ad Costs</p>
              <p className="text-[18px] text-black dark:text-white">$12.7M~11.5M</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-grayLight dark:border-grayDark p-4 min-w-[300px]">
              <div className="h-[30px] w-[30px] dark:bg-dark-card-number bg-light-card-number bg-no-repeat"></div>
              <p className="text-xs text-grayDark dark:text-grayLightActive">Number of Ads</p>
              <p className="text-[18px] text-black dark:text-white">1.9K</p>
            </div>
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
                  curStatus === 0
                    ? 'text-primaryNormal font-semibold mb-2'
                    : 'text-grayNormal dark:text-grayLightActive mb-1'
                } sm:mr-4`}
              >
                Store Product
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
                Store Ads
              </span>
              {curStatus === 1 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setCurStatus(2)}
            >
              <span
                className={`${
                  curStatus === 2
                    ? 'text-primaryNormal font-semibold mb-2'
                    : 'text-grayNormal dark:text-grayLightActive mb-1'
                } sm:mr-4`}
              >
                Data Analytics
              </span>
              {curStatus === 2 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
            </div>
          </div>
        </div>
        {/* Filter Options */}
        {curStatus === 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-row flex-wrap items-center justify-between gap-4">
              <div className="flex flex-row flex-wrap justify-center gap-2">
                <select className="w-full px-4 py-2 text-sm bg-white border rounded-md outline-none lg:w-auto dark:bg-grayDarker dark:text-white dark:border-grayDark">
                  <option value="">Product Keyword</option>
                  <option value="keyword1">Keyword 1</option>
                  <option value="keyword2">Keyword 2</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter keywords, Ads info, text, link etc"
                  className="flex-grow px-4 py-2 text-sm border rounded-md outline-none dark:text-white bg-grayLight dark:bg-grayDark dark:border-grayDark"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <button className="px-2 py-2 text-sm text-black rounded-md dark:text-white">
                  Collapse
                </button>
                <div className="w-3 h-3 bg-no-repeat dark:bg-header-dark-corner bg-header-light-corner"></div>
              </div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex flex-row items-start text-grayNormal dark:text-white">
              <div className="flex flex-row flex-wrap gap-2">
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Category</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Impressions</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Likes</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Like Rate</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Sold</option>
                </select>
              </div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex flex-row flex-wrap items-center justify-between gap-2">
              <div className="flex flex-row flex-wrap items-start gap-2 text-grayNormal dark:text-white">
                <input
                  className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                  defaultValue="First Date - First Date"
                />
                <input
                  className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                  defaultValue="Last Date - Last Date"
                />
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">No. of Ads</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Price</option>
                </select>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-row items-center justify-center gap-1 px-1 text-sm text-black border rounded-md bg-grayLight dark:bg-grayDark dark:text-white dark:border-grayDark">
                  <div className="w-4 h-4 bg-no-repeat dark:bg-sort-dark bg-sort-light"></div>
                  <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                    Sort By:
                  </p>
                  <select className="py-2 bg-transparent outline-none">
                    <option value="">Creation Date</option>
                  </select>
                </div>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:text-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Save Filters</option>
                </select>
              </div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex flex-row flex-wrap items-center justify-between gap-2">
              <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 text-sm text-black rounded-full bg-grayLight dark:bg-grayDark dark:text-white">
                <div className="w-4 h-4 bg-no-repeat dark:bg-woocommerce-dark bg-woocommerce-light"></div>
                Woocommerce <button className="ml-2">✕</button>
              </div>
              <div className="flex flex-row gap-2">
                <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark">
                  Clear All
                </button>
                <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark">
                  Save Filter
                </button>
              </div>
            </div>
            <div className="custom-scrollbar overflow-x-auto max-w-[90vw] sm:max-w-full rounded-lg">
              <table className="min-w-full border border-collapse table-auto border-grayLight dark:border-grayDark">
                <thead className="bg-gray-100 dark:bg-grayDark">
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                      Date
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                      Sold
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                      Number of Ads
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                      Ad Impression
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                      Ad Cost
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                      Likes
                    </th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                      Like Rate
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
                        <div className="flex flex-row gap-2">
                          <Image
                            width={60}
                            height={60}
                            src="/assets/images/table-item-image.png"
                            className="object-cover w-15 h-15"
                            alt=""
                          />
                          <div className="flex flex-col justify-center gap-3">
                            <p className="pt-2 text-sm font-bold text-black dark:text-white">
                              {row.date}
                            </p>
                            <p className="text-base font-bold text-primaryNormal">{row.price}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.sold}</td>
                      <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.ads}</td>
                      <td className="px-4 py-2 text-sm text-dark dark:text-white">
                        {row.impressions}
                      </td>
                      <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.cost}</td>
                      <td className="px-4 py-2 text-sm text-dark dark:text-white">{row.likes}</td>
                      <td className="px-4 py-2 text-sm text-dark dark:text-white">
                        {row.likesrate}
                      </td>
                      <td className="px-4 py-2 text-sm text-dark dark:text-white">
                        <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-bookmark bg-item-light-bookmark"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {curStatus === 1 && (
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold text-black dark:text-white">All Ads (5)</p>
            <div className="flex flex-row flex-wrap items-center justify-between gap-4">
              <div className="flex flex-row flex-wrap justify-center gap-2">
                <select className="w-full px-4 py-2 text-sm bg-white border rounded-md outline-none lg:w-auto dark:bg-grayDarker dark:text-white dark:border-grayDark">
                  <option value="">Product Keyword</option>
                  <option value="keyword1">Keyword 1</option>
                  <option value="keyword2">Keyword 2</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter keywords, Ads info, text, link etc"
                  className="flex-grow px-4 py-2 text-sm border rounded-md outline-none dark:text-white bg-grayLight dark:bg-grayDark dark:border-grayDark"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <button className="px-2 py-2 text-sm text-black rounded-md dark:text-white">
                  Collapse
                </button>
                <div className="w-3 h-3 bg-no-repeat dark:bg-header-dark-corner bg-header-light-corner"></div>
              </div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex flex-row items-start text-grayNormal dark:text-white">
              <div className="flex flex-row flex-wrap gap-2">
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Category</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Impressions</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Likes</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Like Rate</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Sold</option>
                </select>
              </div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex flex-row flex-wrap items-center justify-between gap-2">
              <div className="flex flex-row flex-wrap items-start gap-2 text-grayNormal dark:text-white">
                <input
                  className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                  defaultValue="First Date - First Date"
                />
                <input
                  className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                  defaultValue="Last Date - Last Date"
                />
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">No. of Ads</option>
                </select>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Price</option>
                </select>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-row items-center justify-center gap-1 px-1 text-sm text-black border rounded-md bg-grayLight dark:bg-grayDark dark:text-white dark:border-grayDark">
                  <div className="w-4 h-4 bg-no-repeat dark:bg-sort-dark bg-sort-light"></div>
                  <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                    Sort By:
                  </p>
                  <select className="py-2 bg-transparent outline-none">
                    <option value="">Creation Date</option>
                  </select>
                </div>
                <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:text-white dark:bg-grayDarker dark:border-grayDark">
                  <option value="">Save Filters</option>
                </select>
              </div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex flex-row flex-wrap items-center justify-between gap-2">
              <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 text-sm text-black rounded-full bg-grayLight dark:bg-grayDark dark:text-white">
                <div className="w-4 h-4 bg-no-repeat dark:bg-woocommerce-dark bg-woocommerce-light"></div>
                Woocommerce <button className="ml-2">✕</button>
              </div>
              <div className="flex flex-row gap-2">
                <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark">
                  Clear All
                </button>
                <button className="px-4 py-2 text-sm border rounded-md shadow-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark">
                  Save Filter
                </button>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3">
              {[...Array(10)].map((_, index) => (
                <div key={index}>
                  <ProductItem />
                </div>
              ))}
            </div>
          </div>
        )}
        {curStatus === 2 && (
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
              <p className="text-xl font-semibold text-black dark:text-white">Product Details</p>
              <div className="custom-scrollbar overflow-x-auto max-w-[90vw] sm:max-w-full rounded-lg">
                <table className="min-w-full border border-collapse table-auto border-grayLight dark:border-grayDark">
                  <thead className="bg-gray-100 dark:bg-grayDark">
                    <tr>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Date
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Sold
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Number of Ads
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Ad Impression
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Ad Cost
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Likes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.map((row, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-grayDarker h-15 border-grayLight dark:border-grayDark"
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
          </div>
        )}
      </div>
    </div>
  )
}
