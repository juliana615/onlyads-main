import { FacebookLogo, InstagramLogo, TiktokLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#220D35] text-white">
      <div className="px-4 pt-10 sm:px-9 sm:pt-12">
        <div className="grid gap-10 sm:grid-cols-12">
          {/* Logo Section */}
          <div className="space-y-6 sm:col-span-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/icons/landingpage/logo-dark-mode.svg"
                alt="Logo"
                width={90}
                height={30}
              />
            </div>
            <div className="text-lg sm:text-xl">
              The most comprehensive tool for ad research, product sourcing, and competitor
              analytics.
            </div>
            <div className="hidden text-lg font-semibold sm:text-xl">Connect with us</div>
            <div className="items-center hidden space-x-3 sm:flex">
              <TiktokLogo weight="fill" width={34} height={34} color="#7a7a7a" />
              <FacebookLogo weight="fill" width={34} height={34} color="#7a7a7a" />
              <InstagramLogo weight="fill" width={34} height={34} color="#7a7a7a" />
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4 sm:col-span-3">
            <p className="text-xl font-bold">Features</p>
            <p className="text-base sm:text-lg">TikTok Ads Spy</p>
            <p className="text-base sm:text-lg">Facebook Ads Spy</p>
            <p className="text-base sm:text-lg">Best TikTok Ads Spy</p>
            <p className="text-base sm:text-lg">Adspy</p>
          </div>

          {/* Company Section */}
          <div className="space-y-4 sm:col-span-3">
            <p className="text-xl font-bold">Company</p>
            <p className="text-base sm:text-lg">About</p>
            <p className="text-base sm:text-lg">FAQ</p>
            <p className="text-base sm:text-lg">Privacy</p>
            <p className="text-base sm:text-lg">Terms</p>
            <p className="text-base sm:text-lg">Refund Policy</p>
          </div>

          <div className="flex flex-col gap-3 sm:hidden">
            <div className="text-lg font-semibold">Connect with us</div>
            <div className="flex items-center space-x-3">
              <TiktokLogo weight="fill" width={34} height={34} color="#7a7a7a" />
              <FacebookLogo weight="fill" width={34} height={34} color="#7a7a7a" />
              <InstagramLogo weight="fill" width={34} height={34} color="#7a7a7a" />
            </div>
          </div>
        </div>
        <div className="relative mt-32">
          <Image src="/assets/images/landingpage/footer-bg.svg" alt="" width={1900} height={1000} />
          <p className="absolute text-xl text-center text-gray-700 transform -translate-x-1/2 bottom-5 left-1/2">
            2024 OnlyAds
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
