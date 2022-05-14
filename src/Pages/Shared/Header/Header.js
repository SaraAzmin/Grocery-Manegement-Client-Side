import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav
                className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button
                        className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                    <div className="w-full open navbar-collapse lg:flex lg:justify-around items-center p-4" id="navbarSupportedContent">
                        <div className=''>
                            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                                <li className="nav-item p-2">
                                    <Link className="nav-link text-white" to="/">Home</Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <Link className="text-2xl text-white pr-2 font-semibold" to="/">Go <span className='text-green-500'>Green</span> Groceries</Link>
                        </div>
                        <div>
                            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                                {
                                    user && <>
                                        <li className="nav-item p-2">
                                            <Link
                                                className="nav-link text-white"
                                                to="/addproduct"
                                            >Add</Link>
                                        </li>
                                        <li className="nav-item p-2">
                                            <Link
                                                className="nav-link text-white"
                                                to="/manageinventory"
                                            >Manage</Link>
                                        </li>
                                        <li className="nav-item p-2">
                                            <Link
                                                className="nav-link text-white"
                                                to="/myitems"
                                            >My Items</Link>
                                        </li>
                                    </>
                                }
                                <li className="nav-item p-2">
                                    <Link className="nav-link text-white" to="/register">Register</Link>
                                </li>
                                <li className="nav-item p-2">
                                    {
                                        user ? <Link onClick={handleLogout}
                                            className="nav-link text-white bg-green-600 p-2"
                                            to="/home">Log Out</Link> :
                                            <Link
                                                className="nav-link text-white"
                                                to="/login"
                                            >Login</Link>
                                    }

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;