import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageInventory = () => {

    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    const myItems = products.filter(product => product.email === user.email);

    useEffect(() => {
        fetch('https://grocery-management-server-side.vercel.app/groceries')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = (id) => {

        const isSure = window.confirm('Are you sure you want to delete the product?');

        if (isSure) {
            const url = `https://grocery-management-server-side.vercel.app/groceries/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': "application/json"
                }
            })
                .then(res => res.json())
                .then(data => toast("Selected product deleted!"));

            const newProducts = products.filter(product => product._id !== id);
            setProducts(newProducts);
        }
    }

    return (
        <div>
            <div className='mx-10 md:mx-20 mb-10' >
                <h2 className='text-2xl md:text-4xl pt-5 md:pt-10 font-semibold text-green-600 drop-shadow-2xl uppercase mb-5'>My Items</h2>
                <Link to="/addproduct" type="button" className=" inline-block px-5 py-3 mb-5 bg-green-600 text-white font-semibold text-lg leading-tight rounded shadow-md hover:bg-green-800 hover:shadow-lg">Add Product</Link>
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
                                {
                                    myItems.map(product => <tbody>
                                        <tr className="bg-white border-b border-green-500 transition duration-300 ease-in-out hover:bg-green-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{myItems.indexOf(product)}</td>
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
                                                <button onClick={() => handleDelete(product._id)} className='hover:fill-red-700'><FontAwesomeIcon icon={faTrash} /></button>
                                            </td>
                                        </tr>
                                    </tbody>)
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageInventory;