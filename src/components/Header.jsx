import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    return (
        <div className='bg-[#EEEEEE]'>
            <header className='py-1 px-0 md:px-24 flex'>
                <img className='h-[4rem] w-auto ml-2 md:ml-0' src='https://s3.ap-south-1.amazonaws.com/triedge/assets/uploads/position/1595224108_Tutedude.png' alt='Logo' />

                <button className='ml-auto mr-8 text-[#800080] font-bold rounded hidden md:block'>My Assignment</button>
                <button className='mr-8 text-[#800080] font-bold rounded hidden md:block'>Chat with Mentor</button>
                <div className='flex my-auto ml-auto md:ml-0 mr-8 md:mr-0'>
                    <FontAwesomeIcon icon={faCircleUser} className='text-[#800080] h-8 w-auto mr-2 hidden md:block' />
                    <button className='text-white md:text-[#800080] bg-[#800080] md:bg-transparent px-4 py-2 md:px-0 md:py-0 font-light md:font-bold rounded-lg'>
                        ProfileName <FontAwesomeIcon icon={faAngleDown} className='h-4 w-auto ml-[0.25rem]' />
                    </button>
                </div>
            </header>
        </div>
    );
}
