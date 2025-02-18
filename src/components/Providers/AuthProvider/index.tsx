'use client'

import { User } from '@/payload-types'
import React, { createContext, useContext, useState } from 'react'

type Context = {
  user: User | null
  setUser: (user: User | null) => void
  updateUser: (user: Partial<User>) => void
}

const AuthContext = createContext({} as Context)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({
        ...user,
        ...userData,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
