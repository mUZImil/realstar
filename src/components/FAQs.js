import {React,useState} from 'react'

export default function FAQs({questions}) {
    const[rotate, setRotate] = useState(true); 

    return (
      <div className={`py-6 px-3 transition-[.3] rounded-xl ${rotate?'bg-transparent':'bg-[#f8f7f5]'}`}>
          <details>
           <summary onClick={()=>setRotate(!rotate)} className='cursor-pointer flex justify-between flex-row-reverse list-none'><img src='./arrow.svg' className={` ${rotate?'rotate-180 opacity-[.6]':'rotate-0 opacity-[1]'}`}/><h4 className='font-semibold'>{questions}</h4></summary> 
            <p className='opacity-[.8] pt-3'>A useful tool to calculate your estimated home renovation costs Just follow a few steps to get an estimate of your remodel, addition, or expansion cost in minutes.</p>
          </details>
      </div>
  )
}
