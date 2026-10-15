import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import GlobalAppointmentPopupLoader from '../Components/GlobalAppointmentPopupLoader';


const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
           <Header></Header>
            {children}
            <Footer></Footer>
            <GlobalAppointmentPopupLoader />
        </div>
    );
};

export default DefalultLayout;
