import React from 'react';

export default function Overview() {
    return (
        <div className='px-8 md:px-48 mt-4 flex'>
            <div>
                <p className='text-[#800080] font-extralight'>Your Referral Code</p>
                <button className='refer-code'>EDCH5<span>4</span></button>
            </div>

            <div className='ml-auto'>
                <div className='px-[12px] py-4 rounded-2xl shadow-lg'>
                    <h3>Wallet Balance</h3>
                    <h2 className='font-semibold'>₹ 500</h2>
                </div>
            </div>
        </div>
    );
}
