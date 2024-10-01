import React from 'react'

export default function SellersSection1() {
    return (
        <div className='px-[8%] py-12'>
           <h2 className='text-[clamp(22px,2.8vw,46px)] font-bold text-center pb-12'>Your home value estimate</h2>
            
            <div className='flex gap-6 relative overflow-hidden max-[800px]:flex-col-reverse'>              
                <div className='rounded-2xl bg-[#F9F9F9] p-6 flex flex-col gap-6 justify-between border border-[#D7D7D7] w-[415px] max-[800px]:w-full'>
                    <h2 className='text-[22px] font-bold w-[260px]'>8393 28th St Ct E, Edgewood, WA, 98371</h2>
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-center items-center'><h2 className='text-[22px] font-bold text-[#0C4C6B]'>4</h2><label className='text-[14px] opacity-[.8]'>Beds</label></div>
                        <div className='border-[.5px] border-[#494949] border-opacity-[.2]'></div>
                        <div className='flex flex-col justify-center items-center'><h2 className='text-[22px] font-bold text-[#0C4C6B]'>2.5</h2><label className='text-[14px] opacity-[.8]'>Baths</label></div>
                        <div className='border-[.5px] border-[#494949] border-opacity-[.2]'></div>
                        <div className='flex flex-col justify-center items-center'><h2 className='text-[22px] font-bold text-[#0C4C6B]'>3,269</h2><label className='text-[14px] opacity-[.8]'>SQFT</label></div>
                    </div>
                    <div className='p-2 px-5 grid gap-2 bg-[white] rounded-2xl '>
                    <label className='opacity-[.7]'>
                        Description
                    </label>
                    <p>Egestas malesuada egestas tortor blandit tincidunt odio. Tincidunt nulla sed quis placerat nisi morbi sed. Ipsum nisl lorem ultrices... Learn more</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <img src='./house.svg'/>
                        <img src='./bedroom.svg'/>
                        <img src='./diningRoom.svg'/>
                    </div>
                </div>


                <div>
                <img src='./sellersImage.jpg' className='h-[540px] max-[550px]:h-[250px] max-[550px]:w-full'/>
                </div>
            </div>
        </div>
    )
}
