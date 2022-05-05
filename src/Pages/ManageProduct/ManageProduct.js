import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ManageProduct = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    return (
        <div className='mt-10 '>
            <h3 className='text-3xl text-green-600 font-semibold pb-5 mb-5 border-b-2 border-green-600 inline-block uppercase'>Manage Product</h3>
            <div className='flex flex-col justify-center items-center mb-5'>
                <div className='mb-2'>
                    <img src="" alt="" />
                </div>
                <div className="flex justify-center mb-5">
                    <h5 className='text-gray-900 text-lg font-medium pr-3'>Name: </h5>
                    <h5 className='text-gray-900 text-lg font-normal'>something</h5>
                </div>
                <div className="flex justify-center  mb-5">
                    <h5 className='text-gray-900 text-lg font-medium pr-3'>Supplier: </h5>
                    <h5 className='text-gray-900 text-lg font-normal'>something</h5>
                </div>
                <div className="flex justify-center  mb-5">
                    <h5 className='text-gray-900 text-lg font-medium pr-3'>Price: </h5>
                    <h5 className='text-gray-900 text-lg font-normal'>something</h5>
                </div>
                <div className="flex justify-center  mb-5">
                    <h5 className='text-gray-900 text-lg font-medium pr-3'>Quantity: </h5>
                    <h5 className='text-gray-900 text-lg font-normal'>something</h5>
                    <button type="button" className=" inline-block px-5 py-2 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3">Deliver</button>
                </div>
                <div className="flex justify-center  mb-5">
                    <h5 className='text-gray-900 text-lg font-medium pr-3'>Add Stock: </h5>
                    <input
                        type="number"
                        class="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="stock input" />
                    <button type="button" className=" inline-block px-5 py-2 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3">Update</button>
                </div>

            </div>
            <Link to="/manageinventory" type="button" class=" inline-block px-6 py-4 bg-green-600 text-white font-semibold text-lg leading-tight rounded shadow-md hover:bg-green-800 hover:shadow-lg">Manage Inventory</Link>
        </div>
    );
};

export default ManageProduct;