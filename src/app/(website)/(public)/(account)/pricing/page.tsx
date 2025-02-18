'use client'

import { useState } from 'react'
import { PLANS } from './plans'
import Image from 'next/image'

export default function Pricing() {
  const [planPeriod, setPlanPeriod] = useState<'monthly' | 'annually'>('monthly')

  return (
    <div className="flex flex-col items-center h-full py-20 md:py-32 md:justify-center pricing">
      <h1 className="title">Get started with our subscription plans</h1>
      <p className="description max-w-96">
        Select the best plans ensuring a perfect match. Switch plans or cancel at any time.
      </p>
      <div className="p-1 mt-10 text-xs leading-4 text-center border w-60 rounded-[18px] bg-card-bg border-card-border space-y-1">
        <div
          className={`py-2 cursor-pointer ${planPeriod === 'monthly' ? 'bg-white rounded-full shadow-pricing-plan' : ''}`}
          onClick={() => setPlanPeriod('monthly')}
        >
          Monthly
        </div>
        <div
          className={`py-2 cursor-pointer ${planPeriod === 'annually' ? 'bg-white rounded-full shadow-pricing-plan' : ''}`}
          onClick={() => setPlanPeriod('annually')}
        >
          Annually
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-16 space-y-6 md:items-stretch md:justify-center md:flex-row md:space-y-0 md:space-x-5">
        {PLANS.map((plan) => (
          <div
            className="px-3 py-5 border rounded-xl border-card-border bg-card-bg w-60"
            key={plan.name}
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <h5 className="text-xs font-medium">{plan.label}</h5>
                <p className="text-xl font-semibold">
                  ${planPeriod === 'monthly' ? plan.price.monthly : plan.price.annually}
                  {planPeriod === 'annually' && (
                    <span className="text-xs font-medium"> /month billed annually</span>
                  )}
                </p>
              </div>
              <button className="w-full py-2 text-xs font-semibold text-white rounded-lg bg-btn-primary">
                Start Trial
              </button>
            </div>
            <div className="mt-6 space-y-3">
              {plan.details.map((detail, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <Image
                    src="/assets/checkmark-badge.svg"
                    width={14}
                    height={14}
                    alt="checkmark badge"
                  />
                  <p className="text-xs text-black-secondary">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
