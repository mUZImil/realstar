import React from 'react'

export default function SellersSection8() {
  return (
    <div className='px-[12%] py-12 bg-[#0C4C6B] max-[1060px]:px-[4%] max-[730px]:hidden'>
        <div className='text-white flex flex-col gap-8'>
            <h3 className='text-[48px] font-bold max-[1060px]:text-[32px]'>Adjusted RealStar's estimated value</h3>
            <p className='w-[570px] max-[1060px]:hidden'>Generate a new RealStar estimated value based on the comps you’ve selected to include, and the home improvements you’ve made.</p>
            <button className=' max-[1060px]:hidden px-4 py-3 w-[235px] rounded-full bg-[#00E9D3] font-semibold text-black'>Update my estimate</button>

            <div className='bg-[#ffffff22] rounded-2xl py-6 px-8 flex flex-col gap-12'>
           <div className='flex flex-col'>
            <label className='text-[25px] font-semibold opacity-[.7]'>Range</label>
            <label className='text-[56px] font-semibold pt-2'>$1,300,000 - $1,478,000</label>
           </div>

           <div className='w-[100%]'>
            <label className='text-[25px] font-semibold opacity-[.7]'>Estimates</label>
            <div className='flex flex-col gap-7 pt-6'>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>LOW</label><div className='h-[12px] rounded-full w-[70%] bg-[#00E9D3]'></div><label>$815,000</label></div>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>LOW</label><div className='h-[12px] rounded-full w-[75%] bg-[#00E9D3]'></div><label>$815,000</label></div>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>LOW</label><div className='h-[12px] rounded-full w-[78%] bg-[#00E9D3]'></div><label>$815,000</label></div>
                <div className='flex gap-2 items-center'><label className='w-[35px] flex justify-end'>LOW</label><div className='h-[12px] rounded-full w-[100%] bg-[#00E9D3]'></div><label>$815,000</label></div>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}
