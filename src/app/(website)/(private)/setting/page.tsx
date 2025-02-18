'use client'

import React, { useState } from 'react'
import DashboardIcon from '@/icons/DashboardIcon'
import PageHeader from '@/components/PageHeader.tsx'
import AdvertiserTraffic from '@/components/Advertisers/Traffic'
import Image from 'next/image'

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`w-full px-3 md:px-9 ${className || ''}`}>{children}</div>
}

export default function ShopItem() {
  const [curStatus, setCurStatus] = useState(0)
  const [activeOption, setActiveOption] = useState('Monthly')

  const data = [
    {
      invoiceNo: 'Invoice-Onlyads-66',
      orderNo: '37457748-09ee',
      membership: 'Onlyads Starter',
      paymenttime: 'Dec 5,2024',
      paymentmethod: 'Debit Card',
      amount: '$1',
    },
  ]
  const plans = [
    {
      title: 'Starter',
      price: '$0',
      descriptionMonth: '/monthly',
      descriptionYear: '/month, billed annually',
      features: [
        '1000 ads per query',
        '50 ad details',
        '50 product details per day',
        '50 advertiser details per day',
        '50 TikTok shop details per day',
        'Unlimited Winning Product',
        'For 1 person',
      ],
      button: 'Get started for free',
      popular: false,
      special: false,
    },
    {
      title: 'Pro',
      price: '$85',
      descriptionMonth: '/monthly',
      descriptionYear: '/month, billed annually',
      features: [
        '5000 ads per query',
        '200 ad details',
        '200 product details per day',
        '200 advertiser details per day',
        '200 TikTok shop details per day',
        'Unlimited Winning Product',
        'For 1 person',
      ],
      button: 'Get started with Pro',
      popular: true,
      special: false,
    },
    {
      title: 'Enterprise',
      price: '$289',
      descriptionMonth: '/monthly',
      descriptionYear: '/month, billed annually',
      features: [
        '10000 ads per query',
        '1000 ad details',
        '1000 product details per day',
        '1000 advertiser details per day',
        '1000 TikTok shop details per day',
        'Unlimited Winning Product',
        'For 1 person',
      ],
      button: 'Get started with Enterprise',
      popular: false,
      special: true,
    },
  ]

  return (
    <div className="flex flex-col items-stretch h-full">
      <PageHeader
        Container={Container}
        Icon={() => <DashboardIcon stroke="#262626" width={14} height={14} />}
        paths={[{ label: 'Setting', url: '' }]}
      />
      <div className="grow bg-white dark:bg-grayDarker rounded-[20px] px-3 md:px-9 py-[30px] m-2 flex flex-col gap-3">
        <p className="text-2xl font-bold text-black dark:text-white">My Account</p>
        {/* Filter Tabs */}
        <div className="flex items-center justify-start mb-4">
          <div className="flex flex-row items-center justify-start w-full gap-2 py-2 text-xs border-b-2 border-grayLight dark:border-grayDark sm:text-base">
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
                Personal Information
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
                Subscription
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
                Pricing & Plans
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
                Themes
              </span>
              {curStatus === 3 && <div className="bg-primaryNormal w-full h-1 mb-[-10px]"></div>}
            </div>
          </div>
        </div>
        {/* Filter Options */}
        {curStatus === 0 && (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-7 w-full sm:w-[440px] max-w-[440px]">
              <p className="text-base font-semibold text-black dark:text-white">
                Personal Information
              </p>
              <Image src="/assets/icons/header-avatar.png" width={50} height={50} alt="" />
              <div className="flex flex-col gap-2">
                <label className="text-xs text-grayDark dark:text-grayLightActive">User Name</label>
                <input
                  type="text"
                  placeholder="Sidiat Bruma"
                  className="w-full px-4 py-2 text-xs bg-white border rounded-lg outline-none border-grayLightActive dark:border-grayDark dark:bg-grayNormal text-grayDark dark:text-white"
                />
                <label className="text-xs text-grayDark dark:text-grayLightActive">Email</label>
                <input
                  type="text"
                  placeholder="test@gmail.com"
                  className="w-full px-4 py-2 text-xs bg-white border rounded-lg outline-none border-grayLightActive dark:border-grayDark dark:bg-grayNormal text-grayDark dark:text-white"
                />
                <label className="text-xs text-grayDark dark:text-grayLightActive">Company</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-2 text-xs bg-white border rounded-lg outline-none border-grayLightActive dark:border-grayDark dark:bg-grayNormal text-grayDark dark:text-white"
                />
                <button className="mt-3 w-[76px] bg-primaryDark dark:bg-primaryNormal text-sm text-white dark:text-black py-2 px-4 rounded-lg">
                  Save
                </button>
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <p className="text-base font-semibold text-black dark:text-white">Security</p>
                <label className="mt-3 text-xs text-grayDark dark:text-grayLightActive">
                  Current Password
                </label>
                <input
                  type="text"
                  placeholder="Sidiat Bruma"
                  className="w-full px-4 py-2 text-xs bg-white border rounded-lg outline-none border-grayLightActive dark:border-grayDark dark:bg-grayNormal text-grayDark dark:text-white"
                />
                <label className="mt-3 text-xs text-grayDark dark:text-grayLightActive">
                  New Password
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-2 text-xs bg-white border rounded-lg outline-none border-grayLightActive dark:border-grayDark dark:bg-grayNormal text-grayDark dark:text-white"
                />
                <label className="mt-3 text-xs text-grayDark dark:text-grayLightActive">
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-2 text-xs bg-white border rounded-lg outline-none border-grayLightActive dark:border-grayDark dark:bg-grayNormal text-grayDark dark:text-white"
                />
                <button className="mt-3 w-[76px] bg-primaryDark dark:bg-primaryNormal text-sm text-white dark:text-black py-2 px-4 rounded-lg">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {curStatus === 1 && (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-7 w-[90%]">
              <p className="text-base font-semibold text-black dark:text-white">Subscription</p>
              <div className="pt-15 flex flex-col gap-3 border border-grayLight dark:border-grayDark rounded-xl shadow-lg px-[18px] py-5">
                <div className="flex flex-row items-center justify-start gap-5">
                  <p className="text-xs w-[125px] text-grayDark dark:text-grayLightActive">
                    Current Password
                  </p>
                  <p className="text-xs text-black dark:text-white">Free Trial</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-5">
                  <p className="text-xs w-[125px] text-grayDark dark:text-grayLightActive">
                    Expiry Date:
                  </p>
                  <p className="text-xs text-black dark:text-white">Free Forever</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-5">
                  <p className="text-xs w-[125px] text-grayDark dark:text-grayLightActive">
                    Subscription Plan:
                  </p>
                  <p className="text-xs text-grayDark dark:text-grayLightActive">No Subscription</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-5">
                  <p className="text-xs w-[125px] text-grayDark dark:text-grayLightActive">
                    Next Charge Amount:
                  </p>
                  <p className="text-xs text-black dark:text-white">$77/monthly</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-5 pb-6">
                  <p className="text-xs w-[125px] text-grayDark dark:text-grayLightActive">
                    Next Charge Date:
                  </p>
                  <p className="text-xs text-black dark:text-white">23 Dec, 2024</p>
                </div>
                <div className="flex flex-row items-center justify-end gap-2">
                  <button className="px-4 py-2 mt-3 text-xs text-black bg-white border rounded-lg w-max border-grayLight dark:border-grayDark dark:bg-grayDarker dark:text-white ">
                    Cancel Subscription
                  </button>
                  <button className="px-4 py-2 mt-3 text-xs text-white rounded-lg w-max bg-primaryDark dark:bg-primaryNormal dark:text-black">
                    Change Subscription
                  </button>
                </div>
              </div>
              <div className="pt-3 flex flex-col gap-3 border border-grayLight dark:border-grayDark rounded-xl shadow-lg py-5 custom-scrollbar overflow-x-scroll max-w-[90vw] lg:w-full">
                <p className="text-base text-black dark:text-white font-semibold px-[18px]">
                  Invoices
                </p>
                <table className="min-w-full border border-collapse table-auto border-grayLight dark:border-grayDark">
                  <thead className="bg-gray-100 dark:bg-grayDark">
                    <tr>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Invoice No
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Order No
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        MemberShip
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Payment Times
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Payment Method
                      </th>
                      <th className="px-4 py-2 text-sm font-medium text-left text-grayNormal dark:text-grayLight">
                        Amount
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
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">
                          {row.invoiceNo}
                        </td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">
                          {row.orderNo}
                        </td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">
                          {row.membership}
                        </td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">
                          {row.paymenttime}
                        </td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">
                          {row.paymentmethod}
                        </td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">
                          {row.amount}
                        </td>
                        <td className="px-4 py-2 text-sm text-dark dark:text-white">...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {curStatus === 2 && (
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col gap-1 text-center">
              <p className="text-2xl font-bold text-black dark:text-white">Your Perfect Plan</p>
              <p className="text-xs text-grayDark dark:text-grayLightActive">
                Affordable and scalable options for everyone.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-row p-1 rounded-lg w-max bg-grayLight dark:bg-grayDark">
                <div
                  className={`flex flex-row gap-1 rounded-md w-max h-8 px-4 items-center justify-center cursor-pointer ${
                    activeOption === 'Monthly' ? 'bg-white dark:bg-grayDarker' : 'bg-transparent'
                  }`}
                  onClick={() => setActiveOption('Monthly')}
                >
                  <span className="text-sm text-black dark:text-white">Monthly</span>
                </div>
                <div
                  className={`flex flex-row gap-2 rounded-md w-max h-8 px-4 items-center justify-center cursor-pointer ${
                    activeOption === 'Annual' ? 'bg-white dark:bg-grayDarker' : 'bg-transparent'
                  }`}
                  onClick={() => setActiveOption('Annual')}
                >
                  <span className="text-sm text-black dark:text-white">Annual</span>
                  <span
                    className={`text-[10px] w-max p-1 rounded-3xl bg-grayLightHover dark:bg-grayNormal`}
                  >
                    Save 35%
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className=" rounded-[20px] border border-constructiveLightActive bg-white p-[10px] dark:bg-grayDarker"
                  >
                    <div
                      className={`relative rounded-[20px] border border-constructiveLightActive  p-6 shadow-sm ${
                        plan.special ? 'border-constructiveLightActive bg-[#8c0ab9]' : ''
                      }`}
                    >
                      <div className="flex gap-2 mb-8">
                        <p className="text-lg font-semibold leading-6 text-black dark:text-white">
                          {plan.title}
                        </p>
                        {plan.popular && (
                          <div className="h-max rounded-[100px] bg-[#8c0ab9]">
                            <p className="px-3 py-1 text-lg font-semibold leading-6 text-white">
                              🔥 Popular
                            </p>
                          </div>
                        )}
                      </div>
                      <p
                        className={`text-lg font-extrabold  dark:text-white ${plan.special ? 'text-white' : 'text-black'}`}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={`ml-2 text-base font-medium dark:text-white ${plan.special ? 'text-white' : 'text-grayNormal'}`}
                      >
                        {activeOption === 'Monthly' ? plan.descriptionMonth : plan.descriptionYear}
                      </p>
                      <ul className="mt-6 space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="rounded-md border border-constructiveLightActive bg-grayLight dark:bg-[#24262A]">
                              <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <span
                              className={`ml-3 dark:text-white ${plan.special ? 'text-white' : 'text-text-grayNormal'}`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={
                          'mt-6 w-full rounded-lg border border-constructiveLightActive bg-white px-4 py-2 font-semibold text-black dark:bg-grayDarker dark:text-white'
                        }
                      >
                        {plan.button}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {curStatus === 3 && (
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col w-[90%]">
              <p className="text-base font-semibold text-black dark:text-white">Appearance</p>
            </div>
            <div className="flex flex-col gap-5 border border-grayLight dark:border-grayDark rounded-xl shadow-lg px-[18px] py-5 w-[90%]">
              <div className="flex flex-row items-center justify-between p-4 rounded-lg bg-grayLight dark:bg-grayDark">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-4 h-4 bg-no-repeat dark:bg-theme-light-dark bg-theme-light-light"></div>
                  <p className="text-sm text-black dark:text-white">Light</p>
                </div>
                <input type="radio" name="theme" className="w-5 h-5" defaultChecked />
              </div>
              <div className="flex flex-row items-center justify-between p-4 rounded-lg bg-grayLight dark:bg-grayDark">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-4 h-4 bg-no-repeat dark:bg-theme-dark-dark bg-theme-dark-light"></div>
                  <p className="text-sm text-black dark:text-white">Dark</p>
                </div>
                <input type="radio" name="theme" className="w-5 h-5" />
              </div>
              <div className="flex flex-row items-center justify-between p-4 rounded-lg bg-grayLight dark:bg-grayDark">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-4 h-4 bg-no-repeat dark:bg-theme-system-dark bg-theme-system-light"></div>
                  <p className="text-sm text-black dark:text-white">System</p>
                </div>
                <input type="radio" name="theme" className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
