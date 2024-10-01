import React from 'react'

export default function SellersHomeCards({image,price}) {
  return (
    <div className='bg-white w-[254px] h-[332px] text-black rounded-xl'>
        <div>
            <img src={image} />
        </div>
        <div className='p-3 flex flex-col gap-3 w-[254px]'>
            <h4 className='font-semibold text-[22px]'>{price}</h4>
            <div className='flex justify-between'>
                <label className='opacity-[.7]'><span className='font-semibold pr-[3px]'>5</span>bed</label>
                <label className='opacity-[.7]'><span className='font-semibold pr-[3px]'>2</span>bath</label>
                <label className='opacity-[.7]'><span className='font-semibold pr-[3px]'>925</span>sqft</label>
            </div>
            <p className='opacity-[.7] text-[14px]'>606 21st Ave <br/>Seattle, WA 98122</p>
        </div>
    </div>
  )
}
