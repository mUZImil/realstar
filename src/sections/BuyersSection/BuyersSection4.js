import React from 'react'
import HowToDetails from '../../components/HowToDetails'
import FAQs from '../../components/FAQs'

export default function BuyersSection4() {
  return (
    <div className='grid grid-cols-2 max-[1000px]:grid-cols-1 gap-6 px-[8%] py-12'>
      <div className='max-[1000px]:hidden h-full'>
        <img src='./howToBuyImage.svg' className=''/>
      </div>

      <div className='w-full'>
         <h3 className='text-[clamp(22px,2.5vw,46px)] font-bold w-[300px] pb-10 max-[1000px]:text-center max-[1000px]:m-auto'>How to buy with RealStar AI</h3>
         <HowToDetails summary={'Step 1: Book a discovery call'}/>
         <HowToDetails summary={'Step 2: Search and tour with ease'}/>
         <HowToDetails summary={'Step 3: Make offers and negotiate'}/>
         <HowToDetails summary={'Step 4: Close with confidence'}/>
      </div>
    </div>
  )
}
