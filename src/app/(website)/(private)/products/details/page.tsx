'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import AdsItem from '@/components/AdsItem'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function ProductDetail() {
  const [curStatus, setCurStatus] = useState(0)

  const adInformation = [
    { label: 'Status', value: 'Active' },
    { label: 'Ad Run Time', value: '209' },
    { label: 'Shop Site', value: 'Shopify', icon: 'shopify' },
    { label: 'Country/Region', value: 'Canada', icon: 'canada' },
    { label: 'Categor', value: '--' },
    { label: 'Product Creation Date', value: 'Nov 28, 2024' },
    { label: 'First Day', value: 'Nov 28, 2024' },
    { label: 'Last Day', value: 'Nov 28, 2024' },
  ]
  const moreAdInformation = [
    { label: 'Likes', value: '51' },
    { label: 'Number of Ads', value: '5' },
    { label: 'Language', value: 'English' },
    { label: 'Ad Run Time', value: '209' },
  ]

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Products', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-black dark:text-white text-2xl font-bold">Framealove</p>
          <div className="flex flex-row flex-wrap gap-[10px]">
            <div className="flex flex-row items-center justify-center gap-2 p-2 border rounded-lg text-xs border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark text-black dark:text-white">
              <div className="h-[14px] w-[14px] dark:bg-woocommerce-dark bg-woocommerce-light bg-no-repeat"></div>
              See Shop Site
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 border rounded-lg text-xs border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark text-black dark:text-white">
              <div className="h-5 w-5 dark:bg-tiktok-dark bg-tiktok-light bg-no-repeat"></div>
              See Ad Post
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 border rounded-lg text-xs border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark text-black dark:text-white">
              <div className="h-5 w-5 dark:bg-export-dark bg-export-light bg-no-repeat"></div>
              Export
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
              <div className="relative flex flex-col items-center md:items-start rounded-2xl bg-cover bg-center bg-[url('/assets/images/ads-detail-img.png')] w-full lg:min-w-[348px] min-h-[400px]"></div>
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
                    <p className="text-xs text-black dark:text-white py-1">Shop Now</p>
                    <div className="border-r border-grayLightActive dark:border-grayDarker w-1 h-full"></div>
                    <p className="text-xs text-black dark:text-white py-1">
                      https://www.framealove.com
                    </p>
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
              <div className="border border-grayLight dark:border-grayDark bg-white dark:bg-grayDarker text-black dark:text-white rounded-md shadow w-full">
                <p className="text-base font-semibold p-3">Ad Information</p>
                <div className="flex flex-col">
                  {adInformation.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-[10px] border-t border-grayLight dark:border-grayDark"
                    >
                      <p className="text-xs text-grayDark dark:text-grayLightActive">
                        {item.label}
                      </p>
                      <div className="flex items-center gap-2">
                        {item.icon && (
                          <div
                            className={`h-5 w-5 bg-no-repeat ${
                              item.icon === 'canada' ? 'bg-flag-canada' : ''
                            } ${
                              item.icon === 'shopify' ? 'bg-shopify-light dark:bg-shopify-dark' : ''
                            }`}
                          />
                        )}
                        <p className="text-black dark:text-white font-medium text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-grayLight dark:border-grayDark bg-white dark:bg-grayDarker text-black dark:text-white rounded-md shadow w-full">
              <p className="text-base font-semibold p-3">More Ad Information</p>
              <div className="flex flex-col">
                {moreAdInformation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-[10px] border-t border-grayLight dark:border-grayDark"
                  >
                    <p className="text-xs text-grayDark dark:text-grayLightActive">{item.label}</p>
                    <p className="text-black dark:text-white font-medium text-sm">{item.value}</p>
                  </div>
                ))}
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
            {[...Array(10)].map((_, index) => (
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
