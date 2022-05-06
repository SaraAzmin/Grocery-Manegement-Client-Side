import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../../../images/google.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorMessage;

    if (googleUser) {
        navigate('/home');
    }

    if (googleLoading) {
        return (<Loading></Loading>);
    }

    if (googleError) {
        errorMessage = <p className='text-red-700 my-2'>{googleError?.message}</p>
    }


    return (
        <div>
            <div
                className="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-2 mb-0">OR</p>
            </div>

            {errorMessage}

            <div>
                <button onClick={() => signInWithGoogle()} className="px-7 py-3 text-green-600 border-green-600 border-2 bg-white font-medium text-sm uppercase rounded shadow-md w-full flex justify-center items-center my-3">
                    <img className="w-4 h-4 mr-2" src={Google} alt="" />
                    <span>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;