import React from 'react';
import error from "../../assets/Image/error.avif"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={error} alt="" />
            <Link to="/" className='btn text-center'>Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;