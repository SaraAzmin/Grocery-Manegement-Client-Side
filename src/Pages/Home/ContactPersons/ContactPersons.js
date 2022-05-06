import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactPersons = () => {
    return (
        <div className='bg-green-500'>
            <div className='mx-10 md:mx-20 pb-6'>
                <div class="container px-6 mx-auto">
                    <section class="mb-20 text-gray-800 text-center">
                        <h2 class="text-3xl font-bold py-10">Contact the <u class="text-white uppercase">team</u></h2>
                        <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
                            <div class="mb-20 md:mb-0">
                                <div class="rounded-lg shadow-lg h-full block bg-white">
                                    <div class="flex justify-center">
                                        <div class="flex justify-center">
                                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="h-[12rem] rounded-full mx-auto shadow-lg mt-3" alt="" />
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <h5 class="text-xl font-serif font-bold mb-1">Marta Smith</h5>
                                        <p class="mb-4 text-green-600 font-medium border-b-2 pb-3 border-green-100">Customer Experience Lead</p>
                                        <div className='w-1/2 mx-auto'>
                                            <p><FontAwesomeIcon icon={faMobile} className='pr-2' /> 01992288372</p>
                                            <p><FontAwesomeIcon icon={faEnvelope} className='pr-2' /> marta@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-20 md:mb-0">
                                <div class="rounded-lg shadow-lg h-full block bg-white">
                                    <div class="flex justify-center">
                                        <div class="flex justify-center" >
                                            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="h-[12rem] rounded-full mx-auto shadow-lg mt-3" alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <h5 class="text-xl font-serif font-bold mb-1">Darren Randolph</h5>
                                        <p class="mb-4 text-green-600 font-medium border-b-2 pb-3 border-green-100">Marketing expert</p>
                                        <div className='w-1/2 mx-auto'>
                                            <p><FontAwesomeIcon icon={faMobile} className='pr-2' /> 01937288372</p>
                                            <p><FontAwesomeIcon icon={faEnvelope} className='pr-2' /> Darren@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-20 md:mb-0">
                                <div class="rounded-lg shadow-lg h-full block bg-white">
                                    <div class="flex justify-center">
                                        <div class="flex justify-center">
                                            <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" class="h-[12rem] rounded-full mx-auto shadow-lg mt-3" alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <h5 class="text-xl font-serif font-bold mb-1">Ayat Black</h5>
                                        <p class="mb-4 text-green-600 font-medium border-b-2 pb-3 border-green-100">Manager</p>
                                        <div className='w-1/2 mx-auto'>
                                            <p><FontAwesomeIcon icon={faMobile} className='pr-2' /> 01992029272</p>
                                            <p><FontAwesomeIcon icon={faEnvelope} className='pr-2' /> Ayat@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContactPersons;