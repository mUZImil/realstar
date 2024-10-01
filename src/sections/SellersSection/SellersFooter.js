import React from 'react'

export default function SellersFooter() {
   return (
      <div className='pt-52 max-[900px]:pt-16 relative'>
         <div className='footer-head absolute top-[8%] left-[8%] p-10 w-[85%] m-auto rounded-2xl bg-[#AFDDE5] flex gap-4 flex-col items-center justify-center'>
            <h2 className='w-[clamp(300px,60%,60%)] font-bold text-[clamp(22px,2.5vw,46px)] text-center'>Get this report and learn how RealStar can save you thousands</h2>
            <button className='font-bold px-4 py-3 rounded-full bg-[#0C4C6B] text-white text-[14px]'>View more</button>
         </div>

         <div className='bg-[#0C4C6B] max-[900px]:px-[4%] px-[8%] pt-44 max-[900px]:pt-16 text-white'>
            <div className='div3-cont flex flex-row-reverse justify-between'>

               <div className='div2-cont flex justify-around w-[60%]'>
                  <div className='div1 [&>*]:block [&>*]:pb-2 text-[18px] font-semibold'>
                     <button className=''>Buy</button>
                     <button className=''>Sell</button>
                     <button className=''>Home Value Estimator</button>
                     <button className=''>Blog</button>
                     <button className=''>Book a call</button>
                     <button className=''>Contact us</button>
                  </div>
                  <div className='div2'>
                     <label className='font-semibold'>Contact</label>
                     <div className='py-4 flex flex-col gap-2 text-[14px]'>
                        <p>607.379.9711</p>
                        <p>hello@realstar.ai</p>
                        <p>12721 Bel-Red Rd. #240-4</p>
                        <p>Bellevue, WA, 98005</p>
                     </div>
                  </div>
               </div>

               <div className='div3 flex flex-col justify-between w-[33%]'>
                  <img src='./logo.svg' className='w-[140px]' />
                  <p>We’re building the word’s first AI real estate agent to help people buy and sell homes without paying commissions.</p>
                  <img src='./linkedinLogo.svg' className='w-[30px] h-[30px]' />
               </div>

              
            </div>

            <div className=''>
                  <div className='py-10 w-full'>
                     <p>Disclaimer: RealStar AI is currently in development and not yet licensed to directly conduct real estate transactions. RealStar AI is not a law firm either. We partner and refer you to a licensed real estate broker to facilitate your home sale or purchase. Our technology will be used to assist in the transaction, but all legal processes are carried out by our broker partners in compliance with real estate laws.</p>
                  </div>

                  <div className='footer-foot py-6 border-t border-[white] border-opacity-[.2] flex justify-between'>
                     <div className='flex gap-2'>
                        <p>RealStar AI Corp</p>
                        <img src='./dot.svg' />
                        <p>Copyright © 2024</p>
                     </div>

                     <div className='flex gap-6'>
                        <button>Privacy Policy</button>
                        <button>Cookie Policy</button>
                        <button>Terms of Use</button>
                     </div>
                  </div>
               </div>

         </div>
      </div>
   )
}
