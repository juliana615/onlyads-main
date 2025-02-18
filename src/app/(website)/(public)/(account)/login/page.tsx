'use client'

import React, { useState } from 'react'
import { EyeSlash, Eye } from '@phosphor-icons/react'
import GoogleSingIn from '@/components/GoogleSignIn'
import Link from 'next/link'
import { login } from '../actions'
import Image from 'next/image'
import { useAuth } from '@/components/Providers/AuthProvider'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })
  const { setUser } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const user = await login(formState)
      console.log(user)
      setUser(user)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-md px-8 mx-auto">
      <Image width={90} height={40} src="/assets/icons/auth-logo.svg" className="mb-3" alt="" />
      <h1 className="font-bold text-black title dark:text-white">Sign in to your Account</h1>
      <p className="description max-w-64 dark:text-grayLightActive">
        Let’s sign in to your account.
      </p>
      <div className="w-full">
        <div className="py-8 md:py-10">
          <form onSubmit={handleSubmit} className="form">
            <div className="space-y-3">
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
                    placeholder="Enter your password"
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
            </div>
            <div className="flex mt-3">
              <label className="underline text-end dark:text-grayLightActive">
                Forget Password?
              </label>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full btn btn-primary dark:bg-primaryDark">
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-grayLight dark:bg-grayDark"></div>
          <span className="px-4 text-black dark:text-white">Or</span>
          <div className="flex-grow h-px bg-grayLight dark:bg-grayDark"></div>
        </div>

        <GoogleSingIn />
        <p className="text-[10px] mt-12 md:text-sm text-black-secondary text-center dark:text-grayLightActive">
          Do not have account?{'   '}
          <Link
            href="/register"
            className="text-xs leading-4 md:text-sm text-btn-primary dark:text-primaryDark"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
