import React from 'react'
import { Holtwood_One_SC, Inter } from 'next/font/google'
import ThemeProvider from '@/components/Providers/ThemeProvider'

const holtwood = Holtwood_One_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-holtwood',
})

const inter = Inter({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={`${holtwood.variable} ${inter.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OnlyAds</title>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
