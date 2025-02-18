'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import AdsItem from '@/components/AdsItem'
import Image from 'next/image'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function AdsDetail() {
  const [curStatus, setCurStatus] = useState(0)

  const adInformation = [
    { label: 'Status', value: 'Active' },
    { label: 'Ads Type', value: 'Tiktok', icon: 'tiktok' },
    { label: 'Shop', value: 'Shopify', icon: 'shopify' },
    { label: 'Created at', value: 'Nov 28, 2024' },
    { label: 'First Seen', value: 'Nov 28, 2024' },
    { label: 'Last Seen', value: 'Nov 28, 2024' },
  ]
  const moreAdInformation = [
    { label: 'CTA Button', value: 'Shop Now' },
    { label: 'Platform', value: 'Tiktok', icon: 'tiktok' },
    { label: 'Language', value: 'English' },
    { label: 'Popularity', value: '12M' },
    { label: 'Page ID', value: '3766511278809' },
    { label: 'TikTok Page Name', value: 'Framealove' },
    { label: 'Website', value: 'www.ramealove.com' },
  ]

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Ads', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-2xl font-bold text-black dark:text-white">Framealove</p>
          <div className="flex flex-row gap-[10px]">
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black border rounded-lg border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark dark:text-white">
              <div className="h-[14px] w-[14px] dark:bg-woocommerce-dark bg-woocommerce-light bg-no-repeat"></div>
              See Shop Site
            </div>
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black bg-white border rounded-lg border-grayLightActive dark:border-grayNormal dark:bg-grayDarker dark:text-white">
              <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
              See Ad Post
            </div>
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
        <div className="flex flex-row items-center justify-start gap-2 py-2 border-b-2 border-grayLight dark:border-grayDark">
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
              <div className="relative flex flex-col items-center md:items-start rounded-2xl bg-cover bg-center bg-[url('/assets/images/ads-detail-img.png')] w-full lg:min-w-[348px] min-h-[400px]">
                <div className="absolute flex flex-row gap-2 p-2 bottom-1">
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
              <div className="flex flex-col justify-between gap-3">
                <div className="flex flex-col p-4 text-black bg-white border rounded-md shadow border-grayLight dark:border-grayDark dark:bg-grayDarker dark:text-white">
                  <h3 className="mb-2 text-base font-semibold">Ad Text</h3>
                  <p className="mb-2 text-sm">
                    I’m in tears 😭 #bestfriend / Lorem ipsum dolor sit amet consectetur. Gravida
                    egestas fames sed orci faucibus sagittis. Massa eu ultricies ornare quis mi
                    tristique volutpat vivamus. Amet egestas sit sem tellus consectetur sit ut ut
                    lectus. Arcu vitae suspendisse facilisis dictum. Elementum neque malesuada amet
                    ullamcorper. Ultrices etiam quam sagittis massa id fusce egestas cursus
                    hendrerit. Iaculis est aliquet maecenas ipsum. Ultrices etiam quam sagittis
                    massa id fusce egestas cursus hendrerit.
                  </p>
                  <div className="flex flex-col flex-wrap items-center justify-between gap-2 mb-2 sm:flex-row">
                    <div className="flex flex-row gap-[6px]">
                      <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                        <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-chart bg-item-light-chart"></div>
                        <p className="text-xs text-black dark:text-white">185.9K</p>
                      </div>
                      <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                        <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-hand bg-item-light-hand"></div>
                        <p className="text-xs text-black dark:text-white">5.9K</p>
                      </div>
                      <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                        <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-calendar bg-item-light-calendar"></div>
                        <p className="text-xs text-black dark:text-white">8</p>
                      </div>
                      <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                        <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-share bg-item-light-share"></div>
                        <p className="text-xs text-black dark:text-white">2</p>
                      </div>
                    </div>
                    <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1 p-1">
                      <div className="w-5 h-5 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
                      <p className="text-xs text-black dark:text-white">See Ad Post</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1 px-2 rounded-md bg-grayLight dark:bg-grayDark w-max">
                    <div className="w-4 h-4 bg-no-repeat dark:bg-link-dark bg-link-light"></div>
                    <p className="py-1 text-xs text-black dark:text-white">Shop Now</p>
                    <div className="w-1 h-full border-r border-grayLightActive dark:border-grayDarker"></div>
                    <p className="py-1 text-xs text-black dark:text-white">
                      https://www.framealove.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-4 text-black bg-white border rounded-md shadow border-grayLight dark:border-grayDark dark:bg-grayDarker dark:text-white">
                  <div className="flex flex-col">
                    <p className="text-xs text-grayNormal dark:text-grayLightActive">
                      Tiktok post:
                    </p>
                    <p className="text-sm underline">https://www.tiktok.com/framealove</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs text-grayNormal dark:text-grayLightActive">
                      Target link::
                    </p>
                    <p className="text-sm underline">https://www.tiktok.com/framealove</p>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 text-black bg-white border rounded-md shadow border-grayLight dark:border-grayDark dark:bg-grayDarker dark:text-white">
                <p className="p-3 text-base font-semibold">Ad Information</p>
                <div className="flex flex-col">
                  {adInformation.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border-t border-grayLight dark:border-grayDark"
                    >
                      <p className="text-xs text-grayDark dark:text-grayLightActive">
                        {item.label}
                      </p>
                      <div className="flex items-center gap-2">
                        {item.icon && (
                          <div
                            className={`h-5 w-5 bg-no-repeat ${
                              item.icon === 'tiktok' ? 'bg-tiktok-light dark:bg-tiktok-dark' : ''
                            } ${
                              item.icon === 'shopify' ? 'bg-shopify-light dark:bg-shopify-dark' : ''
                            }`}
                          />
                        )}
                        <p className="text-sm font-medium text-black dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>Graphic</div>
            <div className="flex flex-col gap-4 py-2 lg:flex-row">
              <div className="flex flex-col w-full gap-4 p-5 border rounded-md border-grayLight dark:border-grayDark lg:w-2/5">
                <p className="text-base font-semibold text-black dark:text-white">Audience</p>
                <div className="flex flex-col h-full gap-3 sm:flex-row">
                  <div className="flex flex-col w-full p-4 border rounded-md shadow-sm lg:w-1/2 border-grayLight dark:border-grayDark">
                    <p className="text-xs font-semibold text-grayNormal">Countries</p>
                    <div className="flex flex-col justify-between h-full mt-4 space-y-2">
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
                  <div className="flex flex-col w-full p-4 border rounded-md shadow-sm lg:w-1/2 border-grayLight dark:border-grayDark">
                    <p className="text-xs font-semibold text-grayNormal">Audience Age</p>
                    <div className="flex flex-col justify-between h-full mt-4 space-y-2">
                      <div className="flex items-center justify-start gap-2">
                        <div className="flex flex-row gap-1 p-1 text-xs text-black border rounded-md w-max dark:text-white border-grayLight dark:border-grayDark">
                          <div className="h-[14px] w-[14px] dark:bg-usermulti-dark bg-usermulti-light bg-no-repeat"></div>
                          <p className="w-max">10-24 yrs</p>
                        </div>
                        <div className="flex w-full px-2 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                          <p className="text-xs font-medium text-warningDarker">92.78%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <div className="flex flex-row gap-1 p-1 text-xs text-black border rounded-md w-max dark:text-white border-grayLight dark:border-grayDark">
                          <div className="h-[14px] w-[14px] dark:bg-usermulti-dark bg-usermulti-light bg-no-repeat"></div>
                          <p className="w-max">25-34 yrs</p>
                        </div>
                        <div className="flex w-0 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                          <p className="text-xs font-medium text-warningDarker">0%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <div className="flex flex-row gap-1 p-1 text-xs text-black border rounded-md w-max dark:text-white border-grayLight dark:border-grayDark">
                          <div className="h-[14px] w-[14px] dark:bg-usermulti-dark bg-usermulti-light bg-no-repeat"></div>
                          <p className="w-max">35-44 yrs</p>
                        </div>
                        <div className="flex w-0 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                          <p className="text-xs font-medium text-warningDarker">0%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <div className="flex flex-row gap-1 p-1 text-xs text-black border rounded-md w-max dark:text-white border-grayLight dark:border-grayDark">
                          <div className="h-[14px] w-[14px] dark:bg-usermulti-dark bg-usermulti-light bg-no-repeat"></div>
                          <p className="w-max">45-54 yrs</p>
                        </div>
                        <div className="flex w-0 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                          <p className="text-xs font-medium text-warningDarker">0%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <div className="flex flex-row gap-1 p-1 text-xs text-black border rounded-md w-max dark:text-white border-grayLight dark:border-grayDark">
                          <div className="h-[14px] w-[14px] dark:bg-usermulti-dark bg-usermulti-light bg-no-repeat"></div>
                          <p className="w-max">55-64 yrs</p>
                        </div>
                        <div className="flex w-0 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                          <p className="text-xs font-medium text-warningDarker">0%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <div className="flex flex-row gap-1 p-1 text-xs text-black border rounded-md w-max dark:text-white border-grayLight dark:border-grayDark">
                          <div className="h-[14px] w-[14px] dark:bg-usermulti-dark bg-usermulti-light bg-no-repeat"></div>
                          <p className="w-max">64-100 yrs</p>
                        </div>
                        <div className="flex w-0 py-1 rounded-md bg-warningLightActive dark:bg-warningLight">
                          <p className="text-xs font-medium text-warningDarker">0%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full py-4 text-black bg-white border rounded-md shadow lg:w-3/5 border-grayLight dark:border-grayDark dark:bg-grayDarker dark:text-white">
                <p className="p-3 text-base font-semibold">Ad Information</p>
                <div className="flex flex-col mt-4">
                  {moreAdInformation.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-3 border-t border-grayLight dark:border-grayDark"
                    >
                      <p className="text-xs text-grayDark dark:text-grayLightActive">
                        {item.label}
                      </p>
                      <div className="flex items-center gap-2">
                        {item.icon && (
                          <div
                            className={`h-5 w-5 bg-no-repeat ${
                              item.icon === 'tiktok' ? 'bg-tiktok-light dark:bg-tiktok-dark' : ''
                            } ${
                              item.icon === 'shopify' ? 'bg-shopify-light dark:bg-shopify-dark' : ''
                            }`}
                          />
                        )}
                        <p className="text-sm font-medium text-black dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center justify-between">
                <p className="text-[18px] font-semibold text-black dark:text-white">
                  Similar Growing Ads Competition
                </p>
                <div className="flex flex-row items-center justify-center gap-1 p-2 text-xs text-black bg-white border rounded-lg border-grayLightActive dark:border-grayNormal dark:bg-grayDark dark:text-white">
                  <div className="h-[14px] w-[14px] dark:bg-download-dark bg-download-light bg-no-repeat"></div>
                  Download Video
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2 py-2 border-b-2 border-grayLight dark:border-grayDark">
                <div className="flex flex-row items-center justify-center gap-2 px-2 text-sm cursor-pointer text-grayNormal dark:text-white">
                  <div className="w-4 h-4 bg-no-repeat dark:bg-all-dark bg-all-light"></div>
                  <p>All</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="flex flex-row items-center justify-center gap-2 px-2">
                    <div className="w-5 h-5 mb-1 bg-no-repeat dark:bg-tiktok-dark bg-tiktok-light"></div>
                    <span className="mb-1 font-semibold text-primaryNormal sm:mr-4">Tiktok</span>
                  </div>
                  <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 px-2 text-sm cursor-pointer text-grayNormal dark:text-white">
                  <div className="w-5 h-5 bg-no-repeat dark:bg-facebook-dark bg-facebook-light"></div>
                  <p>Facebook</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3">
              {[...Array(10)].map((_, index) => (
                <div key={index}>
                  <AdsItem />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
