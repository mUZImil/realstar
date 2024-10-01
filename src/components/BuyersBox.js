import React from 'react'
import '../App.css';
export default function BuyersBox({img,description}) {
  return (
    <div className='border border-[#FE6361] rounded-xl p-4 w-[350px]'>
       <div className='flex items-center gap-4'>
           <img src={img} />
           <div>
            <label className='block font-semibold'>Junaid Abbas</label>
            <label className='opacity-[.8]'>UI Designer</label>
           </div>
       </div>

       <div className='py-3'>
        <img src='./stars.svg'/>
       </div>

       <div>
        <p>{description}</p>
       </div>
    </div>
  )
}
