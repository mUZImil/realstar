import React from 'react'

export default function BuyersSection2() {
  return (
    <div className='px-[8%] bg-[#FEFBF6] pb-12'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full gap-8 pt-24 max-[800px]:text-center'>
            <div>
                <h1 className='text-[clamp(22px,2.5vw,46px)] font-bold'>A transformative change for home buyers</h1>
            </div>

            <div>
                <p className='pb-6'>On August 17th new rules went into effect that sellers can no longer set and publish the buyer agent’s commission on MLS pages, and that buyers must now sign a an agreement with their agent detailing fees and services before touring homes</p>
                <p>While this ruling does give buyers more control, it also places a new financial burden on buyers who may have to pay their agent’s fee out-of-pocket. For example, a buyer could face an additional $30,000 expense on a $1M home to cover their agent’s 3% commission.</p>
            </div>
        </div>

        <div className='pt-24'>
             <h2 className='text-[clamp(22px,2.5vw,46px)] font-bold pb-12 max-[600px]:text-center'>Why buy with us</h2>
             <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>
                <div className='flex flex-col gap-6 bg-[#FFFFFF] p-6'>
                   <div className='flex gap-4 items-center'><img src='./Xlogo.svg' className='rounded-full'/><h4 className='text-[clamp(16px,1.5vw,20px)] font-bold'>The old way to buy</h4></div>
                   <div><h5 className='font-semibold text-[clamp(16px,1.5vw,20px)]'>Costly for limited value:</h5><p className='text-[14px] opacity-[.8]'>High commission fees disproportionate to the level of service, especially when buyers can now access MLS listings to find homes themselves</p></div>
                   <div><h5 className='font-semibold text-[clamp(16px,1.5vw,20px)]'>Lack of transparency:</h5><p className='text-[14px] opacity-[.8]'>Not transparent about potential conflicts of interest, with agents prioritizing commissions and closing quickly over buyers’ best interests</p></div>
                   <div><h5 className='font-semibold text-[clamp(16px,1.5vw,20px)]'>Inconsistent support:</h5><p className='text-[14px] opacity-[.8]'>At times slow to respond, missing deadlines or overlooking important paperwork, leading to delays or even legal issues.</p></div>
                </div>

                <div className='flex flex-col gap-6 bg-[#FFFFFF] p-6'>
                   <div className='flex gap-4 items-center'><img src='./realStarWay.svg' className='rounded-full'/><h4 className='text-[clamp(16px,1.5vw,20px)] font-bold'>The RealStar way to buy</h4></div>
                   <div><h5 className='font-semibold text-[clamp(16px,1.5vw,20px)]'>Cost-effective:</h5><p className='text-[14px] opacity-[.8]'>Up to 3% of the buyer’s agent commission will be rebated to you at closing, putting money back in your pocket where it belongs.</p></div>
                   <div><h5 className='font-semibold text-[clamp(16px,1.5vw,20px)]'>Trust and transparency:</h5><p className='text-[14px] opacity-[.8]'>AI’s data-driven approach and our flat-fee pricing model guarantee that your interests come first, with no hidden agendas</p></div>
                   <div><h5 className='font-semibold text-[clamp(16px,1.5vw,20px)]'>Clarity throughout the process:</h5><p className='text-[14px] opacity-[.8]'>AI available 24/7 for step-by-step guidance ensures you’re never left in the dark, and licensed agent ready when you need the human touch</p></div>
                </div>
             </div>
        </div>
    </div>
  )
}
