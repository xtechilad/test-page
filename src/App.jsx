import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Referral from './pages/ReferAndEarn';
import FriendsReferred from './pages/FriendsReferred';
import Footer from './components/Footer';
import Links from './components/Links';

export default function App() {
    return (
        <Router>
            <Header />
            <Links />
            <Routes>
                <Route path='/' element={<Referral />} />
                <Route path='/friendslist' element={<FriendsReferred />} />
            </Routes>
            <Footer />
        </Router>
    );
}
