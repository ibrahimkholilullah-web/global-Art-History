import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto bg-[#302E2F] text-white'>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-232px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;