import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faPercent, faTag, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons';

export default function FAQ() {
    return (
        <div className='py-4 px-8 md:px-48'>
            <h1 className='text-[#800080] text-2xl font-bold'>How does it work ?</h1>
            <div className='flex flex-wrap'>
                <div className='flex h-20 my-5 pr-20'>
                    <div className='rounded-full bg-gray-300 w-[72px] h-[72px] mt-2 mr-4'>
                        <FontAwesomeIcon icon={faUsers} className='h-[26px] w-auto ml-[20px] mt-6' />
                    </div>
                    <div className='text-lg w-80'>
                        <h1 className='font-semibold'>Invite your Friends</h1>
                        <p className='font-extralight'>Share the link tutedude.com with your friends</p>
                    </div>
                </div>

                <div className='flex h-20 mt-5 pr-20'>
                    <div className='rounded-full bg-gray-300 w-[72px] h-[72px] mt-2 mr-4'>
                        <FontAwesomeIcon icon={faTag} className='h-[32px] w-auto ml-[24px] mt-[22px]' />
                    </div>
                    <div className='text-lg w-80'>
                        <h1 className='font-semibold'>Friend purchases any course</h1>
                        <p className='font-extralight'>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>

                <div className='flex h-20 mt-5 pr-20'>
                    <div className='rounded-full bg-gray-300 w-[72px] h-[72px] mt-2 mr-4'>
                        <FontAwesomeIcon icon={faIndianRupeeSign} className='h-[32px] w-auto ml-[26px] mt-[22px]' />
                    </div>
                    <div className='text-lg w-80'>
                        <h1 className='font-semibold'>You get ₹ 200 as referral money</h1>
                        <p className='font-extralight'>On total purchase the friend makes, into your wallet</p>
                    </div>
                </div>

                <div className='flex h-20 mt-5 pr-20'>
                    <div className='rounded-full bg-gray-300 w-[72px] h-[72px] mt-2 mr-4'>
                        <FontAwesomeIcon icon={faPercent} className='h-[26px] w-auto ml-[26px] mt-6' />
                    </div>
                    <div className='text-lg w-80'>
                        <h1 className='font-semibold'>You Friend gets ₹ 200 Off</h1>
                        <p className='font-extralight'>On his overall fee on successful purchase using your referral code</p>
                    </div>
                </div>

                <div className='flex h-20 mt-5 pr-20'>
                    <div className='rounded-full bg-gray-300 w-[72px] h-[72px] mt-2 mr-4'>
                        <FontAwesomeIcon icon={faWallet} className='h-[32px] w-auto ml-[20px] mt-[20px]' />
                    </div>
                    <div className='text-lg w-80'>
                        <h1 className='font-semibold'>Transfer money from wallet</h1>
                        <p className='font-extralight'>When the wallet balance reaches ₹200 or more, you can withdraw it</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
