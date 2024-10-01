import {React,useState} from 'react'
import '../../App.css';
import {Link} from 'react-router-dom';
export default function BuyersSection1() {
            const[navOpen, setNavOpen] = useState(true); 


    return (
        <div className='relative h-[100svh] overflow-hidden'>
            {/* <div className='overflow-hidden'> */}
            <img src='./mainPoster.jpg' className={`bgPoster absolute min-h-full  min-w-[700px] min-h-full max-[550px]:left-[-30%] `}/>
            {/* </div> */}
            <div className='relative text-[white] h-full m-auto '>

                <nav>
                    <div className='navbar flex justify-between items-center py-6 max-[899px]:bg-[#212121] px-4 md:px-[10%]'>
                        <img src='./logo.svg' className='max-[500px]:w-[40%]' />
                        <ul className='hidden min-[900px]:flex gap-3 list-none'>
                        <li><Link to='/'>Buy</Link></li>
                        <li> <Link to='/sell'>Sell</Link></li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <div className='hidden min-[900px]:flex gap-5 [&>*]:py-2 [&>*]:px-4 [&>*]:rounded-full'>
                            <button className='border border-[white] hover:bg-[#00E9D3]'>Value your home</button>
                            <button className='bg-[#00E9D3]'>Book a call</button>
                        </div>

                        <div className=' relative min-[899px]:hidden'>
                            <button onClick={()=>setNavOpen(!navOpen)}><img src='./bars.svg' /></button>
                        </div>
                    </div>
                </nav>

                <div className={`absolute w-[100vw] h-full bg-[#1E1E1E] p-8 flex flex-col gap-[3rem] transition-[.5s] ease-in-outout ${navOpen? 'translate-y-[-150%]' : 'translate-y-[0]'}`}>
                                <ul className='flex flex-col justify-between items-center gap-[2rem] list-none'>
                                <li><Link to='/'>Buy</Link></li>
                                <li> <Link to='/sell'>Sell</Link></li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                                <div className='flex flex-col items-center gap-5 [&>*]:py-2 [&>*]:px-4 [&>*]:rounded-full [&>*]:w-[95%] [&>*]:max-w-[330px]'>
                                    <button className='border border-[white] hover:bg-[#00E9D3]'>Value your home</button>
                                    <button className='bg-[#00E9D3]'>&nbsp;&nbsp;&nbsp;Book a call&nbsp;&nbsp;&nbsp;</button>
                                </div>
                </div>

                <div className='-bg-[brown] h-[calc(100svh-48px)] flex flex-col gap-4 justify-center items-center text-center'>
                    <label className='w-[180px] min-[400px]:w-[50%] text-[clamp(16px,2vw,36px)]'>Introducing the world’s first AI real estate agent</label>
                    <h1 className='text-[clamp(26px,5vw,80px)] px-[5%] font-semibold'>Buy homes for 0% commission</h1>
                    <label className='w-[315px]- w-[70%] text-[clamp(16px,2vw,36px)]'>Artificial and human intelligence by your side for one of life's most important decisions.</label>
                    <div className='flex gap-5 [&>*]:py-3 [&>*]:px-6 [&>*]:rounded-full'>
                        <button className='border border-[white] hover:bg-[#00E9D3]'>Value your home</button>
                        <button className='bg-[#00E9D3]'>Book a call</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
