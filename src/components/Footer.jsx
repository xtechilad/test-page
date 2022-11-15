import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from './FriendsReferred/List';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const displayCards = () => {
        setIsVisible(true);
    }
    
    return (
        <div className='py-8 md:py-16 px-8 md:px-48'>
            <Link onClick={displayCards} to='/friendslist' className='text-[#800080] font-semibold link'>Friends Who Enrolled</Link>
            {isVisible ? <List /> : null}
            <h1 className='font-semibold mt-6 text-[#800080]'>Terms & Conditions</h1>
        </div>
    );
}
