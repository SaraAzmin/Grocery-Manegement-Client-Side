import React from 'react';
import Google from '../../../images/google.png';

const SocialLogin = () => {
    return (
        <div>
            <div
                className="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-2 mb-0">OR</p>
            </div>

            <div>
                <button className="px-7 py-3 text-green-600 border-green-600 border-2 bg-white font-medium text-sm uppercase rounded shadow-md w-full flex justify-center items-center my-3">
                    {/* <!-- google --> */}
                    <img className="w-4 h-4 mr-2" src={Google} alt="" />
                    <span>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;