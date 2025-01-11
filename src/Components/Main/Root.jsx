import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='bg-[#302E2F]'>
            <Navber></Navber>
            <div className='pt-28'>
            <Outlet></Outlet>
 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;