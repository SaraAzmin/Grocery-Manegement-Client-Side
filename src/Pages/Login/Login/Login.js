import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div>
            <section class="h-full bg-green-100">
                <div class="container py-6 px-6 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="block bg-white shadow-lg rounded-lg">
                            <div class=" px-4 md:px-0">
                                <div class="md:p-10 md:mx-6">
                                    <div class="text-center">
                                        <img
                                            class="mx-auto w-48"
                                            src={Logo}
                                            alt="logo"
                                        />
                                        <h4 class="text-xl font-semibold mb-5 pb-1">Go <span className='text-green-600'>Green</span> Groceries Team</h4>
                                    </div>
                                    <form>
                                        <p class="mb-4">Please login to your account</p>
                                        <div class="mb-4">
                                            <input
                                                type="email"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                                id="exampleFormControlInput1"
                                                placeholder="email"
                                            />
                                        </div>
                                        <div class="mb-4">
                                            <input
                                                type="password"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                                id="exampleFormControlInput1"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div class="text-center pt-1 mb-6 pb-1">
                                            <button
                                                class="inline-block px-6 py-3 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                type="button"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                            >
                                                Log in
                                            </button>
                                            <Link class="text-gray-500" to="/">Forgot password?</Link>
                                        </div>
                                        <div class="flex items-center justify-between pb-5">
                                            <p class="mb-0 mr-2">Don't have an account?</p>
                                            <Link
                                                type="button"
                                                class="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light" to='/register'
                                            >
                                                Register Now
                                            </Link>
                                        </div>
                                    </form>
                                    <SocialLogin></SocialLogin>
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