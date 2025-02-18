'use client'

import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
  Container: React.FC<{ className?: string; children: React.ReactNode }>
  Icon: React.FC
  paths: Array<{ label: string; url: string }>
}

export default function PageHeader({ Container, Icon, paths }: Props) {
  const isActive = false

  const [darkMode, setDarkMode] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)

    const root = document.querySelector('html')
    if (root) {
      root.classList.toggle('dark')
      root.classList.toggle('light')
    }
  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="relative basis-[60px] shrink-0">
      <Container className="flex items-center justify-between h-full space-x-1 !pr-16">
        <div className="flex flex-row items-center justify-center">
          <div
            className="w-6 h-6 bg-no-repeat bg-header-nav-light-menu dark:bg-header-nav-dark-menu lg:hidden"
            onClick={toggleMobileMenu}
          />
          <div className="w-32 h-10 mt-3 ml-4 bg-no-repeat bg-logo-light-mode dark:bg-logo-dark-mode lg:ml-0"></div>
          <ul className="flex-row hidden space-x-3 lg:flex">
            <li className="cursor-pointer">
              <a
                href="/dashboard"
                className={`flex flex-row items-center justify-center gap-1 px-3 py-1 rounded-[1000px] ${
                  paths[0]?.label === 'Dashboard' ? 'bg-white dark:bg-grayDarker shadow-md' : ''
                }`}
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-dashboard bg-header-light-dashboard"></div>
                <p className="text-base font-semibold text-black dark:text-white">Dashboard</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="/ads"
                className={`flex flex-row items-center justify-center gap-1 px-3 py-1 rounded-[1000px] ${
                  paths[0]?.label === 'Ads' ? 'bg-white dark:bg-grayDarker shadow-md' : ''
                }`}
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-ads bg-header-light-ads"></div>
                <p className="text-base font-semibold text-black dark:text-white">Ads</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="/products"
                className={`flex flex-row items-center justify-center gap-1 px-3 py-1 rounded-[1000px] ${
                  paths[0]?.label === 'Products' ? 'bg-white dark:bg-grayDarker shadow-md' : ''
                }`}
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-product bg-header-light-product"></div>
                <p className="text-base font-semibold text-black dark:text-white">Products</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="/shop"
                className={`flex flex-row items-center justify-center gap-1 px-3 py-1 rounded-[1000px] ${
                  paths[0]?.label === 'Shop' ? 'bg-white dark:bg-grayDarker shadow-md' : ''
                }`}
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-shop bg-header-light-shop"></div>
                <p className="text-base font-semibold text-black dark:text-white">Shop</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="/advertisers"
                className={`flex flex-row items-center justify-center gap-1 px-3 py-1 rounded-[1000px] ${
                  paths[0]?.label === 'Advertisers' ? 'bg-white dark:bg-grayDarker shadow-md' : ''
                }`}
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-advertisers bg-header-light-advertisers"></div>
                <p className="text-base font-semibold text-black dark:text-white">Advertisers</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p className="hidden text-base font-semibold text-black lg:block dark:text-white">
            My Collections
          </p>
          <div
            className="flex flex-row items-center justify-center gap-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <Image width={40} height={40} src="/assets/icons/header-avatar.png" alt="" />
            <div className="w-3 h-3 bg-no-repeat dark:bg-header-dark-corner bg-header-light-corner"></div>
          </div>
          {isDropdownOpen && (
            <div className="absolute z-50 bg-white border rounded-lg shadow-lg right-15 top-12 dark:bg-grayDarker border-grayLight dark:border-grayNormal">
              <div className="flex items-center p-4 space-x-3">
                <Image
                  width={40}
                  height={40}
                  src="/assets/icons/header-avatar.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Sidiat Bruma</p>
                  <p className="text-xs text-grayNormal">sidiatbruma@gmail.com</p>
                </div>
              </div>
              <div className="border-t border-grayLight dark:border-grayDark"></div>
              <ul className="py-1">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
                  >
                    <div className="w-4 h-4 bg-no-repeat dark:bg-header-submenu-dark-user bg-header-submenu-light-user"></div>
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
                  >
                    <div className="w-4 h-4 bg-no-repeat dark:bg-header-submenu-dark-plan bg-header-submenu-light-plan"></div>
                    Pricing & Plan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
                  >
                    <div className="w-4 h-4 bg-no-repeat dark:bg-header-submenu-dark-message bg-header-submenu-light-message"></div>
                    Tell a Friend
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
                  >
                    <div className="w-4 h-4 bg-no-repeat dark:bg-header-submenu-dark-support bg-header-submenu-light-support"></div>
                    Support
                  </a>
                </li>
                <div className="border-t border-grayLight dark:border-grayDark"></div>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
                  >
                    <div className="w-4 h-4 bg-no-repeat dark:bg-header-submenu-dark-logout bg-header-submenu-light-logout"></div>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white dark:bg-grayDarker z-40">
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-dashboard bg-header-light-dashboard"></div>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-ads bg-header-light-ads"></div>
                Ads
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-product bg-header-light-product"></div>
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-shop bg-header-light-shop"></div>
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 text-sm text-black dark:text-white"
              >
                <div className="w-5 h-5 bg-no-repeat dark:bg-header-dark-advertisers bg-header-light-advertisers"></div>
                Advertisers
              </a>
            </li>
            <div className="border-t border-grayLight dark:border-grayDark"></div>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 px-4 pt-6 text-sm text-black dark:text-white"
              >
                My Collections
              </a>
            </li>
          </ul>
        </div>
      )}
      <button
        onClick={toggleTheme}
        className="absolute p-2 text-sm text-gray-500 rounded-lg right-5 top-3 hover:bg-grayLight focus:outline-none focus:ring-4 dark:text-grayLightActive dark:hover:bg-grayDark dark:focus:bg-grayDarkHover"
      >
        {darkMode ? (
          <svg
            id="theme-toggle-dark-icon"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          <svg
            id="theme-toggle-light-icon"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
    </div>
  )
}
