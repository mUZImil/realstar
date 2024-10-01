import React from "react";
export default function AIConciergeChecks() {
    return (
        <div className='py-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Everything in AI- Elite plus</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Up to 10 guided home showings</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Unlimited offers</label>
            </div>
        </div>
    );
};