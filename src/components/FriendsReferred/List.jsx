import React from 'react';

export default function List() {
    return (
        <div className='md:flex mt-6 mb-16 md:overflow-x-hidden'>
            <div className='card h-auto w-full md:w-[24rem] shrink-0 p-[20px] text-white rounded-2xl mr-6 bg-gradient-to-r from-[#FF864C] to-[#800080]'>
                <h1 className='font-bold inline-block'>Gaurav Khanna</h1>
                <h2 className='text-[14px] float-right'>14 Sep, 2022</h2>
                <h4 className='text-[14px] mt-2'>Courses Enrolled(6)</h4>
                <div className='flex flex-wrap'>
                    <h4 className='skill'>UI/UX</h4>
                    <h4 className='skill'>Photoshop</h4>
                    <h4 className='skill'>Illustrator</h4>
                    <h4 className='skill'>Python</h4>
                    <h4 className='skill'>MERN</h4>
                    <h4 className='skill'>Java</h4>
                </div>
                <div className='flex mt-6'>
                    <h2 className='text-[14px] my-auto'>Referral Amount</h2>
                    <h4 className='text-xl ml-2'>₹185</h4>
                </div>
            </div>

            <div className='card mt-8 md:mt-0 h-auto w-full md:w-[24rem] shrink-0 p-[20px] text-white rounded-2xl mr-6 bg-gradient-to-r from-[#FF864C] to-[#800080]'>
                <h1 className='font-bold inline-block'>Sahil Mistry</h1>
                <h2 className='text-[14px] float-right'>15 Sep, 2022</h2>
                <h4 className='text-[14px] mt-2'>Courses Enrolled(6)</h4>
                <div className='flex flex-wrap'>
                    <h4 className='skill'>UI/UX</h4>
                    <h4 className='skill'>Photoshop</h4>
                    <h4 className='skill'>Illustrator</h4>
                    <h4 className='skill'>Python</h4>
                    <h4 className='skill'>MERN</h4>
                    <h4 className='skill'>Java</h4>
                    <h4 className='skill'>C++</h4>
                </div>
                <div className='flex mt-6'>
                    <h2 className='text-[14px] my-auto'>Referral Amount</h2>
                    <h4 className='text-xl ml-2'>₹485</h4>
                </div>
            </div>

            <div className='card mt-8 md:mt-0 h-auto w-full md:w-[24rem] shrink-0 p-[20px] text-white rounded-2xl mr-6 bg-gradient-to-r from-[#FF864C] to-[#800080]'>
                <h1 className='font-bold inline-block'>Maya Ahuja</h1>
                <h2 className='text-[14px] float-right'>18 Sep, 2022</h2>
                <h4 className='text-[14px] mt-2'>Courses Enrolled(6)</h4>
                <div className='flex flex-wrap'>
                    <h4 className='skill'>UI/UX</h4>
                    <h4 className='skill'>Photoshop</h4>
                    <h4 className='skill'>Illustrator</h4>
                    <h4 className='skill'>Python</h4>
                    <h4 className='skill'>MERN</h4>
                    <h4 className='skill'>Java</h4>
                    <h4 className='skill'>C++</h4>
                </div>
                <div className='flex mt-6'>
                    <h2 className='text-[14px] my-auto'>Referral Amount</h2>
                    <h4 className='text-xl ml-2'>₹2170</h4>
                </div>
            </div>
        </div>
    );
}
