'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import AdvertiserData from '@/components/Advertisers/Data'
import AdvertiserTiktok from '@/components/Advertisers/Tiktok'
import AdvertiserFacebook from '@/components/Advertisers/Facebook'
import AdvertiserTraffic from '@/components/Advertisers/Traffic'
import Image from 'next/image'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function ShopItem() {
  const [curStatus, setCurStatus] = useState(0)

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Advertisers', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex flex-row items-center justify-center gap-2">
            <Image src="/assets/images/light-shopitem-image1.png" alt="" width={20} height={20} />
            <p className="text-2xl font-bold text-black dark:text-white">Framealove</p>
          </div>
          <div className="flex flex-row gap-[10px]">
            <div className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-white border rounded-lg border-grayLightActive dark:border-grayNormal bg-primaryDark dark:bg-primaryNormal dark:text-black">
              <div className="w-4 h-4 bg-no-repeat dark:bg-woocommerce-light bg-woocommerce-dark"></div>
              Visit Store
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
        <div className="flex flex-row flex-wrap gap-6 p-5 border rounded-lg shadow-sm border-grayLight dark:border-grayDark">
          <div className="flex flex-col gap-3">
            <p className="text-xs text-grayDark dark:text-grayLightActive">Platform</p>
            <p className="text-[18px] text-black dark:text-white">TikTok Shop</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-grayDark dark:text-grayLightActive">Shop Site</p>
            <p className="text-[18px] text-black dark:text-white">---</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-grayDark dark:text-grayLightActive">Total Ads</p>
            <p className="text-[18px] text-black dark:text-white">4.5M</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-grayDark dark:text-grayLightActive">Monthly Visits</p>
            <p className="text-[18px] text-black dark:text-white">2.2M</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-grayDark dark:text-grayLightActive">First Ads</p>
            <p className="text-[18px] text-black dark:text-white">Aug 24, 2024</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-grayDark dark:text-grayLightActive">First Date-End Date</p>
            <p className="text-[18px] text-black dark:text-white">Aug 24, 2024-Dec 6, 2024</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-grayDark dark:text-grayLightActive">Country/Region</p>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-row items-center justify-center gap-1">
                <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                <p className="text-[18px] text-black dark:text-white">Canada</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                <p className="text-[18px] text-black dark:text-white">Canada</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                <p className="text-[18px] text-black dark:text-white">Canada</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                <p className="text-[18px] text-black dark:text-white">Canada</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                <p className="text-[18px] text-black dark:text-white">Canada</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
                <p className="text-[18px] text-black dark:text-white">Canada</p>
              </div>
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
                Data Analytics
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
                TikTok Analytics
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
                Facebook Analytics
              </span>
              {curStatus === 2 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setCurStatus(3)}
            >
              <span
                className={`${
                  curStatus === 3
                    ? 'text-primaryNormal font-semibold mb-2'
                    : 'text-grayNormal dark:text-grayLightActive mb-1'
                } sm:mr-4`}
              >
                Traffic
              </span>
              {curStatus === 3 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
            </div>
          </div>
        </div>
        {/* Filter Options */}
        {curStatus === 0 && <AdvertiserData />}
        {curStatus === 1 && <AdvertiserTiktok />}
        {curStatus === 2 && <AdvertiserFacebook />}
        {curStatus === 3 && <AdvertiserTraffic />}
      </div>
    </div>
  )
}
