import React from 'react'

export default function SellersSection2() {
  return (
    <div className='px-[8%] py-8 grid grid-cols-2 max-[1270px]:grid-cols-1 max-[1270px]:grid-rows-2 gap-16 border-y border-[#C9C9C9]'>
       <div className='max-[1270px]:row-start-2 max-[1270px]:row-end-3'>
        <h2 className='text-[clamp(20px,25px,25px)] font-bold max-[1000px]:text-center'>Home averages in [neighborhood name]</h2>
        <div className='flex flex-wrap justify-between max-[600px]:justify-center pt-4 gap-8 '>
            <div className='flex flex-col gap-2 items-center justify-center'><label className='text-[35px] font-bold text-[#0C4C6B]'>18</label><label className='text-[16px] opacity-[.7]'>Avg. Days on Market</label></div>
            <div className='border max-[428px]:hidden'></div>
            <div className='flex flex-col gap-2 items-center justify-center'><label className='text-[35px] font-bold text-[#0C4C6B]'>+18</label><label className='text-[16px] opacity-[.7]'>sell price vs list price</label></div>
            <div className='border max-[570px]:hidden'></div>
            <div className='flex flex-col gap-2 items-center justify-center max-[570px]:w-full'><label className='text-[35px] font-bold text-[#0C4C6B]'>$661</label><label className='text-[16px] opacity-[.7]'>price/sqft</label></div>
        </div>
       </div>

       <div className='flex flex-col justify-center gap-8'>
        <div className='flex gap-3 items-center max-[1000px]:text-center max-[1000px]:justisfy-center w-full'>
            <h5 className='text-[25px] font-bold'>Sellers's Market</h5>
            <label className='text-[14px] opacity-[.7]'>Can expect multiple offers</label>
        </div>
        {/* <input type='range' className='appearance-none rounded-full w- h-[20px] bg-gradient-to-r from-[#FD6260] to-[#00AE49]'/> */}
        <div className='w-full h-[20px] bg-[#EBEBEB] rounded-full'>
          <div className='h-full bg-gradient-to-r from-[#FD6260] to-[#00AE49] w-[70%] rounded-full relative flex items-center'>
            <div className='bg-[black] absolute h-[35px] w-[35px] rounded-full border-[3px] border-[white] left-[95%]'></div>
          </div>
        </div>
       </div>
    </div>
  )
}
