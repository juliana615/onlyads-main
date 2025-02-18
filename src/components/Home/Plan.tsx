'use client'
import { useState } from 'react'

const Plan = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$0',
      description: '/month, billed annually',
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
      description: '/month, billed annually',
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
      description: '/month, billed annually',
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
    <section id="earlt-access" className="bg-grayLight px-6 md:px-10 dark:bg-[#24262A]">
      <p className="pt-20 text-base font-bold text-center text-black dark:text-white sm:text-2xl">
        Your Perfect Plan
      </p>
      <p className="mt-4 text-xs font-bold text-center text-grayNormal dark:text-grayLightActive sm:text-xl">
        Affordable and scalable options for everyone
      </p>
      <div className="pb-12 mt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
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
                    {plan.description}
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
      <div className="container px-6 pt-16 pb-16 mx-auto text-center sm:pb-36 md:pt-48">
        <h1 className="mx-auto max-w-[1048px] text-2xl font-bold !leading-[1.1] sm:text-4xl md:text-5xl">
          The ultimate all-in-one platform for ad insights, dropshipping product discovery, and
          competitor analysis
        </h1>
        <div className="flex items-center justify-center mt-9">
          <button className="flex items-center justify-center gap-2 rounded-[14px] bg-primaryDark px-5 py-3 text-base text-white sm:text-lg ">
            <span>Get Started For Free</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Plan
