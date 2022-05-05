import React from 'react';

const AddProduct = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-3xl text-green-600 font-semibold pb-5 mb-5 border-b-2 border-green-600 inline-block uppercase'>Add New Product</h3>
            <div className='block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md items-center justify-center'>
                <div className='flex flex-col justify-center items-center mb-5'>
                    <div className="flex justify-center  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Name: </h5>
                        <input
                            type="text"
                            class="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                            placeholder="product name" />
                    </div>
                    <div className="flex justify-center  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Supplier: </h5>
                        <input
                            type="text"
                            class="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="supplier name" />
                    </div>
                    <div className="flex justify-center  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Image: </h5>
                        <input
                            type="text"
                            class="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="image url" />
                    </div>
                    <div className="flex justify-center  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Description: </h5>
                        <textarea
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="product description"
                        ></textarea>
                    </div>
                    <div className="flex justify-center  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Price: </h5>
                        <input
                            type="number"
                            class="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="product price" />
                    </div>
                    <div className="flex justify-center  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Quantity: </h5>
                        <input
                            type="number"
                            class="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="product quantity" />
                    </div>
                    <button type="button" className=" inline-block px-6 py-3 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3">Add Product</button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;