import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;