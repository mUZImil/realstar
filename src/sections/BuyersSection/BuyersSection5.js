import React from 'react'
import SubscriptionCard from '../../components/SubscriptionCard'
import AICoreChecks from '../../components/SubscriptionCardsChecks/AICoreChecks'
import AIEliteChecks from '../../components/SubscriptionCardsChecks/AIEliteChecks'
import AIConciergeChecks from '../../components/SubscriptionCardsChecks/AIConciergeChecks'

export default function BuyersSection5() {
  return (
    <div className='px-[8%] py-16'>
        <div>
            <h3 className='text-center text-[clamp(22px,2.5vw,46px)] font-bold  m-auto'>We work for you, not commissions</h3>
            <p className='opacity-[.7] pt-4 pb-8 m-auto text-center'>Choose the level of service that’s right for you and your budget</p>
        </div>
        <div className='grid grid-cols-3 max-[840px]:grid-cols-1 items-center gap-4 m-auto'>
            <SubscriptionCard title={'AI-Core'} description={'Suitable for buyers whove already found a home and only need help with offer creation, negotiation and closing'} transaction={'+ $2,999 upfront'} bgColor={'bg-[#F9F9F9] h-full'} checkBoxes={<AICoreChecks/>}/>
            <SubscriptionCard title={'AI-Elite'} description={'Suitable for repeat buyers seeking a hands-off approach with limited search and showing assistance'} transaction={'+ $4999 at close'} bgColor={'bg-[#0C4C6B] text-white  h-full'} checkBoxes={<AIEliteChecks/>}/>
            <SubscriptionCard title={'AI-Concierge'} description={'Suitable for first time home buyers or buyers who want a premium, high-touch experience'} transaction={'+ $7999 at close'} bgColor={'bg-[#F9F9F9]  h-full'} checkBoxes={<AIConciergeChecks/>}/>
        </div>
    </div>
  )
}
