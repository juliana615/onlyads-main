'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import ProductItem from '@/components/ProductItem'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Products', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <p className="text-black dark:text-white text-2xl font-bold text-center">
          Discover Products
        </p>
        <div className="flex items-center justify-center">
          <div className="flex flex-row w-max p-1 bg-grayLight dark:bg-grayDark rounded-lg">
            <div
              className={`flex flex-row gap-1 ${
                activeProduct === 0 ? 'bg-white dark:bg-grayDarker' : ''
              } rounded-md w-[115px] md:w-36 h-8 items-center justify-center cursor-pointer`}
              onClick={() => setActiveProduct(0)}
            >
              <span
                className={`${
                  activeProduct === 0
                    ? 'text-primaryDark'
                    : 'text-grayDark dark:text-grayLightActive'
                } text-base`}
              >
                Ad Product
              </span>
            </div>
            <div
              className={`flex flex-row gap-1 ${
                activeProduct === 1 ? 'bg-white dark:bg-grayDarker' : ''
              } rounded-md w-[115px] md:w-36 h-8 items-center justify-center cursor-pointer`}
              onClick={() => setActiveProduct(1)}
            >
              <span
                className={`${
                  activeProduct === 1
                    ? 'text-primaryDark'
                    : 'text-grayDark dark:text-grayLightActive'
                } text-base`}
              >
                Top Product
              </span>
            </div>
            <div
              className={`flex flex-row gap-1 ${
                activeProduct === 2 ? 'bg-white dark:bg-grayDarker' : ''
              } rounded-md w-[115px] md:w-36 h-8 items-center justify-center cursor-pointer`}
              onClick={() => setActiveProduct(2)}
            >
              <span
                className={`${
                  activeProduct === 2
                    ? 'text-primaryDark'
                    : 'text-grayDark dark:text-grayLightActive'
                } text-base`}
              >
                New Product
              </span>
            </div>
          </div>
        </div>
        {/* Search and Exclusions */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4">
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
          <div className="lg:absolute lg:right-0 flex flex-row items-center justify-center">
            <button className="px-2 py-2 rounded-md text-sm text-black dark:text-white">
              Collapse
            </button>
            <div className="h-3 w-3 dark:bg-header-dark-corner bg-header-light-corner bg-no-repeat"></div>
          </div>
        </div>
        {/* Filter Tabs */}
        <div className="flex items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-2 border-b-2 border-grayLight dark:border-grayDark py-2 w-full">
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
        {/* Industry Tabs */}
        <div className="flex items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-2 border-b-2 border-grayLight dark:border-grayDark py-2 w-full">
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
        {/* Filter Options */}
        <div className="mt-4 flex flex-row items-start text-grayNormal dark:text-white">
          <p className="mr-8 w-10">Basic:</p>
          <div className="flex flex-row flex-wrap gap-2">
            <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark">
              <option value="">Ecom Platform</option>
            </select>
            <input
              className="px-4 py-2 border rounded-md outline-none text-sm w-[172px] bg-white dark:bg-grayDarker dark:border-grayDark"
              defaultValue="Product Creation Date"
            />
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
          </div>
        </div>
        <div className="flex flex-row items-start text-grayNormal dark:text-white">
          <p className="mr-8 w-10">Data:</p>
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
        {/* Additional Actions */}
        {activeProduct === 0 && (
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
        )}
        {activeProduct === 1 && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-row items-center justify-center px-1 gap-1 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white  dark:border-grayDark">
              <div className="h-4 w-4 dark:bg-ranking-dark bg-ranking-light bg-no-repeat"></div>
              <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                Ranking:
              </p>
              <select className="py-2 bg-transparent outline-none">
                <option value="">Daily Ranking</option>
              </select>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-row items-center justify-center px-1 gap-1 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white  dark:border-grayDark">
                <div className="h-4 w-4 dark:bg-sort-dark bg-sort-light bg-no-repeat"></div>
                <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                  Sort By:
                </p>
                <select className="py-2 bg-transparent outline-none">
                  <option value="">Creation Date</option>
                </select>
              </div>
              <div className="flex flex-row gap-1 items-center justify-center px-4 py-2 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white dark:border-grayDark cursor-pointer">
                <div className="h-4 w-4 dark:bg-export-dark bg-export-light bg-no-repeat"></div>
                Export
              </div>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:text-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Save Filters</option>
              </select>
            </div>
          </div>
        )}
        {activeProduct === 2 && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-row items-center justify-center px-1 gap-1 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white  dark:border-grayDark">
                <div className="h-4 w-4 dark:bg-creation-dark bg-creation-light bg-no-repeat"></div>
                <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                  Creation:
                </p>
                <select className="py-2 bg-transparent outline-none">
                  <option value="">Last 1 Month</option>
                </select>
              </div>
              <div className="flex flex-row items-center justify-center px-1 gap-1 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white  dark:border-grayDark">
                <div className="h-4 w-4 dark:bg-time-dark bg-time-light bg-no-repeat"></div>
                <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                  Time:
                </p>
                <select className="py-2 bg-transparent outline-none">
                  <option value="">Last 1 Month</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-row items-center justify-center px-1 gap-1 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white  dark:border-grayDark">
                <div className="h-4 w-4 dark:bg-sort-dark bg-sort-light bg-no-repeat"></div>
                <p className="text-[#575757]  dark:text-grayLightActive text-sm font-medium">
                  Sort By:
                </p>
                <select className="py-2 bg-transparent outline-none">
                  <option value="">Creation Date</option>
                </select>
              </div>
              <div className="flex flex-row gap-1 items-center justify-center px-4 py-2 border rounded-md text-sm bg-grayLight dark:bg-grayDark text-black dark:text-white dark:border-grayDark cursor-pointer">
                <div className="h-4 w-4 dark:bg-export-dark bg-export-light bg-no-repeat"></div>
                Export
              </div>
              <select className="px-4 py-2 border rounded-md text-sm w-[172px] bg-white dark:text-white dark:bg-grayDarker dark:border-grayDark">
                <option value="">Save Filters</option>
              </select>
            </div>
          </div>
        )}
        <div className="border-t border-grayLight dark:border-grayDark"></div>
        {/* Tags */}
        <div className="flex flex-row flex-wrap items-center justify-between gap-2">
          <div className="flex flex-row gap-1 items-center justify-center px-3 py-2 bg-grayLight dark:bg-grayDark text-black dark:text-white rounded-full text-sm">
            <div className="h-4 w-4 dark:bg-woocommerce-dark bg-woocommerce-light bg-no-repeat"></div>
            Woocommerce <button className="ml-2">✕</button>
          </div>
          <div className="flex flex-row gap-2">
            <button className="px-4 py-2 border rounded-md text-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark shadow-sm">
              Clear All
            </button>
            <button className="px-4 py-2 border rounded-md text-sm text-grayDark dark:text-white dark:bg-grayDarker dark:border-grayDark shadow-sm">
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
