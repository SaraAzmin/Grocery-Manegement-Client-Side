import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ProductsTable = ({ product, handleDelete }) => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full border-2 border-green-500 border-double">
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
                            <tbody>
                                <tr className="bg-white border-b border-green-500 transition duration-300 ease-in-out hover:bg-green-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
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
                                        <button onClick={() => handleDelete(product)} className='hover:fill-red-700'><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            </tbody>)
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsTable;