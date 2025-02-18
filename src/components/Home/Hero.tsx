'use client'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ArrowRight, Star } from '@phosphor-icons/react'
import { useTheme } from '../Providers/ThemeProvider'
import Image from 'next/image'

const Hero = () => {
  const data = {
    list: [
      {
        name: 'Alex J.',
        info: 'Digital Marketer',
        description:
          "OnlyAds has been a game-changer for understanding my competitors' strategies. The platform makes it incredibly easy to discover trending ads, analyze their performance, and see what works in my niche. With detailed insights and creative inspiration, I’ve been able to refine my campaigns and stay ahead of the competition. It’s like having a secret weapon for social media marketing!",
      },
      {
        name: 'Alex J.',
        info: 'Digital Marketer',
        description:
          "OnlyAds has been a game-changer for understanding my competitors' strategies. The platform makes it incredibly easy to discover trending ads, analyze their performance, and see what works in my niche. With detailed insights and creative inspiration, I’ve been able to refine my campaigns and stay ahead of the competition. It’s like having a secret weapon for social media marketing!",
      },
      {
        name: 'Alex J.',
        info: 'Digital Marketer',
        description:
          "OnlyAds has been a game-changer for understanding my competitors' strategies. The platform makes it incredibly easy to discover trending ads, analyze their performance, and see what works in my niche. With detailed insights and creative inspiration, I’ve been able to refine my campaigns and stay ahead of the competition. It’s like having a secret weapon for social media marketing!",
      },
      {
        name: 'Alex J.',
        info: 'Digital Marketer',
        description:
          "OnlyAds has been a game-changer for understanding my competitors' strategies. The platform makes it incredibly easy to discover trending ads, analyze their performance, and see what works in my niche. With detailed insights and creative inspiration, I’ve been able to refine my campaigns and stay ahead of the competition. It’s like having a secret weapon for social media marketing!",
      },
      {
        name: 'Alex J.',
        info: 'Digital Marketer',
        description:
          "OnlyAds has been a game-changer for understanding my competitors' strategies. The platform makes it incredibly easy to discover trending ads, analyze their performance, and see what works in my niche. With detailed insights and creative inspiration, I’ve been able to refine my campaigns and stay ahead of the competition. It’s like having a secret weapon for social media marketing!",
      },
    ],
  }

  const [, setCurrentSlide] = useState(0)
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    loop: true,
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

  const { isDark } = useTheme()

  return (
    <section id="hero" className="bg-bottom bg-contain">
      {/* Hero Container */}
      <div className="container px-4 pt-16 pb-16 mx-auto text-center sm:pb-36 md:pt-48">
        <h1 className="mx-auto max-w-[1330px] text-2xl font-bold !leading-[1.1] sm:text-4xl md:text-5xl dark:text-white">
          Uncover Top-Performing Ads and The Most Viral Products
        </h1>
        <p className="mx-auto mt-3 text-sm font-semibold md:text-lg dark:text-white">
          The most comprehensive tool for ad research, product sourcing, and competitor analytics.
        </p>
        <div className="flex items-center justify-center mt-9">
          <button className="flex items-center justify-center gap-2 rounded-[14px] bg-primaryDark px-5 py-3 text-base text-white sm:text-lg ">
            <span>Get Started For Free</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={
            isDark
              ? '/assets/images/landingpage/hero-dark.png'
              : '/assets/images/landingpage/hero-light.png'
          }
          alt="Hero Section Light"
          className="w-full px-3 rounded-lg sm:px-12 dark:bg-[#1E1E1E]"
          width={1900}
          height={1000}
        />
        <div className="absolute w-full top-[80%] xxl:top-[85%]">
          <div className="absolute top-[10px] flex h-[28vw] w-full -translate-y-full items-center justify-center gap-2 bg-gradient-to-t from-[#F8F8F8] from-60% to-[#fff0] pt-[50px] dark:from-[#24262A] dark:to-transparent sm:pt-[110px]">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/landingpage/hero-avatar.jpg"
                  alt={`Avatar ${index + 1}`}
                  className="w-10 h-10 border-2 border-white rounded-full shadow-md"
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star width={18} height={18} color="#F59e0b" weight="fill" key={index} />
                ))}
              </div>
              <p className="text-sm font-medium text-black dark:text-white">
                Loved by <span className="font-semibold">1M+ Customers</span>
              </p>
            </div>
          </div>
          <div className="list keen-slider bg-[#F8F8F8] dark:bg-[#24262A]" ref={sliderRef}>
            {data.list.map((info: any, index: number) => (
              <div key={index} className="one keen-slider__slide">
                <div className="flex flex-col gap-2 px-5 py-6 mx-5 text-black bg-white border rounded-2xl border-grayLight dark:border-darkBlue1 dark:bg-grayDarker dark:text-white md:mx-0">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star width={18} height={18} color="#F59e0b" weight="fill" key={index} />
                    ))}
                  </div>
                  <p className="text-sm font-semibold leading-normal sm:text-base">
                    {info.description}
                  </p>
                  <p className="text-sm font-semibold text-grayLightActive">{info.name}</p>
                  <p className="text-sm font-semibold sm:text-xl"> {info.info} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
