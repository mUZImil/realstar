import React from 'react'
import Section5TableHeader from '../../components/Section5TableHeader'

function Live({color,status}){
    return(
       <div className='flex gap-2 items-center'>
        <div className={`h-[10px] w-[10px]  rounded-full ${color}`}></div>
        <label>{status}</label>
       </div>
    )
};
export default function SellersSection5() {
  return (
    <div className='px-[8%] overflow-x-scroll pt-10'>
        <h3 className='text-[48px] font-bold text-center max-[1000px]:text-[32px] pb-8'>Comparable properties</h3>
        <div>
            <table className='border border-black [&>*]:border [&>*]:border-[#EDEDED]'>
                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED]'>
                    <th className=''> <div className='w-[170px]'></div></th>
                    <th><Section5TableHeader/></th>
                    <th><Section5TableHeader/></th>
                    <th><Section5TableHeader/></th>
                    <th><Section5TableHeader/></th>
                </tr>
                <tr className='[&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3 '>
                    <td className='font-semibold'>Listing status</td>
                    <td><Live color={'bg-[#00AE49]'} status={'ACTIVE'}/></td>
                    <td><Live color={'bg-[#FD6260]'} status={'CLOSED'}/></td>
                    <td><Live color={'bg-[#FD6260]'} status={'CLOSED'}/></td>
                    <td><Live color={'bg-[#00AE49]'} status={'ACTIVE'}/></td>
                </tr>

                <tr className='[&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>Beds</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                </tr>

                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>Baths</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                </tr>

                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>Garage</td>
                    <td>2 car</td>
                    <td>2 car</td>
                    <td>3 car</td>
                    <td>2 car</td>
                </tr>

                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>Property type</td>
                    <td>Single Family</td>
                    <td>Townhome</td>
                    <td>Single Family</td>
                    <td>Single Family</td>
                </tr>

                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>Year built</td>
                    <td>2018</td>
                    <td>2024</td>
                    <td>2020</td>
                    <td>2022</td>
                </tr>

                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>List price</td>
                    <td>$2,250,000</td>
                    <td>$2,250,000</td>
                    <td>$2,250,000</td>
                    <td>$2,250,000</td>
                </tr>

                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>Price/sqft</td>
                    <td>$552</td>
                    <td>$552</td>
                    <td>$552</td>
                    <td>$552</td>
                </tr>

                <tr className='border-black [&>*]:border [&>*]:border-[#EDEDED] [&>*]:p-3'>
                    <td className='font-semibold'>Adjusted price/sqft</td>
                    <td>552</td>
                    <td>552</td>
                    <td>L560</td>
                    <td>552</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
