import Image from 'next/image'

export default function DashboardItem() {
  return (
    <div className="flex flex-col gap-1 w-[214px] min-w-[214px] cursor-pointer">
      <div className="relative flex flex-row">
        <Image src="/assets/images/dashbaord-item-image.png" alt="" width={230} height={400} />
        <div className="absolute bottom-3 flex flex-row gap-[6px] pl-2 mt-[-36px]">
          <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
            <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-play bg-item-light-play"></div>
            <p className="text-black dark:text-white">5.9K</p>
          </div>
          <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
            <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-chat bg-item-light-chat"></div>
            <p className="text-black dark:text-white">8</p>
          </div>
          <div className="bg-grayLight dark:bg-grayDark rounded-md px-[6px] flex flex-row items-center justify-center gap-1">
            <div className="w-4 h-4 bg-no-repeat dark:bg-item-dark-share bg-item-light-share"></div>
            <p className="text-black dark:text-white">2</p>
          </div>
        </div>
      </div>
      <p className="text-sm font-medium text-black dark:text-white">I’m in tears 😭 #bestfriend</p>
      <p className="text-xs text-grayDark dark:text-grayLightActive">Created at: Aug 23, 2024</p>
    </div>
  )
}
