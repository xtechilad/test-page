import React from 'react';

export default function ReferHistory() {
    return (
        <div className='md:py-8 px-8 md:px-48 md:flex'>
            <div className='bg-white md:w-1/2 rounded-xl'>
                <div className='mt-4 flex flex-wrap md:flex-nowrap py-4 md:py-0'>
                    <div className='w-1/3 ml-6 mr-8'>
                        <div>
                            <h3 className='balance-title'>Referral Earning</h3>
                        </div>
                        <div>
                            <h2 className='balance'>₹ 5,000</h2>
                        </div>
                    </div>
                    <div className='w-1/3 mx-6 ml-auto'>
                        <div>
                            <h3 className='balance-title'>Total Referrals</h3>
                        </div>
                        <div>
                            <h2 className='balance'>25</h2>
                        </div>
                    </div>
                    <div className='w-1/3 mx-6 mt-4 md:mt-0 md:ml-8'>
                        <div>
                            <h3 className='md:pl-[12px] balance-title'>Wallet Balance</h3>
                        </div>
                        <div>
                            <h2 className='md:pl-[12px] balance'>₹ 3,000</h2>
                        </div>
                    </div>
                    <div className='text-center block md:hidden ml-auto mr-6'>
                        <button className='h-[2.5rem] bg-[#800080] text-white rounded-full px-4 mt-8'>Withdraw Balance</button>
                    </div>
                </div>
                <div className='text-center my-8 hidden md:block'>
                    <button className='w-1/3 h-[2.5rem] bg-[#800080] text-white rounded-full'>Withdraw Balance</button>
                </div>
            </div>

            <div className='md:ml-28'>
                <h1 className='text-[#800080] text-2xl font-bold mt-8 md:mt-0'>Your Referral Code</h1>
                <button className='referral-code'>EDCH5<span>4</span></button>
            </div>
        </div>
    );
}
