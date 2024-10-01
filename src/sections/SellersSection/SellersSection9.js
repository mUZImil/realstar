import React from 'react'

export default function SellersSection9() {
  return (
    <div className='bg-[#FEFBF6] px-[8%] py-12 grid grid-cols-2 grid-rows-2 gap-16 max-[1000px]:grid-cols-1 max-[1000px]:grid-rows-1 max-[1000px]:px-[4%]'>
      <div className='min-[1000px]:row-start-1 min-[1000px]:row-end-2 min-[1000px]:col-start-1 min-[1000px]:col-end-2 flex flex-col gap-8 max-[1000px]:text-center'>
        <h3 className='text-[48px] font-bold max-[1000px]:text-[32px]'>Calculate your net proceeds</h3>
        <p className='max-[1000px]:max-w-[560px] max-[1000px]:mx-auto'>Know exactly what you'll take home from your sale. Input your numbers and see how much more you could profit with RealStar's AI-driven efficiency.</p>
      </div>

      <div className='p-3 border rounded-xl flex flex-col gap-5 min-[1000px]:row-start-1 min-[1000px]:row-end-3 min-[1000px]:col-start-2 min-[1000px]:col-end-3'>
        <div className='flex justify-between items-center'><label>Est. selling price of your home</label><input type='text' value={'$ 663,800'} className='p-3 rounded-xl border bg-[#F5F5F5]'/></div>
        
        <div><div className='w-full h-[10px] bg-[#EBEBEB] rounded-full'><div className='h-full bg-[#FE6361] w-[50%] rounded-full relative flex items-center'><div className='bg-[#0C4C6B] absolute h-[25px] w-[25px] rounded-full border-[3px] border-[white] left-[98%]'></div></div></div></div>
     
        <div className='flex justify-between items-center'><label>Est. selling price of your home</label><input type='text' value={'$ 663,800'} className='p-3 rounded-xl border bg-[#F5F5F5]'/></div>
      
        <div className='pb-5 border-b'><div className='w-full h-[10px] bg-[#EBEBEB] rounded-full'><div className='h-full bg-[#FE6361] w-[70%] rounded-full relative flex items-center'><div className='bg-[#0C4C6B] absolute h-[25px] w-[25px] rounded-full border-[3px] border-[white] left-[98%]'></div></div></div></div>
      
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between'><label>Est. prep & repair costs</label><label>$6,000</label></div>
          <div className='bg-[#AFDDE5] p-4 rounded-xl flex flex-col gap-5'>
             <div className='flex flex-col gap-3'><label>Home improvement</label><div className='flex justify-between rounded-lg bg-[white] p-2'><input type='text' value={'$ 0'} className='outline-none  bg-white'/><label className=''>0%</label></div></div>
             <div className='flex flex-col gap-3'><label>Staging and landscaping </label><div className='flex justify-between rounded-lg bg-[white] p-2'><input type='text' value={'$ 663,800'} className='outline-none bg-white'/><label className=''>0.9%</label></div></div>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex justify-between'><label>Est. prep & repair costs</label><label>$6,000</label></div>
          <div className='bg-[#AFDDE5] p-4 rounded-xl flex flex-col gap-5'>
             <div className='flex flex-col gap-3'><label>Home improvement</label><div className='flex bg-[white] p-2  rounded-lg'><div className='w-full flex justify-between bg-[white]'><input type='text' value={'$ 0'} className='outline-none  bg-white'/><label className='pr-4'>6</label></div><label className='pl-12 border-l'>%</label></div></div>
             <div className='flex flex-col gap-3'><label>Staging and landscaping </label><div className='flex justify-between rounded-lg bg-[white] p-2'><input type='text' value={'$ 663,800'} className='outline-none bg-white'/><label className=''>1%</label></div></div>
             <div className='flex flex-col gap-3'><label>Closing fees</label><div className='flex justify-between rounded-lg bg-[white] p-2'><input type='text' value={'$ 3,902'} className='outline-none bg-white'/><label className=''>0.6%</label></div></div>
             <div className='flex flex-col gap-3'><label>Taxes</label><div className='flex justify-between rounded-lg bg-[white] p-2'><input type='text' value={'$ 11,818'} className='outline-none bg-white'/><label className=''>1.8%</label></div></div>
          </div>
        </div>

        <div className='flex justify-between items-center'><label>Est. total selling costs (10%)</label><label className='p-3 font-semibold'>$ 663,800</label></div>

        <div className='pb-5 border-b'><div className='w-full h-[10px] bg-[#EBEBEB] rounded-full'><div className='h-full bg-[#FE6361] w-[70%] rounded-full relative flex items-center'><div className='bg-[#0C4C6B] absolute h-[25px] w-[25px] rounded-full border-[3px] border-[white] left-[98%]'></div></div></div></div>
        
        <p>All calculations are estimates and provided fro informational purposes only, actual amounts may very.</p>
      </div>

      <div className='p-6 flex min-[1000px]:flex-col max-[1000px]:justify-between gap-6 bg-white min-[1000px]:justify-center max-[834px]:flex-col max-[834px]:items-center max-[834px]:text-center'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-[56px] font-semibold text-[#0C4C6B]'>$250,000</h3>
          <label className='text-[25px] opacity-[.7]'>Estimated net proceeds</label>
        </div>
        <div className='bg-[#E7E7E7] w-[200px] h-[3px] max-[1000px]:hidden'></div>
        <div className='flex flex-col gap-3'>
        <h3 className='text-[56px] font-semibold text-[#0C4C6B]'>$40,000</h3>
        <label className='text-[25px] opacity-[.7] max-w-[428px]'>Potential extra profit selling with RealStar AI vs. traditional brokers</label>
        </div>
      </div>
    </div>
  )
}
