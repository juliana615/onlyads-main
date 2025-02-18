'use client'

import Image from 'next/image'
import { BOTTOM_NAVS, NAVIGATIONS, type Navigation } from './constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { TrialNotifIcon } from '@/icons/TrialNotifIcon'

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false)

  return (
    <div className="z-10 flex flex-col md:h-full md:w-72 md:z-auto">
      <div className="h-[50px] px-[14px] py-3 border-b border-surf-primary fixed md:static top-0 left-0 right-0 bg-white">
        <div className="flex items-center justify-between md:justify-start space-x-1.5">
          <Image src={'/assets/logo.svg'} width={26} height={26} alt="logo" />
          <span className="hidden ml-1 text-sm uppercase font-holtwood md:block">Trends</span>
          <button onClick={() => setOpenNav(!openNav)} className="md:hidden">
            {openNav ? <X width={20} height={20} /> : <List width={20} height={20} />}
          </button>
        </div>
      </div>
      <div
        className={`grow px-[14px] py-3 flex flex-col justify-between items-stretch fixed top-14 right-2 rounded-md md:rounded-none border md:border-none border-surf-primary bottom-2 md:static bg-white md:translate-x-0 transition-all ease-linear duration-150 ${openNav ? 'left-2 translate-x-0' : 'left-0 -translate-x-full'}`}
      >
        <div className="grow flex flex-col space-y-4 md:space-y-1.5">
          {NAVIGATIONS.map((navigation, index) => (
            <NavItem item={navigation} key={index} />
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          <div className="grow flex flex-col space-y-4 md:space-y-1.5">
            {BOTTOM_NAVS.map((navigation, index) => (
              <NavItem item={navigation} key={index} />
            ))}
          </div>
          <div className="rounded-[10px] border border-[#686FC6] p-3.5 bg-gradient-to-tr from-[#696FC7] to-[#444DC1]">
            <div className="flex items-center space-x-1.5">
              <TrialNotifIcon />
              <p className="text-sm font-semibold leading-4 text-white">Trial ends in 14 days</p>
            </div>
            <p className="w-56 mt-3 text-xs leading-4 text-white">
              You’re on a free premium trial plan on a monthly billing.
            </p>
            <button className="w-full mt-8 bg-white btn btn-secondary">View More Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavItem = ({ item }: { item: Navigation }) => {
  const pathname = usePathname()
  return (
    <Link
      className={`flex items-center text-sm space-x-1.5 md:p-2 ${pathname === item.href ? 'md:bg-link-active text-text-active md:rounded-md' : ''}`}
      href={item.href}
      key={item.label}
    >
      <item.Icon stroke={pathname === item.href ? '#000BA7' : '#262626'} />
      <p>{item.label}</p>
    </Link>
  )
}
