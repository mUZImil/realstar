import React from 'react'

export default function AdviceCards({name,date,image,title}) {
  return (
    <div className='shadow-2xl rounded-b-2xl max-[1000px]:w-[380px] max-w-[394px]'>
        <div className=''>
            <img src={image}/>
        </div>
        <div className='p-6 flex flex-col gap-4 pb-8'>
            <h3 className='text-[18px] font-bold'>{title}</h3>
            <div className='flex justify-between items-center text-[13px] opacity-[.7]'>
            <label>{name}</label>
            <label>{date}</label>
            </div>
        </div>
    </div>
  )
}
