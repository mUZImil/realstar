import React from 'react'

export default function BuyersSection7() {
  return (
    <div className='buyersSection7 grid px-[8%] py-12'>
        <div className='buyersSection7-div1 flex flex-col justify-end'>
        <h2 className='text-[clamp(22px,2.5vw,46px)] font-bold pb-2 max-[1000px]:text-center'>Meet Nova, your AI real estate agent</h2>
        <p className='text-[14px] max-[1000px]:text-center'>Chat with Nova about buying your next home. See how our unique AI-human agent collaboration ensures a seamless and stress-free buying experience.</p>          
        </div>
        
        
        <div className='grow m-auto buyersSection7-img'>
            <img src='./gifLogo.svg'/>
        </div>
        
        
        <div className='py-6 flex flex-col items-center gap-4 buyersSection7-div2'>
            <button className='flex justify-between items-center w-[300px] p-4 px-8 rounded-full bg-[#00E9D3]'><img src='./NovaLogo.svg' className='bg-[#0C4C6B] rounded-full p-2'/><label className='text-[14px] font-bold'>Talk with Nova</label><img src='./pointer.svg'/></button>
            
            
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex items-start gap-2'>
                    <img src='./ninjaBlades.svg'/>
                    <label className='text-[#9C9C9C] text-[14px]'>Is now the right time to buy?</label>
                </div>
                <div className='flex items-start gap-2'>
                    <img src='./ninjaBlades.svg'/>
                    <label className='text-[#9C9C9C] text-[14px]'>I’m looking for homes in a great school district.</label>
                </div>
                <div className='flex items-start gap-2'>
                    <img src='./ninjaBlades.svg'/>
                    <label className='text-[#9C9C9C] text-[14px]'>What open houses are near me?</label>
                </div>
            </div>
        </div>
    </div>
  )
}
