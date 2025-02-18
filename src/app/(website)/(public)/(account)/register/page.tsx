'use client'

import React, { useState, useEffect } from 'react'
import GoogleSingIn from '@/components/GoogleSignIn'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Create Account
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const liData = [
    {
      id: 0,
      title: 'Your Details',
      description: 'Provide name, email address and password',
      darkActiveIcon: '/assets/icons/auth-dark-user-active.svg',
      darkNormalIcon: '/assets/icons/auth-dark-user-normal.svg',
      lightActiveIcon: '/assets/icons/auth-light-user-avtive.svg',
      lightNormalIcon: '/assets/icons/auth-light-user-normal.svg',
    },
    {
      id: 1,
      title: 'Verify email',
      description: 'Provide name, email address and password',
      darkActiveIcon: '/assets/icons/auth-dark-mail-active.svg',
      darkNormalIcon: '/assets/icons/auth-dark-mail-normal.svg',
      lightActiveIcon: '/assets/icons/auth-light-mail-active.svg',
      lightNormalIcon: '/assets/icons/auth-light-mail-normal.svg',
    },
    {
      id: 2,
      title: 'Welcome to OnlyAds',
      description: 'Provide name, email address and password',
      darkActiveIcon: '/assets/icons/auth-dark-welcome-active.svg',
      darkNormalIcon: '/assets/icons/auth-dark-welcome-normal.svg',
      lightActiveIcon: '/assets/icons/auth-light-welcome-active.svg',
      lightNormalIcon: '/assets/icons/auth-light-welcome-normal.svg',
    },
  ]

  useEffect(() => {
    updateThemeStatus()
    const observer = new MutationObserver(() => {
      updateThemeStatus()
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  const updateThemeStatus = () => {
    setIsDarkTheme(document.documentElement.classList.contains('dark'))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="grid h-full grid-cols-1 gap-4 shadow-lg md:grid-cols-3">
      {/* Sidebar */}
      <div className="hidden p-4 bg-white dark:bg-[#1E1E1E] md:flex md:col-span-1">
        <div className="flex flex-col items-start w-full p-7 rounded-2xl bg-grayLight dark:bg-grayDark">
          <div className="w-32 h-10 ml-20 bg-no-repeat bg-logo-light-mode dark:bg-logo-dark-mode lg:ml-0"></div>
          <ul className="mt-10 space-y-6">
            {liData.map((item) => (
              <li
                key={item.id}
                className={`flex items-center space-x-4 cursor-pointer ${
                  activeIndex === item.id ? 'opacity-100' : 'opacity-70'
                }`}
                onClick={() => handleClick(item.id)}
              >
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="rounded-xl bg-white dark:bg-[#1E1E1E] min-w-9 w-9 h-9 flex items-center justify-center">
                    <Image
                      src={
                        activeIndex === item.id
                          ? isDarkTheme
                            ? item.darkActiveIcon
                            : item.lightActiveIcon
                          : isDarkTheme
                            ? item.darkNormalIcon
                            : item.lightNormalIcon
                      }
                      width={18}
                      height={18}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <p
                      className={`text-base font-semibold ${
                        activeIndex === item.id
                          ? 'text-black dark:text-white'
                          : 'text-grayNormal dark:text-grayLightActive'
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        activeIndex === item.id
                          ? 'text-black dark:text-white'
                          : 'text-grayNormal dark:text-grayLightActive'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Form Section */}
      <div className="relative flex flex-col items-center justify-center w-full h-full max-w-lg px-8 mx-auto md:col-span-2">
        {activeIndex === 0 ? (
          <>
            <Image
              src="/assets/icons/auth-logo.svg"
              className="mb-3"
              alt=""
              width={90}
              height={40}
            />
            <h1 className="font-bold text-black title dark:text-white">Create an account</h1>
            <p className="description dark:text-grayLightActive">
              Provide your name, email address and password
            </p>
            <div className="w-full">
              <div className="py-8 md:py-10">
                <form onSubmit={handleSubmit} className="form">
                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="dark:text-grayLightActive">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="dark:bg-grayDarker dark:border-grayDark dark:text-grayLightActive"
                        placeholder="Enter your full name"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="dark:text-grayLightActive">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="dark:bg-grayDarker dark:border-grayDark dark:text-grayLightActive"
                        placeholder="Enter your email address"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="password">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          id="password"
                          className="dark:bg-grayDarker dark:border-grayDark dark:text-grayLightActive"
                          placeholder="Create your password"
                          value={formState.password}
                          onChange={handleChange}
                        />
                        <div
                          className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeSlash weight="bold" className="dark:text-white" />
                          ) : (
                            <Eye weight="bold" className="dark:text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          id="confirmPassword"
                          className="dark:bg-grayDarker dark:border-grayDark dark:text-grayLightActive"
                          placeholder="Enter your password"
                          value={formState.confirmPassword}
                          onChange={handleConfirmChange}
                        />
                        <div
                          className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeSlash weight="bold" className="dark:text-white" />
                          ) : (
                            <Eye weight="bold" className="dark:text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-grayLight dark:bg-grayDark"></div>
                    <span className="px-4 text-black dark:text-white">Or</span>
                    <div className="flex-grow h-px bg-grayLight dark:bg-grayDark"></div>
                  </div>
                  <GoogleSingIn />
                  <div className="mt-8">
                    <button type="submit" className="w-full btn btn-primary dark:bg-primaryDark">
                      Continue
                    </button>
                  </div>
                </form>
              </div>

              <p className="text-[10px] md:text-sm text-black-secondary text-center dark:text-grayLightActive">
                Already have an account?{'   '}
                <Link
                  href="/login"
                  className="text-xs leading-4 md:text-sm text-btn-primary dark:text-primaryDark"
                >
                  Log In
                </Link>
              </p>
              <p className="absolute bottom-6 text-[10px] md:text-sm text-black-secondary text-center dark:text-grayLightActive">
                By inputting your email address you confirm to agree to OnlyAds contacting you about
                our <span className="underline">Terms of Use</span> and{' '}
                <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </>
        ) : activeIndex === 1 ? (
          <>
            <Image
              width={90}
              height={40}
              src="/assets/icons/auth-logo.svg"
              className="mb-3"
              alt=""
            />
            <h1 className="font-bold text-black title dark:text-white">Veryfi your email</h1>
            <p className="description dark:text-grayLightActive">
              We’ve sent a code to{' '}
              <span className="font-bold text-black dark:text-white">Sidiatbruma@gmail.com</span>
            </p>
            <div className="w-full">
              <div className="py-8 md:py-10">
                <form onSubmit={handleSubmit} className="form">
                  <div className="flex items-center justify-center space-x-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="!w-12 !h-12 md:!w-15 md:!h-15 text-center border-2 !outline-0 rounded font-bold !text-3xl md:!text-[40px] text-primaryDark !border-primaryNormal dark:bg-[#1E1E1E]"
                        onInput={(e) => {
                          const input = e.target as HTMLInputElement
                          input.value = input.value.replace(/[^0-9]/g, '')
                        }}
                      />
                    ))}
                  </div>
                  <p className="description dark:text-grayLightActive">
                    Didn’t get a code?{' '}
                    <span className="font-bold text-black dark:text-white">
                      Click here to resend
                    </span>
                  </p>
                  <div className="mt-8">
                    <button type="submit" className="w-full btn btn-primary dark:bg-primaryDark">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <Image
              width={90}
              height={40}
              src="/assets/icons/auth-logo.svg"
              className="mb-3"
              alt=""
            />
            <h1 className="font-bold text-black title dark:text-white">Welcome to OnlyAds</h1>
            <p className="description dark:text-grayLightActive">
              Get up and start monitoring your competitors
            </p>
            <div className="w-full">
              <form onSubmit={handleSubmit} className="form">
                <div className="mt-8">
                  <button type="submit" className="w-full btn btn-primary dark:bg-primaryDark">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
