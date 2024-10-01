import React from 'react'

export default function SellersSection7() {
  return (
    <div className='px-[8%] py-12 max-[1200px]:px-0 max-[820px]:hidden'>
       <div className='p-10 bg-[#FEFBF6] rounded-xl max-[1200px]:rounded-none'>
        <div className='flex justify-between items-center pb-8 border-b'>
           <h5 className='text-[25px] font-semibold'>The full list</h5>
           <div className='relative px-4 py-2 rounded-full flex items-center w-[420px] justify-between border-[1px] border-[#CECECE]'>
           <input type='text' placeholder='Rapid search' className='bg-[#FEFBF6] outline-none'/>
           <button><img src='./searchIcon.svg'/></button>
           </div>
        </div>

        <div className='flex justify-between gap-3 py-10 border-b'>
            
            <div className='flex flex-col gap-2 [&>*]:w-[180px] max-[1200px]:[&>*]:w-[142px] [&>*:not(h4)]:border [&>*:not(h4)]:border-[#C8C8C8] [&>*:not(h4)]:px-6 [&>*:not(h4)]:py-2 [&>*:not(h4)]:rounded-full'>
              <h4 className='text-[22px] font-semibold pb-3 w-full max-[1100px]:text-[16px]'>Main rooms</h4>
              <button className=''>Kitchen</button>
              <button className=''>Bathroom</button>
              <button className=''>Bathroom</button>
              <button className=''>Master Bathroom</button>
              <button className=''>Master Bathroom</button>
              <button className=''>Half bathroom</button>
              <button className=''>Great Room</button>
              <button className=''>Living Room</button>
              <button className=''>Family Room</button>
              <button className=''>Fining Room</button>
              </div>

            <div className='flex flex-col gap-2 [&>*]:w-[180px] max-[1200px]:[&>*]:w-[142px] [&>*:not(h4)]:border [&>*:not(h4)]:border-[#C8C8C8] [&>*:not(h4)]:px-6 [&>*:not(h4)]:py-2 [&>*:not(h4)]:rounded-full'>
              <h4 className='text-[22px] font-semibold pb-3 w-full max-[1100px]:text-[16px]'>Other rooms</h4>
              <button className=''>In Law Suite</button>
              <button className=''>Sunroom</button>
              <button className=''>Game Room</button>
              <button className=''>Fayer-Entryway</button>
              <button className=' '>Home Office</button>
              <button className=''>Basement</button>
              <button className=''>Home Theater</button>
              <button className=''>Home Gym</button>
              <button className=' '>Garage</button>
            </div>

            <div className='flex flex-col gap-2 [&>*]:w-[180px] max-[1200px]:[&>*]:w-[142px] [&>*:not(h4)]:border [&>*:not(h4)]:border-[#C8C8C8] [&>*:not(h4)]:px-6 [&>*:not(h4)]:py-2 [&>*:not(h4)]:rounded-full'>
              <h4 className='text-[22px] font-semibold pb-3 max-[1100px]:text-[16px]'>Parts of house</h4>
              <button className=''>Windows</button>
              <button className=''>Floors</button>
              <button className=''>Front Door</button>
              <button className=''>Exterior Doors</button>
              <button className=''>Interior Doors</button>
              <button className=''>Garage Doors</button>
              <button className=''>Roof</button>
            </div>

            <div className='flex flex-col gap-2 [&>*]:w-[180px] max-[1200px]:[&>*]:w-[142px] [&>*:not(h4)]:border [&>*:not(h4)]:border-[#C8C8C8] [&>*:not(h4)]:px-6 [&>*:not(h4)]:py-2 [&>*:not(h4)]:rounded-full'>
              <h4 className='text-[22px] font-semibold pb-3 max-[1100px]:text-[16px]'>Home equipment</h4>
              <button className=''>Electrical Panel</button>
              <button className=''>A/C Installation</button>
              <button className=''>A/C Repalcement</button>
              <button className=''>Appliances</button>
              <button className=''>Heater</button>
              <button className=''>Water heater</button>
            </div>

            <div className='flex flex-col gap-2 [&>*]:w-[180px] max-[1200px]:[&>*]:w-[142px] [&>*:not(h4)]:border [&>*:not(h4)]:border-[#C8C8C8] [&>*:not(h4)]:px-6 [&>*:not(h4)]:py-2 [&>*:not(h4)]:rounded-full'>
              <h4 className='text-[22px] font-semibold pb-3 max-[1100px]:text-[16px]'>Main rooms</h4>
              <button className=''>Celling</button>
              <button className=''>Exterior Painting</button>
              <button className=''>Cabinets</button>
              <button className=''>Counters</button>
              <button className=''>Backsplash</button>
              <button className=''>Interior Painting</button>
              <button className=''>Deck boards</button>
              <button className=''>Recessed Lighting</button>
              <button className=''>Refinish Doors</button>
            </div>
        </div>

        <div className='flex justify-start pt-8'>
            <button className='rounded-full w-[194px] p-3 bg-[#00E9D3] flex justify-around items-center font-semibold'><label>Continue</label><img src='./pointer.svg'/></button>
        </div>
           
       </div>
    </div>
  )
}
