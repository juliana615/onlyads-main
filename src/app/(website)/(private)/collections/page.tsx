'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import AdsItem from '@/components/AdsItem'
import Image from 'next/image'

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
        paths={[{ label: 'Collections', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl font-bold text-center text-black dark:text-white">
            My Collections
          </p>
          <div
            onClick={handleEdit}
            className="flex flex-row items-center justify-center gap-2 p-2 text-xs text-black border rounded-lg cursor-pointer border-grayLightActive dark:border-grayNormal bg-grayLightHover dark:bg-grayDark dark:text-white"
          >
            <div className="h-[18px] w-[18px] dark:bg-add-dark bg-add-light bg-no-repeat"></div>
            Create Collection
          </div>
        </div>
        {/* Items */}
        <div className="flex flex-row flex-wrap items-center justify-start gap-3">
          <div className="relative flex flex-col gap-2 p-4 border rounded-xl border-grayLight dark:border-grayDark w-[350px]">
            <div className="absolute top-0 left-0 h-[220px] w-[294px] dark:bg-collection-first-corner-dark bg-collection-first-corner-light bg-no-repeat"></div>
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="h-[54px] w-[54px] dark:bg-collection-first-logo-dark bg-collection-first-logo-light bg-no-repeat"></div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-black dark:text-white">
                    My First Collection
                  </p>
                  <p className="text-xs font-medium text-grayNormal dark:text-grayLightActive">
                    Added to collection | 0 Items
                  </p>
                </div>
              </div>
              <div className="h-[18px] w-[18px] dark:bg-details-dark bg-details-light bg-no-repeat"></div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex items-end justify-center mt-3">
              <div className="h-[100px] w-[270px] dark:bg-collection-first-image-dark bg-collection-first-image-light bg-no-repeat"></div>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 p-4 border rounded-xl border-grayLight dark:border-grayDark w-[350px]">
            <div className="absolute top-0 left-0 h-[220px] w-[294px] dark:bg-collection-second-corner-dark bg-collection-second-corner-light bg-no-repeat"></div>
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="h-[54px] w-[54px] dark:bg-collection-second-logo-dark bg-collection-second-logo-light bg-no-repeat"></div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-black dark:text-white">Ecommerce</p>
                  <p className="text-xs font-medium text-grayNormal dark:text-grayLightActive">
                    Added to collection | 0 Items
                  </p>
                </div>
              </div>
              <div className="h-[18px] w-[18px] dark:bg-details-dark bg-details-light bg-no-repeat"></div>
            </div>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <div className="flex items-end justify-start mt-3">
              <Image src="/assets/images/light-second-image.png" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col w-11/12 gap-5 p-6 bg-white rounded-lg shadow-md dark:bg-grayDarker sm:w-max">
            <div className="flex flex-row items-center justify-between">
              <p className="text-base text-black dark:text-white">Create a Collection</p>
              <button className="text-base text-black dark:text-white" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[84px] w-[84px] dark:bg-collection-modal-icon-dark bg-collection-modal-icon-light bg-no-repeat"></div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-grayDark dark:text-grayLightActive">
                Collection Name
              </label>
              <input
                type="text"
                placeholder="Enter name here"
                className="w-full px-4 py-2 text-xs bg-white border rounded-lg outline-none border-grayLightActive dark:border-grayDark dark:bg-grayNormal text-grayDark dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-grayDark dark:text-grayLightActive">Color</label>
              <div className="grid grid-cols-10 gap-2">
                <button className="h-8 w-8 rounded-full bg-[#FFCC4D]"></button>
                <button className="h-8 w-8 rounded-full bg-[#BF740B]"></button>
                <button className="h-8 w-8 rounded-full bg-[#4285F4]"></button>
                <button className="h-8 w-8 rounded-full bg-[#FF7BE7]"></button>
                <button className="h-8 w-8 rounded-full bg-[#3C3B6E]"></button>
                <button className="h-8 w-8 rounded-full bg-[#5C913B]"></button>
                <button className="h-8 w-8 rounded-full bg-[#B1FFF2]"></button>
                <button className="h-8 w-8 rounded-full bg-[#FFE8C3]"></button>
                <button className="h-8 w-8 rounded-full bg-[#B0C0FF]"></button>
                <button className="h-8 w-8 rounded-full bg-[#F3C3FF]"></button>
                <button className="h-8 w-8 rounded-full bg-[#EC1C24]"></button>
                <button className="h-8 w-8 rounded-full bg-[#5E8E3E]"></button>
                <button className="h-8 w-8 rounded-full bg-[#CAFFD6]"></button>
                <button className="h-8 w-8 rounded-full bg-[#4976BA]"></button>
                <button className="h-8 w-8 rounded-full bg-[#25BA52]"></button>
                <button className="h-8 w-8 rounded-full bg-[#50400B]"></button>
                <button className="h-8 w-8 rounded-full bg-[#54197B]"></button>
                <button className="h-8 w-8 rounded-full bg-[#FF7A81]"></button>
                <button className="h-8 w-8 rounded-full bg-[#F3BC0A]"></button>
                <button className="h-8 w-8 rounded-full bg-[#AA7878]"></button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-grayDark dark:text-grayLightActive">Icon</label>
              <div className="grid grid-cols-10 gap-2">
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon1 bg-collection-light-icon1"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon2 bg-collection-light-icon2"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon3 bg-collection-light-icon3"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon4 bg-collection-light-icon4"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon5 bg-collection-light-icon5"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon6 bg-collection-light-icon6"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon7 bg-collection-light-icon7"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon8 bg-collection-light-icon8"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon9 bg-collection-light-icon9"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon10 bg-collection-light-icon10"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon11 bg-collection-light-icon11"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon12 bg-collection-light-icon12"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon13 bg-collection-light-icon13"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon14 bg-collection-light-icon14"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon15 bg-collection-light-icon15"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon16 bg-collection-light-icon16"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon17 bg-collection-light-icon17"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon18 bg-collection-light-icon18"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon19 bg-collection-light-icon19"></div>
                <div className="w-8 h-8 bg-no-repeat dark:bg-collection-dark-icon11 bg-collection-light-icon11"></div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-full px-4 py-2 text-white rounded-lg bg-primaryDark dark:bg-primaryNormal dark:text-black">
                Create Collection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
