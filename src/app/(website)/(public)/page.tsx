// Components

import Features from '@/components/Home/Features'
import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import Plan from '@/components/Home/Plan'
import Productive from '@/components/Home/Productive'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Plan />
      <Footer />
    </>
  )
}
