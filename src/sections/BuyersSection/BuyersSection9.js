import React from 'react'
import AdviceCards from '../../components/AdviceCards'
import CarouselEffectAdviseCards from '../../components/CarouselEffectAdviseCards'

export default function BuyersSection9() {
  return (
    <div className='px-[8%] py-12 flex flex-col items-center'>
        <h2 className='hidden min-[900px]:block text-[clamp(22px,2.5vw,46px)] text-center font-bold w-[clamp(320px,50%,50%)]'>Practical advice and insights on buying and selling homes</h2>
        <h2 className='min-[900px]:hidden text-[clamp(22px,2.5vw,46px)] text-center font-bold'>Our Blogs</h2>
        <div className='py-10 grid grid-cols-3 gap-4 max-[1000px]:hidden'>

        <AdviceCards title={'RealStar AI: buy and sell homes commission free'} date={'Aug 17, 2024'} name={'By Ankit Dhawan'} image={'./realstarImage1.svg'}/>
        <AdviceCards title={'A Step By Step Guide To Selling Your First Home: Part 1'} date={'Aug 19, 2024'} name={'By Omar Hashmy'} image={'./realstarImage2.svg'}/>
        <AdviceCards title={'How AI is Transforming the Real Estate Industry...'} date={'Aug 23, 2024'} name={'By Nick Ng'} image={'./realstarImage3.svg'}/>
   
        </div>
        <div className='min-[1000px]:hidden'>
        <CarouselEffectAdviseCards/>
        </div>
        <button className='font-bold px-4 py-3 rounded-full bg-[#00E9D3] text-[14px]'>View more</button>
    </div>
  )
}
