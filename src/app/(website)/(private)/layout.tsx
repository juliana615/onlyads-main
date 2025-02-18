import React from 'react'
import Navigation from '@/components/Navigation'
import { ModalContainer } from '@faceless-ui/modal'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen bg-grayLight dark:bg-grayDark">
      {/* <Navigation /> */}
      <div className="relative h-full grow md:border-l border-surf-primary">
        {children}
        <ModalContainer className="!absolute" />
      </div>
    </main>
  )
}
