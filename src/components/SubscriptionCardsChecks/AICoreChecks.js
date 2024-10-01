import React from "react";
export default function AICoreChecks() {
    return (
        <div className='py-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>24/7 AI agent support</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Advanced AI insights and buyer home valuation</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Offer creation, negotiation, and submission</label>
            </div>
            <div className='flex items-center gap-2'>
                <img src='./checked.svg' />
                <label className='text-[14px]'>Closing support</label>
            </div>
        </div>
    );
};