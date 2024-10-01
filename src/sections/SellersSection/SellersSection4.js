import React from 'react'
import '../../App.css'
import SellersHomeCards from '../../components/SellersHomeCards'
export default function SellersSection4() {
  return (
    <div className='px-[8%] py-8 max-[540px]:px-[0]'>
        <div className='grid grid-cols-2 max-[1000px]:flex py-12 max-[1000px]:gap-12 max-[800px]:text-center max-[800px]:flex-col max-[800px]:gap-4 max-[540px]:px-[8%]'>
            <h3 className='text-[48px] font-bold max-[1000px]:text-[32px]'>Methodology</h3>
            <p>
            Your home's value is estimated by analyzing recently sold properties that closely match your own in size, location, and condition. We focus on key factors like square footage, features, and recent upgrades to provide the most accurate comparison. Additionally, we assess market trends such as average days on market and price per square foot. You can refine the estimate further by adding details about any improvements you've made to the home below.
            </p>
        </div>
        <div className='bg-[#0C4C6B] rounded-xl p-8 flex text-white gap-10  max-[540px]:rounded-none'>
           
           <div className='flex flex-col gap-6 overflow-x-scroll'>
            <h4 className='text-[35px] font-bold max-[540px]:text-center'>Similar homes</h4><label className='max-w-[600px] min-w-[200px] max-[540px]:text-center'>These homes have the same area and listing pricethat matches your home’s RealStar's estimate</label>
            <div className='flex gap-3 max-[540px]:flex-col max-[540px]:[&>*]:w-full max-[540px]:text-center'>
              <div className='flex flex-col gap-1 px-3 py-2 rounded-xl bg-[#ffffff20] w-[200px]'><h4 className='text-[35px] font-semibold'>$669,450</h4><label className='text-[14px] opacity-[.7]'>Median listing price</label></div>
              <div className='flex flex-col gap-1 px-3 py-2 rounded-xl bg-[#ffffff20] w-[200px]'><h4 className='text-[35px] font-semibold'>$372</h4><label className='text-[14px] opacity-[.7]'>median listing price/sqft</label></div>
            </div>
            <div className='flex gap-2 '>
                <SellersHomeCards image={'./SellersCardImage1.svg'} price={'$640,000'}/>
                <SellersHomeCards image={'./SellersCardImage2.svg'} price={'$640,000'}/>
                <SellersHomeCards image={'./SellersCardImage2.svg'} price={'$640,000'}/>
            </div>
           </div>

           <div className='maps h-full max-[950px]:hidden'>
            <img src='./maps.jpg' className='min-h-[600px] rounded-xl '/>
           </div>
        </div>
    </div>
  )
}
