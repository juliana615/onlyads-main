import Image from 'next/image'

export default function PurchaseSuccess() {
  return (
    <div className="flex flex-col items-center h-full py-20 md:py-32 md:justify-center form md:-mx-10">
      <Image src="/assets/purchase-success.png" width={56} height={56} alt="purchase-success" />
      <div className="mt-12">
        <h1 className="text-xl font-bold leading-7 text-center">Card Added Successfully</h1>
        <div className="mt-4 space-y-2 leading-5 text-center text-black-secondary">
          <p className="font-semibold">
            You will be charged $249 USD yearly until you cancel your plan.
          </p>
          <p className="text-sm">You will be charged $249 USD yearly until you cancel your plan.</p>
        </div>
        <div className="w-full mt-9">
          <button className="w-full btn btn-primary">Continue</button>
        </div>
      </div>
    </div>
  )
}
