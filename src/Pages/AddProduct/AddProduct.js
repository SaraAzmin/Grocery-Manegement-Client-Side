import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = "http://localhost:5000/product";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast("New Product added!")
                reset();
            })
    };

    return (
        <div className='mt-10'>
            <h3 className='text-3xl text-green-600 font-semibold pb-5 mb-5 border-b-2 border-green-600 inline-block uppercase'>Add New Product</h3>
            <div className='block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md items-center justify-center'>
                <div className='flex flex-col justify-center items-center mb-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-center mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Name: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                placeholder="product name" {...register("name", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Supplier: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="supplier name" {...register("supplier", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Image: </h5>
                            <input
                                type="text"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="image url" {...register("img", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Description: </h5>
                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="product description" {...register("description")}
                            ></textarea>
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Price: </h5>
                            <input
                                type="number"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="product price" {...register("price", { required: true })} />
                        </div>
                        <div className="flex justify-center  mb-5">
                            <h5 className='text-gray-900 text-lg font-medium pr-3'>Quantity: </h5>
                            <input
                                type="number"
                                className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="product quantity" {...register("quantity", { required: true })} />
                        </div>
                        <input type='email' defaultValue={user.email} className='text-gray-900 text-lg font-normal hidden' {...register("email", { required: true })} />
                        <input type="submit" className=" inline-block px-6 py-3 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3" value="Add Product"></input>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default AddProduct;