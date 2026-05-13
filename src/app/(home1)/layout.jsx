import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

// Popup is only relevant after the page is interactive – defer it out of the
// initial JS bundle so it does not block FCP/LCP or cause early CLS.
const GlobalAppointmentPopup = dynamic(
    () => import('../Components/GlobalAppointmentPopup'),
    { ssr: false }
);

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header isTopBar={true}></Header>
            {children}
            <Footer></Footer>
            <GlobalAppointmentPopup />
        </div>
    );
};

export default DefalultLayout;