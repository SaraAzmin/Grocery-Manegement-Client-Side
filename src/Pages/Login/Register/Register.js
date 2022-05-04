import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Logo from '../../../images/logo.jpg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }


    const handleRegistration = async (event) => {

        event.preventDefault();

        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        alert('Profile Registered!');

    }

    return (
        <div>
            <div>
                <section className="h-full bg-green-50">
                    <div className="container py-6 px-6 h-full">
                        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className=" px-4 md:px-0">
                                    <div className="md:p-10 md:mx-6">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src={Logo}
                                                alt="logo"
                                            />
                                            <h4 className="text-xl font-semibold mb-5 pb-1">Go <span classNameName='text-green-600'>Green</span> Groceries Team</h4>
                                        </div>
                                        <form onSubmit={handleRegistration}>
                                            <p className="mb-4">Please create your account</p>
                                            <div className="mb-4">
                                                <input
                                                    type="text" name='name'
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                                    id="exampleFormControlInput1"
                                                    placeholder="name" required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    type="email" name='email'
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
                                                    data-mdb-ripple-color="light" value='Register'
                                                >
                                                </input>
                                            </div>
                                            <div className="flex items-center justify-between pb-5">
                                                <p className="mb-0 mr-2">Already have an account?</p>
                                                <Link
                                                    type="button"
                                                    className="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light" to='/login'>
                                                    Login here
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
        </div>
    );
};

export default Register;