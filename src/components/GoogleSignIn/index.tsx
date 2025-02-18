import Image from 'next/image'

export default function GoogleSingIn() {
  return (
    <button className="flex items-center justify-center w-full border rounded-lg border-surf-primary py-[10px] shadow-social dark:border-grayDark">
      <Image src={'/assets/google.svg'} width={14} height={14} alt="google icon" />
      <span className="ml-2 text-xs md:text-sm dark:text-white">Sign in with Google</span>
    </button>
  )
}
