'use client'

import { useState } from 'react'
import { EyeSlash, Eye } from '@phosphor-icons/react'
import Image from 'next/image'

export default function ResetPassword() {
  const [resetSuccess, setResetSuccess] = useState(2)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formState, setFormState] = useState({
    password: '',
    confirmpassword: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResetSuccess(1)
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
    <div className="flex flex-col items-center justify-center h-full max-w-md px-8 mx-auto">
      {resetSuccess === 1 ? (
        <>
          <Image width={90} height={40} src="/assets/icons/auth-logo.svg" className="mb-3" alt="" />
          <h1 className="font-bold text-black title dark:text-white">Reset Password</h1>
          <p className="description max-w-64 dark:text-grayLightActive">
            Enter your registered email
          </p>
          <div className="w-full">
            <div className="py-8 md:py-10">
              <form onSubmit={handleSubmit} className="form">
                <div className="space-y-3">
                  <label htmlFor="email" className="dark:text-grayLightActive">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="dark:bg-grayDarker dark:border-grayDark dark:text-grayLightActive"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mt-8">
                  <button type="submit" className="w-full btn btn-primary dark:bg-primaryDark">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : resetSuccess === 2 ? (
        <>
          <Image width={90} height={40} src="/assets/icons/auth-logo.svg" className="mb-3" alt="" />
          <h1 className="font-bold text-black title dark:text-white">Enter Verification Code</h1>
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
                  <span className="font-bold text-black dark:text-white">Click here to resend</span>
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
      ) : resetSuccess === 3 ? (
        <>
          <Image width={90} height={40} src="/assets/icons/auth-logo.svg" className="mb-3" alt="" />
          <h1 className="font-bold text-black title dark:text-white">Create New Password</h1>
          <p className="description max-w-64 dark:text-grayLightActive">
            Please choose a password that hasn’t been used before. Must be at least 8 characters.
          </p>
          <div className="w-full">
            <div className="py-8 md:py-10">
              <form onSubmit={handleSubmit} className="form">
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label htmlFor="password">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        className="dark:bg-grayDarker dark:border-grayDark dark:text-grayLightActive"
                        placeholder="Create  your password"
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
                    <label htmlFor="confirm password">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        className="dark:bg-grayDarker dark:border-grayDark dark:text-grayLightActive"
                        placeholder="Enter your password"
                        value={formState.confirmpassword}
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
                <div className="mt-8">
                  <button type="submit" className="w-full btn btn-primary dark:bg-primaryDark">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : resetSuccess === 4 ? (
        <>
          <Image width={90} height={40} src="/assets/icons/auth-logo.svg" className="mb-3" alt="" />
          <h1 className="font-bold text-black title dark:text-white">Password Reset</h1>
          <p className="description max-w-64 dark:text-grayLightActive">
            Your password has been successfully reset. Click here to log in magical
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
      ) : (
        <></>
      )}
    </div>
  )
}
