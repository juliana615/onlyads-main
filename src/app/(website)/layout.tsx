import React from 'react'
import RootLayout from '@/layouts/RootLayout'

import './globals.scss'

import AuthProvider from '@/components/Providers/AuthProvider'
import { ModalProvider } from '@faceless-ui/modal'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <RootLayout>
      <ModalProvider>
        <AuthProvider>{children}</AuthProvider>
      </ModalProvider>
    </RootLayout>
  )
}
