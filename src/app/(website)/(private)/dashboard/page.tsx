'use client'

import React from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import DashboardItem from '@/components/DashboardItem'
import Image from 'next/image'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function Dashboard() {
  const hotKeywords = [
    { keyword: 'Learn More', tag: 'CTA', popularity: '8200', ctr: '4.67%' },
    { keyword: 'Swipe Left', tag: 'CTA', popularity: '4700', ctr: '3.4%' },
    { keyword: 'Free Shipping', tag: 'Other', popularity: '2560', ctr: '2.17%' },
    { keyword: 'Shop Now', tag: 'CTA', popularity: '1050', ctr: '2.45%' },
    { keyword: 'Buy Now', tag: 'CTA', popularity: '909', ctr: '0.87%' },
    { keyword: 'Black Friday', tag: 'Other', popularity: '713', ctr: '0.56%' },
  ]

  const productDistribution = [
    { category: 'Beauty & Health', cost: '90.6K ($7.5M–30M)', percentage: 16 },
    { category: 'Home & Garden', cost: '42.5K ($2.4M–9.9M)', percentage: 8 },
    { category: "Women's Clothing", cost: '46.1K ($1.8M–7.5M)', percentage: 8 },
    { category: 'Jewelry & Accessories', cost: '41.1K ($1.7M–6.8M)', percentage: 7 },
    { category: 'Light & Lighting', cost: '30.4K ($696.2K–2.7M)', percentage: 5 },
    { category: 'Pet Products', cost: '25.5K ($748.1K–2.9M)', percentage: 5 },
  ]

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Dashboard', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-9 py-[30px] m-2 flex flex-col gap-4">
        <p className="text-2xl font-bold text-black dark:text-white">My Dashboard</p>
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
        <p className="mt-8 text-base font-semibold text-black dark:text-white">Trending Today!</p>
        <div className="flex flex-row gap-5 overflow-x-auto custom-scrollbar max-w-[calc(100vw-88px)]">
          {[...Array(8)].map((_, index) => (
            <DashboardItem key={index} />
          ))}
        </div>
        <div className="space-y-6 lg:flex lg:space-y-0 lg:space-x-6">
          {/* Hot Keywords */}
          <div className="flex-1 p-4 bg-white border rounded-lg dark:bg-grayDarker border-grayLightActive dark:border-grayDark">
            <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Hot Keywords</h2>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-grayLightActive dark:border-grayDark">
                  <th className="py-2 text-grayNormal dark:text-grayLightActive">Keywords</th>
                  <th className="py-2 text-grayNormal dark:text-grayLightActive">Popularity</th>
                  <th className="py-2 text-grayNormal dark:text-grayLightActive">CTR</th>
                </tr>
              </thead>
              <tbody>
                {hotKeywords.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-0 border-grayLightActive dark:border-grayDark"
                  >
                    <td className="py-2 text-black dark:text-white">
                      {item.keyword}{' '}
                      <span className="px-2 py-1 ml-2 text-xs text-white rounded-lg bg-grayLightActive dark:bg-grayDark">
                        {item.tag}
                      </span>
                    </td>
                    <td className="py-2 text-black dark:text-white">{item.popularity} ↑</td>
                    <td className="py-2 text-black dark:text-white">{item.ctr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Product Distribution */}
          <div className="flex-1 p-4 bg-white border rounded-lg dark:bg-grayDarker border-grayLightActive dark:border-grayDark">
            <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">
              Product Distribution
            </h2>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-grayLightActive dark:border-grayDark">
                  <th className="py-2 text-grayNormal dark:text-grayLightActive">Category</th>
                  <th className="py-2 text-grayNormal dark:text-grayLightActive">Product / Cost</th>
                  <th className="py-2 text-grayNormal dark:text-grayLightActive">Percentage</th>
                  <th className="py-2 text-grayNormal dark:text-grayLightActive">Growth</th>
                </tr>
              </thead>
              <tbody>
                {productDistribution.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-0 border-grayLightActive dark:border-grayDark"
                  >
                    <td className="py-2 text-black dark:text-white">{item.category}</td>
                    <td className="py-2 text-black dark:text-white">{item.cost}</td>
                    <td className="py-2 text-black dark:text-white">
                      <div className="relative h-2 bg-grayLightActive dark:bg-grayDark rounded w-[80%]">
                        <div
                          className="absolute top-0 left-0 h-2 bg-purple-500 rounded"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-2 text-green-500">{item.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
