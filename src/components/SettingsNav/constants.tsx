import ProfileIcon from '@/icons/ProfileIcon'
import { Navigation } from '../Navigation/constant'
import SettingsIcon from '@/icons/SettingsIcon'
import MembershipIcon from '@/icons/MembershipIcon'
import AppearanceIcon from '@/icons/AppearanceIcon'

export const SETTINGS_NAV_ITEMS: Navigation[] = [
  {
    label: 'Profile Info',
    href: '/settings/profile',
    Icon: ProfileIcon,
  },
  {
    label: 'My Account',
    href: '/settings/account',
    Icon: SettingsIcon,
  },
  {
    label: 'Membership',
    href: '/settings/membership',
    Icon: MembershipIcon,
  },
  {
    label: 'Appearance',
    href: '/settings/appearance',
    Icon: AppearanceIcon,
  },
]
