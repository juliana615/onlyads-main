'use client'

import { usePathname } from 'next/navigation'
import { SETTINGS_NAV_ITEMS } from './constants'
import Link from 'next/link'

type Props = {
  Container: React.FC<{ className?: string; children: React.ReactNode }>
}

export default function SettingsNav({ Container }: Props) {
  const pathname = usePathname()

  return (
    <div className="w-full bg-white border-b border-surf-primary">
      <Container className="flex space-x-1.5 md:space-x-2.5 justify-center md:justify-start">
        {SETTINGS_NAV_ITEMS.map((nav, index) => (
          <div
            className={['py-2', nav.href === pathname ? 'border-b border-btn-primary' : '']
              .filter(Boolean)
              .join(' ')}
            key={index}
          >
            <Link
              className={[
                `flex items-center space-x-1.5 rounded-lg border px-0.5 py-1 md:p-2`,
                nav.href === pathname ? 'border-btn-primary' : 'border-surf-primary',
              ]
                .filter(Boolean)
                .join(' ')}
              href={nav.href}
            >
              <nav.Icon
                stroke={nav.href === pathname ? '#000BA7' : '#262626'}
                width={14}
                height={14}
              />
              <p
                className={[
                  `text-[10px] whitespace-nowrap md:text-xs`,
                  nav.href === pathname ? 'text-btn-primary' : 'text-black-primary',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {nav.label}
              </p>
            </Link>
          </div>
        ))}
      </Container>
    </div>
  )
}
