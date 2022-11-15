import React from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
    return (
        <div className='px-8 md:px-48'>
            <h4 className='py-5 md:w-1/2 text-[0.8rem] md:text-[1rem] text-[#800080]'>
                UI/UX &#62;<Link to='/'> Refer & Earn</Link>
            </h4>
        </div>
    );
}
