import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div id='services'>
            <div className='mx-10 md:mx-20 mb-10' >
                <h2 className='text-2xl md:text-4xl pt-5 md:pt-10 font-semibold text-green-600 drop-shadow-2xl uppercase mb-10'>Products Available</h2>
                <div className="flex flex-col">
                    <div className="">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b border-green-500">
                                        <tr>
                                            <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-center">
                                                Serial
                                            </th>
                                            <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-center">
                                                Name
                                            </th>
                                            <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-center">
                                                Supplier
                                            </th>
                                            <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-center">
                                                Price
                                            </th>
                                            <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-center">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-lg font-semibold text-gray-900 px-6 py-4 text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        products.map(product => <tbody>
                                            <tr className="bg-white border-b border-green-500 transition duration-300 ease-in-out hover:bg-green-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{products.indexOf(product)}</td>
                                                <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                                    {product.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                                    {product.supplier}
                                                </td>
                                                <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                                    ${product.price}
                                                </td>
                                                <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                                    {product.quantity}
                                                </td>
                                                <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                                    <button><FontAwesomeIcon icon={faTrash} /></button>
                                                </td>
                                            </tr>
                                        </tbody>)
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;