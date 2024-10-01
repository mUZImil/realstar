import React from 'react'

export default function SellersSection3() {
  return (
    <div className='bg-[#FEFBF6] border-y px-[8%] pt-12 pb-6'>
        <h2 className='text-[clamp(32px,3vw,48px)] font-bold pb-4 max-[1000px]:text-center'>RealStar's estimated value</h2>
        <p className='pb-8 max-[1000px]:text-center'>Effective date: Sep 9, 2024</p>
        <div className='bg-[white] rounded-2xl py-6 px-8 flex max-[1000px]:flex-col max-[1000px]:gap-8 '>
           <div className='flex flex-col'>
            <label className='text-[25px] font-semibold opacity-[.7] max-[830px]:text-center'>Range</label>
            <label className='text-[56px] font-bold pt-2 max-[830px]:text-[35px] max-[830px]:text-center'>$1,300,000 - $1,478,000</label>
           </div>

           <div className='w-[100%]'>
            <label className='text-[25px] font-semibold opacity-[.7]'>Estimates</label>
            <div className='flex flex-col gap-7 pt-6'>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>LOW</label><div className='h-[12px] rounded-full w-[70%] bg-[#0C4C6B] max-[830px]:w-full'></div><label>$815,000</label></div>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>AVG</label><div className='h-[12px] rounded-full w-[75%] bg-[#0C4C6B] max-[830px]:w-full'></div><label>$815,000</label></div>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>MED</label><div className='h-[12px] rounded-full w-[78%] bg-[#0C4C6B] max-[830px]:w-full'></div><label>$815,000</label></div>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>HIGH</label><div className='h-[12px] rounded-full w-[100%] bg-[#0C4C6B] max-[830px]:w-full'></div><label>$815,000</label></div>
            </div>
           </div>
        </div>
    </div>
  )
}
