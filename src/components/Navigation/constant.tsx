import React from 'react'
import AnalysisIcon from '@/icons/AnalysisIcon'
import DashboardIcon from '@/icons/DashboardIcon'
import DiscoverIcon from '@/icons/DiscoverIcon'
import StartupIcon from '@/icons/StartupIcon'
import ProductsIcon from '@/icons/ProductsIcon'
import MetaTrendsIcon from '@/icons/MetaTrendsIcon'
import ReportsIcon from '@/icons/ReportsIcon'
import ApiIcon from '@/icons/ApiIcon'
import SettingsIcon from '@/icons/SettingsIcon'
import ContactIcon from '@/icons/ContactIcon'

export type Navigation = {
  label: string
  Icon: React.FC<{ stroke: string; width?: number; height?: number }>
  href: string
}

export const NAVIGATIONS: Navigation[] = [
  {
    label: 'Tracker Dashboard',
    Icon: DashboardIcon,
    href: '/dashboard',
  },
  {
    label: 'Discover Trends',
    Icon: DiscoverIcon,
    href: '/discover',
  },
  {
    label: 'Trend Analysis',
    Icon: AnalysisIcon,
    href: '/analysis',
  },
  {
    label: 'Trending Startups',
    Icon: StartupIcon,
    href: '/startups',
  },
  {
    label: 'Trending Products',
    Icon: ProductsIcon,
    href: '/products',
  },
  {
    label: 'Meta Trends',
    Icon: MetaTrendsIcon,
    href: '/meta-trends',
  },
  {
    label: 'Reports',
    Icon: ReportsIcon,
    href: '/reports',
  },
  {
    label: 'API Access',
    Icon: ApiIcon,
    href: '/api-access',
  },
]

export const BOTTOM_NAVS: Navigation[] = [
  {
    label: 'Settings',
    Icon: SettingsIcon,
    href: '/settings/profile',
  },
  {
    label: 'Contact us',
    Icon: ContactIcon,
    href: '/contact-us',
  },
]
