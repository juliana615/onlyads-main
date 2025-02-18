'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import AdsItem from '@/components/AdsItem'
import Image from 'next/image'
import Link from 'next/link'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function Ads() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Ads', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <p className="text-2xl font-bold text-center text-black dark:text-white">Discover Ads</p>
        <div className="flex items-center justify-center">
          <div className="flex flex-row p-1 rounded-lg w-max bg-grayLight dark:bg-grayDark">
            <div className="flex flex-row items-center justify-center h-8 gap-1 bg-white rounded-md cursor-pointer dark:bg-grayDarker w-36">
              <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
              <span className="text-base text-primaryDark">Tiktok</span>
            </div>
            <div className="flex flex-row items-center justify-center h-8 gap-1 rounded-md cursor-pointer w-36">
              <Image src="/assets/icons/light-facebook.svg" alt="" width={20} height={20} />
              <span className="text-base text-grayDark dark:text-grayLightActive">Facebook</span>
            </div>
          </div>
        </div>
        {/* Search and Exclusions */}
        <div className="relative flex flex-col items-center justify-center gap-4 lg:flex-row">
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
          <div className="flex flex-row items-center justify-center lg:absolute lg:right-0">
            <button className="px-2 py-2 text-sm text-black rounded-md dark:text-white">
              Collapse
            </button>
            <div className="w-3 h-3 bg-no-repeat dark:bg-header-dark-corner bg-header-light-corner"></div>
          </div>
        </div>
        {/* Filter Tabs */}
        <div className="flex items-center justify-start">
          <div className="flex flex-row p-1 rounded-lg w-max bg-grayLight dark:bg-grayDark">
            <div className="flex flex-row gap-1 bg-white dark:bg-grayDarker rounded-md w-[60px] md:w-36 h-8 items-center justify-center cursor-pointer">
              <Image src="/assets/icons/light-active-all.svg" width={20} height={20} alt="all" />
              <span className="text-xs text-primaryDark md:text-base">All</span>
            </div>
            <div className="flex flex-row gap-1 rounded-md w-[100px] md:w-36 h-8 items-center justify-center cursor-pointer">
              <div className="w-5 h-5 bg-no-repeat dark:bg-shipping-dark bg-shipping-light"></div>
              <span className="text-xs text-grayNormal md:text-base dark:text-white">
                Dropshipping
              </span>
            </div>
            <div className="flex flex-row gap-1 rounded-md w-[100px] md:w-36 h-8 items-center justify-center cursor-pointer">
              <div className="w-5 h-5 bg-no-repeat dark:bg-commerce-dark bg-commerce-light"></div>
              <span className="text-xs text-grayNormal md:text-base dark:text-white">
                E-commerce
              </span>
            </div>
            <div className="flex flex-row gap-1 rounded-md w-[100px] md:w-36 h-8 items-center justify-center cursor-pointer">
              <div className="w-5 h-5 bg-no-repeat dark:bg-game-dark bg-game-light"></div>
              <span className="text-xs text-grayNormal md:text-base dark:text-white">Gaming</span>
            </div>
          </div>
        </div>
        <div className="border-t border-grayLight dark:border-grayDark"></div>
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
            <div onClick={handleEdit} key={index}>
              <AdsItem />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-grayDarker rounded-3xl shadow-lg w-full max-w-4xl mx-6 md:mx-auto max-h-[80vh] overflow-auto">
            {/* Header */}
            <div className="flex flex-col items-start justify-between gap-2 px-6 py-4 border-b md:flex-row md:items-center border-grayLight dark:border-grayDark">
              <div className="flex flex-row items-center justify-start gap-2">
                <div
                  className="w-5 h-5 bg-no-repeat cursor-pointer dark:bg-exit-dark bg-exit-light"
                  onClick={closeModal}
                ></div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-black dark:text-white">FrameAlove</h2>
                  <p className="text-sm text-grayNormal dark:text-white">
                    Created at: Nov 28, 2024
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[10px]">
                <Link
                  href="/ads/details"
                  className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black border rounded-lg border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark dark:text-white"
                >
                  Full Details
                  <div className="h-[14px] w-[14px] dark:bg-arrow-dark bg-arrow-light bg-no-repeat"></div>
                </Link>
                <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black bg-white border rounded-lg border-grayLightActive dark:border-grayNormal dark:bg-grayDarker dark:text-white">
                  Share
                  <div className="h-[14px] w-[14px] dark:bg-share1-dark bg-share1-light bg-no-repeat"></div>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black bg-white border rounded-lg border-grayLightActive dark:border-grayNormal dark:bg-grayDarker dark:text-white">
                  Collect
                  <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-bookmark bg-item-light-bookmark"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-4">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="flex flex-col w-full gap-2 border md:w-1/3 rounded-xl border-grayLight dark:border-grayDark">
                  <Image
                    src="/assets/images/ads-item.png"
                    alt=""
                    className="object-cover"
                    width={350}
                    height={350}
                  />
                  <div className="flex flex-row gap-[6px] pl-2">
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
                      <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-chart bg-item-light-chart"></div>
                      <p className="text-black dark:text-white">185.9K</p>
                    </div>
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
                      <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-hand bg-item-light-hand"></div>
                      <p className="text-black dark:text-white">5.9K</p>
                    </div>
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
                      <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-calendar bg-item-light-calendar"></div>
                      <p className="text-black dark:text-white">8</p>
                    </div>
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
                      <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-share bg-item-light-share"></div>
                      <p className="text-black dark:text-white">2</p>
                    </div>
                  </div>
                  <div className="border-t border-grayLight dark:border-grayDark"></div>
                  <div className="flex flex-col gap-2 p-2">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-grayDark dark:text-grayLightActive">
                        Ad Description
                      </p>
                      <p className="text-sm font-medium text-black dark:text-white">
                        I’m in tears 😭 #bestfriend/
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-grayDark dark:text-grayLightActive">
                        Tiktok post:
                      </p>
                      <p className="text-sm font-medium text-black dark:text-white">
                        https://www.tiktok.com/framealove
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-grayDark dark:text-grayLightActive">
                        Target link:
                      </p>
                      <p className="text-sm font-medium text-black dark:text-white">
                        https://www.tiktok.com/framealove
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-grayLight dark:border-grayDark"></div>
                  <div className="flex flex-row gap-2 p-2">
                    <div className="flex flex-row items-center justify-center gap-1 p-2 text-xs text-black border rounded-lg border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark dark:text-white">
                      <div className="h-[14px] w-[14px] dark:bg-download-dark bg-download-light bg-no-repeat"></div>
                      Download Video
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1 p-2 text-xs text-black border rounded-lg border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark dark:text-white">
                      <div className="h-[14px] w-[14px] dark:bg-cloud-dark bg-cloud-light bg-no-repeat"></div>
                      Download Data
                    </div>
                  </div>
                </div>
                {/* Details Section */}
                <div className="flex flex-col w-full gap-5 mt-4 md:w-2/3 md:pl-4 md:mt-0">
                  <div className="flex flex-col items-start justify-between gap-2 px-4 py-3 border md:flex-row md:items-center rounded-xl border-grayLight dark:border-grayDark">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <div className="h-[46px] w-[46px] dark:bg-tiktok-medium-dark bg-tiktok-medium-light bg-no-repeat"></div>
                      <div className="flex flex-col">
                        <h2 className="text-lg font-semibold text-black dark:text-white">
                          FrameAlove
                        </h2>
                        <p className="text-sm text-grayNormal dark:text-white">
                          Created at: Nov 28, 2024
                        </p>
                      </div>
                    </div>
                    <div className="h-[20px] w-[20px] dark:bg-square-dark bg-square-light bg-no-repeat"></div>
                  </div>
                  <p className="text-base font-semibold text-black dark:text-white">
                    Ad Information
                  </p>
                  <div className="flex flex-col justify-between h-full border border-grayLight dark:border-grayDark rounded-xl">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center justify-between px-4 py-3">
                        <p className="text-xs text-grayDark dark:text-grayLightActive">Status</p>
                        <p className="text-sm font-medium text-black dark:text-white">Active</p>
                      </div>
                      <div className="border-t border-grayLight dark:border-grayDark"></div>
                      <div className="flex flex-row items-center justify-between px-4 py-3">
                        <p className="text-xs text-grayDark dark:text-grayLightActive">Ads Type</p>
                        <div className="flex flex-row gap-1">
                          <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
                          <p className="text-sm font-medium text-black dark:text-white">Tiktok</p>
                        </div>
                      </div>
                      <div className="border-t border-grayLight dark:border-grayDark"></div>
                      <div className="flex flex-row items-center justify-between px-4 py-3">
                        <p className="text-xs text-grayDark dark:text-grayLightActive">Shop</p>
                        <div className="flex flex-row gap-1">
                          <div className="w-5 h-5 bg-no-repeat dark:bg-shopify-dark bg-shopify-light"></div>
                          <p className="text-sm font-medium text-black dark:text-white">Shopify</p>
                        </div>
                      </div>
                      <div className="border-t border-grayLight dark:border-grayDark"></div>
                      <div className="flex flex-row items-center justify-between px-4 py-3">
                        <p className="text-xs text-grayDark dark:text-grayLightActive">
                          Created at
                        </p>
                        <p className="text-sm font-medium text-black dark:text-white">
                          Nov 28, 2024
                        </p>
                      </div>
                      <div className="border-t border-grayLight dark:border-grayDark"></div>
                      <div className="flex flex-row items-center justify-between px-4 py-3">
                        <p className="text-xs text-grayDark dark:text-grayLightActive">
                          First Seen
                        </p>
                        <p className="text-sm font-medium text-black dark:text-white">
                          Nov 28, 2024
                        </p>
                      </div>
                      <div className="border-t border-grayLight dark:border-grayDark"></div>
                      <div className="flex flex-row items-center justify-between px-4 py-3">
                        <p className="text-xs text-grayDark dark:text-grayLightActive">Last Seen</p>
                        <p className="text-sm font-medium text-black dark:text-white">
                          Nov 28, 2024
                        </p>
                      </div>
                      <div className="border-t border-grayLight dark:border-grayDark"></div>
                    </div>
                    <div className="flex flex-row gap-2 p-2">
                      <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black border rounded-lg border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark dark:text-white">
                        <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
                        See Ad
                      </div>
                      <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black border rounded-lg border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark dark:text-white">
                        <div className="h-[14px] w-[14px] dark:bg-woocommerce-dark bg-woocommerce-light bg-no-repeat"></div>
                        See Shop
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
