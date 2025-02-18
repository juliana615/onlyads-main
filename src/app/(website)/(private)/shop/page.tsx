'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import ProductItem from '@/components/ProductItem'
import Image from 'next/image'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function Shop() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [activeButton, setActiveButton] = useState('7d')

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Shop', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <p className="text-2xl font-bold text-center text-black dark:text-white">TikTok Shop</p>
        <div className="flex items-center justify-center">
          <div className="flex flex-row p-1 rounded-lg w-max bg-grayLight dark:bg-grayDark">
            <div
              className={`flex flex-row gap-1 ${
                activeProduct === 0 ? 'bg-white dark:bg-grayDarker' : ''
              } rounded-md w-max px-2 h-8 items-center justify-center cursor-pointer`}
              onClick={() => setActiveProduct(0)}
            >
              <span
                className={`${
                  activeProduct === 0
                    ? 'text-primaryDark'
                    : 'text-grayDark dark:text-grayLightActive'
                } text-base`}
              >
                Tiktok Shop Product
              </span>
            </div>
            <div
              className={`flex flex-row gap-1 ${
                activeProduct === 1 ? 'bg-white dark:bg-grayDarker' : ''
              } rounded-md w-max px-2 h-8 items-center justify-center cursor-pointer`}
              onClick={() => setActiveProduct(1)}
            >
              <span
                className={`${
                  activeProduct === 1
                    ? 'text-primaryDark'
                    : 'text-grayDark dark:text-grayLightActive'
                } text-base`}
              >
                Tiktok Shop Store
              </span>
            </div>
          </div>
        </div>
        {/* Search and Exclusions */}
        <div className="relative flex flex-col items-center justify-center gap-4 lg:flex-row">
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
              <Image width={20} height={20} alt="" src="/assets/flags/canada.png" />
              <p>Canada</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 px-2 text-sm cursor-pointer text-grayNormal dark:text-white">
              <Image width={20} height={20} alt="" src="/assets/flags/canada.png" />
              <p>Canada</p>
            </div>
          </div>
        </div>
        {/* Filter Options */}
        {activeProduct === 0 && (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-start mt-4 text-grayNormal dark:text-white">
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
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row flex-wrap items-start justify-between gap-2 text-grayNormal dark:text-white">
                <div className="flex flex-row flex-wrap gap-2">
                  <input
                    className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                    defaultValue="Start Date"
                  />
                  <input
                    className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
                    defaultValue="End Date"
                  />
                  <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                    <option value="">No. of Ads</option>
                  </select>
                  <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                    <option value="">Price</option>
                  </select>
                </div>
                <div className="flex flex-row flex-wrap items-center gap-4">
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
              </div>
              <div className="border-t border-grayLight dark:border-grayDark"></div>
            </div>
          </>
        )}
        {activeProduct === 1 && (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-start mt-4 text-grayNormal dark:text-white">
                <div className="flex flex-row flex-wrap gap-2">
                  <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                    <option value="">Impressions</option>
                  </select>
                  <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                    <option value="">No. of Ads</option>
                  </select>
                  <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
                    <option value="">Sold</option>
                  </select>
                </div>
              </div>
              <div className="border-t border-grayLight dark:border-grayDark"></div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row flex-wrap items-center justify-between gap-2">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <div className="flex flex-row items-center justify-center gap-1 px-1 text-sm text-black border rounded-md bg-grayLight dark:bg-grayDark dark:text-white dark:border-grayDark">
                    <div className="w-4 h-4 bg-no-repeat dark:bg-sort-dark bg-sort-light"></div>
                    <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                      Sort By:
                    </p>
                    <select className="py-2 bg-transparent outline-none">
                      <option value="">Creation Date</option>
                    </select>
                  </div>
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
                <div className="flex flex-wrap gap-2">
                  <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:text-white dark:bg-grayDarker dark:border-grayDark">
                    <option value="">Save Filters</option>
                  </select>
                </div>
              </div>
              <div className="border-t border-grayLight dark:border-grayDark"></div>
            </div>
          </>
        )}
        {/* Tags */}
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
        {/* Items */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <ProductItem />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
