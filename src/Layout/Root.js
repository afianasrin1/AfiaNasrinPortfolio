import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div >
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <Navbar />
          <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;