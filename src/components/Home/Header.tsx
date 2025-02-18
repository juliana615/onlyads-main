'use client'
import Link from 'next/link'
import Image from 'next/image'
import { CaretDown } from '@phosphor-icons/react'
import { useTheme } from '../Providers/ThemeProvider'

const Header = () => {
  const { isDark } = useTheme()

  return (
    <header className="relative flex items-center justify-center h-20 px-6 pt-5 mx-4 lg:mx-14 lg:justify-between">
      <div className="absolute left-0 lg:hidden">
        <Image
          src={
            isDark
              ? 'assets/icons/landingpage/header-dark-icon.svg'
              : 'assets/icons/landingpage/header-light-icon.svg'
          }
          alt="Site logo"
          width={24}
          height={24}
        />
      </div>
      <div className="w-32 h-10 ml-20 bg-no-repeat bg-logo-light-mode dark:bg-logo-dark-mode lg:ml-0" />
      <nav className="hidden space-x-6 lg:flex">
        <div className="flex items-center justify-center space-x-2 cursor-pointer">
          <span className="text-black span-hover dark:text-white">Products</span>
          <CaretDown width={18} height={18} />
        </div>
        <div className="flex items-center justify-center space-x-2 cursor-pointer">
          <span className="text-black span-hover dark:text-white">Advertisers</span>
          <CaretDown width={18} height={18} />
        </div>
        <div className="flex items-center justify-center space-x-2 cursor-pointer">
          <span className="text-black span-hover dark:text-white">Shop</span>
          <CaretDown width={18} height={18} />
        </div>
        <span className="text-black span-hover dark:text-white">Pricing</span>
      </nav>
      <div className="flex items-center pr-12 space-x-4 ">
        <Link href="/login">
          <button className="hidden rounded-[10px] border border-grayLight bg-white px-4 py-2 text-sm font-semibold text-black shadow lg:flex">
            Sign In
          </button>
        </Link>
        <button className="hidden rounded-[10px] bg-primaryDarker px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-primaryDarkHover lg:flex ">
          Get Started
        </button>
      </div>
    </header>
  )
}
export default Header
