import Image from 'next/image'

export default function AdsItem() {
  return (
    <div className="flex flex-col gap-1 w-[344px] min-w-[214px] cursor-pointer">
      <div className="relative flex flex-row">
        <div className="absolute p-3 flex items-center justify-center rounded-[50%] top-3 right-6 bg-grayLight dark:bg-grayDark">
          <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-bookmark bg-item-light-bookmark"></div>
        </div>
        <Image src="/assets/images/ads-item.png" alt="" width={350} height={350} />
        <div className="absolute bottom-3 flex flex-row gap-[6px] pl-2 mt-[-36px]">
          <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
            <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-chart bg-item-light-chart"></div>
            <p className="text-black dark:text-white">185.9K</p>
          </div>
          <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
            <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-hand bg-item-light-hand"></div>
            <p className="text-black dark:text-white">5.9K</p>
          </div>
          <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
            <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-calendar bg-item-light-calendar"></div>
            <p className="text-black dark:text-white">8</p>
          </div>
          <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
            <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-share bg-item-light-share"></div>
            <p className="text-black dark:text-white">2</p>
          </div>
        </div>
      </div>
      <p className="text-sm font-medium text-black dark:text-white">I’m in tears 😭 #bestfriend</p>
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="w-6 h-6 bg-no-repeat dark:bg-item-dark-logo bg-item-light-logo"></div>
        <p className="text-xs text-grayDark dark:text-grayLightActive">Framealove</p>
        <Image src="/assets/flags/canada.png" alt="" width={20} height={20} />
      </div>
    </div>
  )
}
