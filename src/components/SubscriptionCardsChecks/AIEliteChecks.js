import React from "react";
export default function AIEliteChecks() {
    return (
        <div className='py-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Everything in AI-Core plus</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Up to 4 guided home showings with licensed agent</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Up to 2 home offers</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Inspection review and assistance</label>
            </div>
        </div>
    );
};