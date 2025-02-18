'use client'

import { useTheme } from '../Providers/ThemeProvider'
import Image from 'next/image'

const Features = () => {
  const { isDark } = useTheme()

  return (
    <section
      id="features"
      className="bg-grayLight px-4 py-10 pt-[300px] dark:bg-[#24262A] xss:pt-[250px] xs:pt-[200px] sm:pt-[300px] lg:px-28 xl:pt-48 2xl:pt-36"
    >
      <p className="max-w-[977px] text-base font-bold leading-[20px] text-black dark:text-white sm:text-3xl sm:leading-[35px]">
        Choose OnlyAds and watch your business grow with impactful advertising solutions tailored to
        your goals
      </p>
      <p className="mb-12 mt-4 max-w-[977px] text-xs font-semibold text-grayNormal sm:text-xl">
        Learn more how OnlyAds can help you maximize your reach
      </p>
      <div className="flex flex-col grid-cols-12 mb-9 gap-7 2xl:grid">
        <div className="col-span-7 rounded-2xl lg:rounded-[32px] border border-grayLightActive bg-white bg-gradient-to-t from-[#DAD1E1] to-[#FFF] p-3 lg:pb-16 lg:px-6 lg:pt-7 dark:border-grayNormal dark:bg-grayDarker dark:from-[#352B3E] dark:to-[#18161A]">
          <p className="mb-4 text-base font-semibold text-black dark:text-white sm:text-2xl">
            Target Audience Precision
          </p>
          <p className="h-[120px] text-xs font-semibold text-grayNormal dark:text-white sm:text-base">
            Leverage advanced algorithms to connect your ads with the right audience at the right
            time, ensuring higher engagement and conversions.
          </p>
          <div className="flex flex-col gap-8 rounded-[20px] border border-grayLightActive bg-grayLight p-3 lg:p-5 dark:border-grayNormal dark:bg-grayDark">
            <p className="text-sm font-semibold text-black dark:text-white sm:text-base">
              Audience
            </p>
            <div className="flex flex-col gap-2 lg:flex-row">
              <Image
                className="w-full flex-1 object-contain lg:h-[250px]"
                src={
                  isDark
                    ? '/assets/images/landingpage/feature1-dark.png'
                    : '/assets/images/landingpage/feature1-light.png'
                }
                alt="feature1"
                width={400}
                height={320}
              />
              <Image
                className="w-full flex-1 object-contain lg:h-[250px]"
                src={
                  isDark
                    ? '/assets/images/landingpage/feature2-dark.png'
                    : '/assets/images/landingpage/feature2-light.png'
                }
                alt="feature1"
                width={400}
                height={320}
              />
            </div>
          </div>
        </div>
        <div className="col-span-5 rounded-2xl lg:rounded-[32px] border border-grayLightActive bg-white bg-gradient-to-t from-[#DAD1E1] to-[#FFF] p-4 lg:pb-16 lg:pl-6 lg:pt-7 dark:border-grayNormal  dark:bg-grayDarker dark:from-[#352B3E] dark:to-[#18161A]">
          <p className="mb-4 text-base font-semibold text-black dark:text-white sm:text-2xl">
            Comprehensive Analytics
          </p>
          <p className="h-[120px] text-xs font-semibold text-grayNormal dark:text-white sm:text-base">
            Track your campaign performance in real-time with actionable data on clicks,
            impressions, and conversions.
          </p>
          <div className="flex flex-col gap-8 rounded-[20px] border border-grayLightActive bg-white p-3 lg:p-5 dark:border-grayNormal dark:bg-grayDarkActive">
            <p className="text-sm font-semibold text-black dark:text-white sm:text-base">
              Data Analytics
            </p>
            <div className="flex gap-4">
              <Image
                className="w-full object-contain lg:h-[250px]"
                src={
                  isDark
                    ? '/assets/images/landingpage/feature3-dark.png'
                    : '/assets/images/landingpage/feature3-light.png'
                }
                alt="feature 3"
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col grid-cols-12 mb-9 gap-7 2xl:grid">
        <div className="col-span-5 rounded-2xl lg:rounded-[32px] border border-grayLightActive bg-white bg-gradient-to-t from-[#DAD1E1] to-[#FFF] p-4 lg:pb-16 lg:pl-6 lg:pt-7 dark:border-grayNormal  dark:bg-grayDarker dark:from-[#352B3E] dark:to-[#18161A]">
          <p className="mb-4 text-base font-semibold text-black dark:text-white sm:text-2xl">
            Discover Products
          </p>
          <p className="h-[130px] text-xs font-semibold text-grayNormal dark:text-white sm:text-base">
            Capture niche trends. Real-time updates of ad libraries on popular platforms, helping
            businesses quickly lock in market opportunities.
          </p>
          <div className="flex flex-col gap-4 rounded-[20px] border border-grayLightActive bg-grayLight p-3 lg:p-5 dark:border-grayNormal dark:bg-grayDark 2xl:h-[400px]">
            <p className="text-sm font-semibold text-black dark:text-white sm:text-base">Product</p>
            <div className="flex flex-col h-full gap-2">
              <Image
                className="flex-1 object-contain w-full"
                src={
                  isDark
                    ? '/assets/images/landingpage/feature4-dark-desktop.png'
                    : '/assets/images/landingpage/feature4-light-desktop.png'
                }
                alt="feature 4"
                width={600}
                height={300}
              />
              <Image
                className="flex-1 object-contain w-full"
                src={
                  isDark
                    ? '/assets/images/landingpage/feature5-dark-desktop.png'
                    : '/assets/images/landingpage/feature5-light-desktop.png'
                }
                alt="feature 5"
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="col-span-7 rounded-2xl lg:rounded-[32px] border border-grayLightActive bg-white bg-gradient-to-t from-[#DAD1E1] to-[#FFF] p-3 lg:pb-16 lg:pl-6 lg:pt-7 dark:border-grayNormal dark:bg-grayDarker dark:from-[#352B3E] dark:to-[#18161A]">
          <p className="mb-4 text-base font-semibold text-black dark:text-white sm:text-2xl">
            Cross-Platform Reach
          </p>
          <p className="h-[130px] text-xs font-semibold text-grayNormal dark:text-white sm:text-base">
            Access a wide network of platforms and social media channels to amplify your
            brand&apos;s visibility. Our database covers multi-channel, multi-platform, major social
            platforms like Facebook, TikTok, as well as e-commerce sites like Shopify and others,
            fully meeting your ad monitoring needs.
          </p>
          <div className="flex flex-col gap-8 rounded-[20px] border border-grayLightActive bg-white p-3 lg:p-5 dark:border-grayNormal dark:bg-grayDarker 2xl:h-[400px]">
            <p className="text-sm font-semibold text-black dark:text-white sm:text-base">
              Platform Channels
            </p>
            <div className="h-full gap-4">
              <Image
                className="hidden w-full object-contain md:block lg:h-[250px]"
                src={
                  isDark
                    ? '/assets/images/landingpage/feature6-dark-desktop.png'
                    : '/assets/images/landingpage/feature6-light-desktop.png'
                }
                alt="platform channels"
                width={600}
                height={400}
              />
              <Image
                className="object-contain w-full md:hidden"
                src={
                  isDark
                    ? '/assets/images/landingpage/feature6-dark-mobile.png'
                    : '/assets/images/landingpage/feature6-light-mobile.png'
                }
                alt="platform channels"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features
