import {React,useState} from 'react'

export default function HowToDetails({summary}) {
    let[image, setImage] = useState(false);
  return (
    <div className='py-8 px-3 border-y border-opacity-[.7]'>
        <details>
         <summary onClick={()=>setImage(!image)} className='cursor-pointer flex justify-between flex-row-reverse list-none'><img src={image?'./minusSign.svg':'./plusSign.svg'}/><h4 className='font-semibold'>{summary}</h4></summary> 
          <p className='opacity-[.8] pt-3'>A useful tool to calculate your estimated home renovation costs Just follow a few steps to get an estimate of your remodel, addition, or expansion cost in minutes.</p>
        </details>
    </div>
  )
}
