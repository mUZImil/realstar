import React from 'react'



export default function SubscriptionCard({ title, description, transaction, bgColor, checkBoxes }) {
    return (
        <div className={`border border-[#D7D7D7] rounded-xl p-4 ${bgColor}`}>
            <div className='border-b pb-8'>
                <div className={` `}>
                    <h3 className='font-bold text-[24px] pb-2' >{title}</h3>
                    <label className='text-[14px] opacity-[.7]'>{description}</label>
                </div>
                <div className='py-6 flex flex-col gap-2'>
                    <h3 className='text-[22px] font-bold'>0% Commissions</h3>
                    <label className='text-[14px] font-semibold'>{transaction}</label>
                </div>
                <button className='p-4 text-black flex justify-between items-center w-full bg-[#00E9D3] rounded-full font-semibold'>Get Started<img src='./pointer.svg' className='' /></button>
            </div>


            <div className=''>
               {checkBoxes}
            </div>
        </div>
    )
}
