import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const GlobalAppointmentPopup = dynamic(
    () => import('../Components/GlobalAppointmentPopup'),
    { ssr: false }
);

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
           <Header></Header>
            {children}
            <Footer></Footer>
            <GlobalAppointmentPopup />
        </div>
    );
};

export default DefalultLayout;
