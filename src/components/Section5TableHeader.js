import React from 'react'

export default function Section5TableHeader() {
  return (
    <div className='w-[270px]'>
        <img src='./ComparableImages.jpg' className='rounded-xl w-[clamp(220px,100%,270px)]'/>
        <div className='flex flex-col gap-2 p-2 items-start'>
        <h3 className='text-[22px] font-bold'>839 E Meadow Ln</h3>
        <label className='opacity-[.7]'>Phoneix, AZ 85022</label>
        </div>
    </div>
  )
}
