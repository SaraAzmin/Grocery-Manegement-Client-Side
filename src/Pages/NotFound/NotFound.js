import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/404page.jpg';

const NotFound = () => {
    return (
        <div className='mx-10 md:mx-24'>
            <div className='flex'>
                <div className='w-1/2 h-auto'>
                    <img src={Error} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h6 className='center text-3xl font-medium text-green-600 ml-5 mb-10'>We cannot find the page you are looking for!</h6>
                    <Link to="/home" type="button" className=" inline-block px-6 py-4 bg-green-600 text-white font-semibold text-lg leading-tight rounded shadow-md hover:bg-green-800 hover:shadow-lg">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;