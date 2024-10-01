import React from 'react'

export default function SellersSection10() {
  return (
    <div className='grid grid-cols-2 gap-16 px-[8%] py-12 max-[1000px]:grid-cols-1'>
        <div className='flex flex-col gap-3 justify-start pt-5 max-[1000px]:text-center'>
            <h3 className='text-[48px] font-bold max-[1000px]:text-[32px]'>Proven success for savvy sellers</h3>
            <p className='max-w-[500px] max-[1000px]:mx-auto'>Built for accuracy and efficiency, our AI-first services minimize unnecessary fees and costs, ensuring maximum profit for home sellers.</p>
        </div>

        <div className='flex justify-between gap-6 max-[1000px]:justify-around'>
            <div className='max-[1000px]:[&>*]:text-center'>
                <div className='flex flex-col gap-3 py-5 border-b [&>*:not(label)]:text-[#0C4C6B]'><h3 className='text-[clamp(32px,10vw,56px)] font-semibold'>99.1%</h3><label className='text-[clamp(16px,1.7vw,25px)]'>Close-to-list price</label></div>
                <div className='flex flex-col gap-3 py-5 border-b [&>*:not(label)]:text-[#0C4C6B]'><h3 className='text-[clamp(32px,10vw,56px)] font-semibold'>$55K</h3><label className='text-[clamp(16px,1.7vw,25px)]'>Avg. seller's savings</label></div>
                <div className='flex flex-col gap-3 py-5 border-b [&>*:not(label)]:text-[#0C4C6B]'><h3 className='text-[clamp(32px,10vw,56px)] font-semibold'>$3.5B</h3><label className='text-[clamp(16px,1.7vw,25px)]'>Transaction value</label></div>
            </div>
            <div className='max-[1000px]:[&>*]:text-center'>
                <div className='flex flex-col gap-3 py-5 border-b [&>*:not(label)]:text-[#0C4C6B]'><h3 className='text-[clamp(32px,10vw,56px)] font-semibold'>4,000+</h3><label className='text-[clamp(16px,1.7vw,25px)]'>Trusted clients</label></div>
                <div className='flex flex-col gap-3 py-5 border-b [&>*:not(label)]:text-[#0C4C6B]'><h3 className='text-[clamp(32px,10vw,56px)] font-semibold'>5.0</h3><label className='text-[clamp(16px,1.7vw,25px)]'>Zillow reviews score</label></div>
                <div className='flex flex-col gap-3 py-5 border-b [&>*:not(label)]:text-[#0C4C6B]'><h3 className='text-[clamp(32px,10vw,56px)] font-semibold'>24/7</h3><label className='text-[clamp(16px,1.7vw,25px)]'>Seller support coverage</label></div>
            </div>
        </div>
    </div>
  )
}
