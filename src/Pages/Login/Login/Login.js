import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../images/logo.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorMessage;


    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return (<Loading></Loading>);
    }

    if (error) {
        errorMessage = <p className='text-red-700 font-medium my-2'>{error?.message}</p>
    }

    const handleLogin = event => {

        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    const resetPassword = async () => {

        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password reset email sent');
        }
        else {
            toast('Enter valid email address');
        }

    }

    return (
        <div>
            <section className="h-full bg-green-50">
                <div className="container py-6 px-6 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="block bg-white shadow-lg rounded-lg px-10">
                            <div className=" px-4 md:px-0">
                                <div className="md:p-6 md:mx-6">
                                    <div className="text-center">
                                        <img
                                            className="mx-auto w-48"
                                            src={Logo}
                                            alt="logo"
                                        />
                                        <h4 className="text-xl font-semibold mb-5 pb-3 border-b-2">Go <span className='text-green-600'>Green</span> Groceries Team</h4>
                                    </div>
                                    <form onSubmit={handleLogin}>
                                        <p className="mb-4">Please login to your account</p>

                                        {errorMessage}

                                        <div className="mb-4">
                                            <input
                                                type="email" name='email' ref={emailRef}
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                                id="exampleFormControlInput1"
                                                placeholder="email" required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="password" name='password'
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                                id="exampleFormControlInput1"
                                                placeholder="Password" required
                                            />
                                        </div>
                                        <div className="text-center pt-1 mb-6 pb-1">
                                            <input
                                                className="inline-block px-6 py-3 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                type="submit"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light" value='Login'></input>
                                            <Link onClick={resetPassword} className="text-gray-500 hover:text-green-600" to="/login">Forgot password?</Link>
                                        </div>
                                        <div className="flex items-center justify-between pb-5">
                                            <p className="mb-0 mr-2">Don't have an account?</p>
                                            <Link
                                                type="button"
                                                className="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light" to='/register'> Register Now</Link>
                                        </div>
                                    </form>
                                    <SocialLogin></SocialLogin>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Login;