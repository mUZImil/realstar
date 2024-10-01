import React from 'react'

export default function SellersSection6() {
  return (
    <div className='px-[8%] py-12 grid grid-cols-2 gap-20 max-[1000px]:grid-cols-1 max-[1000px]:gap-8 max-[500px]:hidden'>
        <div className='flex flex-col gap-6 justify-center items-center max-[1000px]:text-center'>
            <h3 className='text-[48px] font-bold max-[1000px]:text-[32px]'>Home renovation cost estimator</h3>
            <label className='opacity-[.7] max-[1000px]:w-[clamp(300px,90%,500px)] mx-auto'>A useful tool to calculate your estimated home renovation costs Just follow a few steps to get an estimate of your remodel, addition, or expansion cost in minutes.</label>
        </div>

        <div className='text-white bg-[#0C4C6B] rounded-xl p-6 flex flex-col gap-8'>
            <h3 className='text-[35px] font-semibold'>Find your project here, or use the ful list below</h3>
            <div className='flex gap-4 flex-wrap max-[1000px]:gap-3'>
                <button className='px-5 py-2 rounded-full border border-white'>Kitchen</button>
                <button className='px-5 py-2 rounded-full border border-white'>Bathroom</button>
                <button className='px-5 py-2 rounded-full bg-white text-[#0C4C6B]'>Exterior Painting</button>
                <button className='px-5 py-2 rounded-full bg-white text-[#0C4C6B]'>Interior Painting</button>
                <button className='px-5 py-2 rounded-full border border-white'>Floors</button>
            </div>
            <button className='px-4 py-3 flex items-center justify-between rounded-full w-full bg-[#00E9D3] text-black'><label>Continue</label><img src='./pointer.svg'/></button>
        </div>
    </div>
  )
}
