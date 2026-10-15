import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import GlobalAppointmentPopupLoader from '../Components/GlobalAppointmentPopupLoader';

// Popup is only relevant after the page is interactive – defer it out of the
// initial JS bundle so it does not block FCP/LCP or cause early CLS.

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header isTopBar={true}></Header>
            {children}
            <Footer></Footer>
            <GlobalAppointmentPopupLoader />
        </div>
    );
};

export default DefalultLayout;
