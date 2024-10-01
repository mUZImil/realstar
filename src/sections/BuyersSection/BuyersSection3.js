import React from 'react'
import BuyersBox from '../../components/BuyersBox'
import CarouselEffectBuyersBox from '../../components/CarouselEffectBuyersBox'

export default function BuyersSection3() {
  return (
    <div className='py-12 px-[8%]'>
      <div className='max-[850px]:hidden'>
        <h2 className='text-[36px] font-bold text-center w-[500px] m-auto'>Numbers speaking for themselves</h2>
        <div className='flex justify-center gap-12 pt-12'>
          <div className='flex flex-col justify-center items-center'><h2 className='text-[46px] font-bold text-[#0C4C6B]'>75%</h2><label className='text-[14px] opacity-[.8]'>Candidate match rate</label></div>
          <div className='flex flex-col justify-center items-center px-12 border-x border-opacity-[.6]'><h2 className='text-[46px] font-bold text-[#0C4C6B]'>4,000+</h2><label className='text-[14px] opacity-[.8]'>Successful placemen</label></div>
          <div className='flex flex-col justify-center items-center'><h2 className='text-[46px] font-bold text-[#0C4C6B]'>50+</h2><label className='text-[14px] opacity-[.8]'>Operating countries</label></div>
        </div>
      </div>

      <div className='pt-12'>
        <h3 className='text-[clamp(22px,2.5vw,46px)] font-bold text-center'>Trusted by buyers just like you</h3>
        <div className='pt-12 flex gap-4 max-[1000px]:overflow-x-scroll max-[1000px]:hidden'>
          <BuyersBox/>
          <BuyersBox/>
          <BuyersBox/>
        </div>
        <div className='min-[1000px]:hidden'>
          <CarouselEffectBuyersBox/>
        </div>
      </div>
    </div>
  )
}
