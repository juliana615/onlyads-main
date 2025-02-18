'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import DarkThemeIcon from '@/icons/DarkThemeIcon'
import LightThemeIcon from '@/icons/LightThemeIcon'
import SystemThemeIcon from '@/icons/SystemThemeIcon'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export const THEMES: {
  value: Theme
  label: string
  Icon: React.FC<{ stroke: string; width?: number; height?: number }>
}[] = [
  {
    value: Theme.LIGHT,
    label: 'Light',
    Icon: LightThemeIcon,
  },
  {
    value: Theme.DARK,
    label: 'Dark',
    Icon: DarkThemeIcon,
  },
  {
    value: Theme.SYSTEM,
    label: 'System',
    Icon: SystemThemeIcon,
  },
]

type Context = {
  theme: Theme
  toggleTheme: (theme: Theme) => void
  isDark: boolean
}

const ThemeContext = createContext<Context>({} as Context)

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(Theme.SYSTEM)
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const preference = localStorage.getItem('theme') || Theme.SYSTEM

    if (preference === Theme.SYSTEM) {
      updateTheme(getThemeFromSystem())
      localStorage.setItem('theme', Theme.SYSTEM)
    } else {
      updateTheme(preference === Theme.DARK)
    }

    setTheme(preference as Theme)
  }, [])

  const updateTheme = (isDark: boolean) => {
    const html = document.documentElement
    setIsDark(isDark)
    html.classList.toggle('dark', isDark)
  }

  const getThemeFromSystem = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark').matches
  }

  const toggleTheme = (theme: Theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    if (theme === Theme.SYSTEM) updateTheme(getThemeFromSystem())
    else updateTheme(theme === Theme.DARK)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
