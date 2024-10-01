import {React,useState} from 'react'
import {Link} from 'react-router-dom';
export default function SellersNavbar() {
    const[navOpen, setNavOpen] = useState(true); 
    return (
        <div>
            <nav>
                <div className='navbar flex justify-between items-center py-6 max-[899px]:bg-[#ededed] px-4 md:px-[10%]'>
                    <img src='./BuyersNavbarLogo.svg' className='max-[500px]:w-[40%]' />
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
                        <button onClick={() => setNavOpen(!navOpen)}><img src='./bars.svg' className='invert font-bold'/></button>
                    </div>
                </div>
            </nav>

            <div className={`absolute z-[5] w-[100vw] h-full bg-[#1E1E1E] text-[white] p-8 flex flex-col gap-[3rem] transition-[.5s] ease-in-outout ${navOpen ? 'translate-y-[-150%]' : 'translate-y-[0]'}`}>
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

        </div>
    )
}
