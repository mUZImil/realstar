import React from 'react'
import FAQs from '../../components/FAQs'

export default function BuyersSection8() {
  return (
    <div className='px-[8%]'>
       <h2 className='text-[clamp(22px,2.5vw,46px)] font-bold pb-2 text-center'>FAQs</h2>

       <div>
        <FAQs questions={'How do I get started buying with RealStar AI?'}/>
        <FAQs questions={'How do I get my cash back rebate?'}/>
        <FAQs questions={'hat if the seller is not offering a commission to the buyers agent?'}/>
        <FAQs questions={'What if RealStar Al is the listing broker for the property Im interested in?'}/>
        <FAQs questions={'Are there any upfront or additional fees I should know about?'}/>
        <FAQs questions={'I thought the seller paid the commissions?'}/>
       </div>
    </div>
  )
}
