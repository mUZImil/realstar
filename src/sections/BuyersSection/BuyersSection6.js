import React, { useState } from 'react';


export default function BuyersSection6() {
  const [value, setValue] = useState(0);

  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className='px-[10%] bg-[#F9F9F9] py-12 grid grid-cols-2 gap-10 max-[700px]:grid-cols-1'>
      <div className='max-[700px]:text-center'>
        <h3 className='text-[clamp(22px,2.5vw,46px)] w-[clamp(250px,60%,60%)] pb-4 font-bold max-[700px]:m-auto'>See how much you can save</h3>
        <p className='text-[14px]'>Don’t throw money away. Our flat-fee and transparent pricing model puts money back in your pocket.</p>
      </div>
      
        <div className='border bg-[#fff] border-[#D7D7D7] flex flex-col justify-between px-[5%] py-4 rounded-xl'>
          <div className='flex justify-between items-center'>
          <label className="text-[14px] font-semibold">Purchase Price</label><label className="text-[14px] font-semibold">$200,000</label>
          </div>
          <input
            type="range"
            min="0"
            max="200000"
            value={value}
            onChange={handleSliderChange}
            className="h-4 bg-[#D9D9D9] rounded-lg appearance-none cursor-pointer"
          />
          <div className='flex justify-between items-center '>
          <label className="text-[14px]">Money saved with RealStar AI</label><label className="text-[28px] font-bold"><span className='opacity-[.6]'>$&nbsp;</span>{value}</label>
          </div>
        </div>
      </div>
    
  )
}
