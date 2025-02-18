'use client'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const Productive = () => {
  const data = [
    {
      imgLink: '/assets/icons/landingpage/productive-icon1.svg',
      title: 'Ad Audience Targeting',
      description:
        'Facebook & TikTok ads contain their audience targeting data, such as country, age, gender, device, attributes and other information.',
    },
    {
      imgLink: '/assets/icons/landingpage/productive-icon2.svg',
      title: 'Excellent Ad Copy',
      description:
        'Find the copy that promotes the effectiveness of your ads in the many ads that usually entice customers to buy.',
    },
    {
      imgLink: '/assets/icons/landingpage/productive-icon3.svg',
      title: 'Ad Cost & Estimated Conversions',
      description:
        'We have used algorithms to predicted the consumed cost of the ads and expected ad conversions and even orders.',
    },
    {
      imgLink: '/assets/icons/landingpage/productive-icon4.svg',
      title: 'Landing Page & Redirect Link',
      description:
        'Find the advertised product through the LANDING PAGE and also analyze its redirect links to discover more secrets.',
    },
    {
      imgLink: '/assets/icons/landingpage/productive-icon5.svg',
      title: 'Most Ad Creatives',
      description:
        'We have a large number of TikTok and Facebook ad creatives, including: video, image, carousel image and other advertising formats.',
    },
    {
      imgLink: '/assets/icons/landingpage/productive-icon6.svg',
      title: 'Wide Coverage',
      description:
        'Supports nine major social media platforms, covering 71 countries, 23 languages, and various common ad types, helping you fully grasp global ad market trends.',
    },
    {
      imgLink: '/assets/icons/landingpage/productive-icon7.svg',
      title: 'Massive data',
      description:
        'Covers nearly 10 million advertisers and includes over 1 billion pieces of ad creative data.',
    },
    {
      imgLink: '/assets/icons/landingpage/productive-icon8.svg',
      title: 'Popular Trends',
      description:
        'Trending recommendations empower material analysis and ad product selection, intelligently pushing high-potential ad creatives to help you seize market opportunities.',
    },
  ]
  const sliderData = {
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

  return (
    <section
      id="productive"
      className="bg-grayLight px-3 md:px-10  py-10 dark:bg-[#24262A] lg:px-28"
    >
      <p className="pt-20 text-base font-bold text-center text-black dark:text-white sm:text-2xl">
        Why OnlyAds?
      </p>
      <p className="mt-4 text-xs font-bold text-center text-grayNormal dark:text-grayLightActive sm:text-xl">
        Learn more how OnlyAds can help you maximize your reach
      </p>
      <div className="grid grid-cols-1 gap-6 mt-12 md:gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-[20px] bg-white p-5 lg:pb-14 dark:bg-grayDarker"
          >
            <Image src={item.imgLink} alt="" width={70} height={70} />
            <p className="mt-[40px] text-sm font-semibold text-black dark:text-white sm:text-[18px] ">
              {item.title}
            </p>
            <p className="mt-6 text-xs font-semibold text-grayNormal dark:text-white sm:text-base ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-32">
        <p className="text-base font-bold text-black dark:text-white sm:text-2xl">
          Don’t take our words for granted
        </p>
        <p className="mt-4 text-xs font-bold text-grayNormal dark:text-grayLightActive sm:text-xl">
          Real stories from our users who are amazed after using OnlyAds
        </p>
        <div
          className="list keen-slider mt-6 md:mt-12 bg-grayLight dark:bg-[#24262A]"
          ref={sliderRef}
        >
          {sliderData.list.map((info: any, index: number) => (
            <div key={index} className="one keen-slider__slide">
              <div className="flex flex-col gap-2 px-5 py-6 text-black bg-white border rounded-2xl border-grayLight dark:border-darkBlue1 dark:bg-grayDarker dark:text-white md:mx-0">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#f59e0b" // Orange for stars
                      className="w-5 h-5"
                    >
                      <path d="M12 2.5l2.92 5.91 6.51.94-4.71 4.59 1.11 6.47L12 17.77l-5.83 3.06 1.11-6.47L2.57 9.35l6.51-.94L12 2.5z" />
                    </svg>
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
    </section>
  )
}
export default Productive
