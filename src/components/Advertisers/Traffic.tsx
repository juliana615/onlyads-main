'use client'

import Image from 'next/image'
import React from 'react'

export default function AdvertiserTraffic() {
  const visitInformation = [
    { label: 'Monthly Visit', value: '231' },
    { label: 'Avg Visit Duration', value: '185.9k' },
    { label: 'Page Per Visit', value: '4.9k' },
    { label: 'Bounce Rate', value: '2' },
  ]
  const geographyInformation = [
    { label: 'Top 5 Countries', value: '' },
    { label: 'Canada', value: '25.5%', image: 'assets/flags/canada.png' },
    { label: 'Canada', value: '25.5%', image: 'assets/flags/canada.png' },
    { label: 'Canada', value: '25.5%', image: 'assets/flags/canada.png' },
    { label: 'Canada', value: '25.5%', image: 'assets/flags/canada.png' },
    { label: 'Canada', value: '25.5%', image: 'assets/flags/canada.png' },
  ]
  const trafficInformation = [
    { label: 'Direct', value: '12.5%' },
    { label: 'Referrals', value: '12.5%' },
    { label: 'Search', value: '12.5%' },
    { label: 'Paid Referrals', value: '12.5%' },
    { label: 'Social', value: '12.5%' },
    { label: 'Mail', value: '12.5%' },
  ]

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl font-semibold text-black dark:text-white">Traffic</p>
      <div className="flex flex-row flex-wrap justify-between gap-6 p-5 border rounded-lg shadow-sm border-grayLight dark:border-grayDark">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Global Rank</p>
          <p className="text-[18px] text-black dark:text-white">#2841</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Country Rank</p>
          <p className="text-[18px] text-black dark:text-white">#1234</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs text-grayDark dark:text-grayLightActive">Categroy</p>
          <p className="text-[18px] text-black dark:text-white">#123</p>
        </div>
      </div>
      <p className="text-base font-semibold text-black dark:text-white">Visit Over Time</p>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="min-h-[320px] flex flex-col border border-grayLight dark:border-grayDark bg-white dark:bg-grayDarker text-black dark:text-white rounded-md shadow w-full">
          {visitInformation.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-[10px] border-t border-grayLight dark:border-grayDark"
            >
              <p className="text-xs text-grayDark dark:text-grayLightActive">{item.label}</p>
              <p className="text-sm font-medium text-black dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="min-h-[320px] flex flex-col border border-grayLight dark:border-grayDark bg-white dark:bg-grayDarker text-black dark:text-white rounded-md shadow w-full">
          Grahpic
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4 md:flex-row">
        <div className="flex flex-col w-full gap-3">
          <p className="text-base font-semibold text-black dark:text-white">Geography</p>
          <div className="flex flex-col text-black bg-white border rounded-md shadow border-grayLight dark:border-grayDark dark:bg-grayDarker dark:text-white">
            {geographyInformation.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-[10px] border-t border-grayLight dark:border-grayDark"
              >
                <div className="flex flex-row gap-1">
                  {item.image && <Image src={item.image} alt="" width={60} height={60} />}
                  <p className="text-xs text-grayDark dark:text-grayLightActive">{item.label}</p>
                </div>
                <p className="text-sm font-medium text-black dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full gap-3">
          <p className="text-base font-semibold text-black dark:text-white">Traffic Source</p>
          <div className="flex flex-col text-black bg-white border rounded-md shadow border-grayLight dark:border-grayDark dark:bg-grayDarker dark:text-white">
            {trafficInformation.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-[10px] border-t border-grayLight dark:border-grayDark"
              >
                <p className="text-xs text-grayDark dark:text-grayLightActive">{item.label}</p>
                <p className="text-sm font-medium text-black dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
