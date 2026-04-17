import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import GlobalAppointmentPopup from '../Components/GlobalAppointmentPopup';


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