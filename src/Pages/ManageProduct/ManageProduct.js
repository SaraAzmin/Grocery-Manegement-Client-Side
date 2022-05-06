import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ManageProduct = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const [newQuantity, setNewQuantity] = useState(product.quantity);
    let valueToAdd = 0;

    useEffect(() => {
        const url = `http://localhost:5000/groceries/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [newQuantity]);


    //for quantity decrease
    const handleDelivery = (id) => {

        const newQuantity = parseInt(product.quantity) - 1;
        const updatedQuantity = { newQuantity };

        // send data to the server
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(data => {
                setNewQuantity(updatedQuantity);
                console.log('success', data);
            })
    }

    //for quantity increase
    const handleUpdate = (id) => {

        const newQuantity = parseInt(product.quantity) + valueToAdd;
        const updatedQuantity = { newQuantity };

        // send data to the server
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(data => {
                setNewQuantity(updatedQuantity);
                console.log('success', data);
            })

    }

    const getInputValue = event => {
        valueToAdd = parseInt(event.target.value);
        //console.log(valueToAdd);
    }

    return (
        <div className='my-10 '>
            <h3 className='text-3xl text-green-600 font-semibold pb-5 mb-3 inline-block uppercase'>Manage Product</h3>
            <div className='flex justify-center items-center mb-5 border-2 lg:w-1/2 mx-auto p-5 rounded-md border-green-500'>
                <div className='mr-5 lg:w-2/5'>
                    <img className='h-[12rem] mx-auto' src={product.img} alt="" />
                </div>
                <div className='lg:w-3/5 justify-start items-start'>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Name: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'>{product.name}</h5>
                    </div>
                    <div className="flex  mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Supplier: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'>{product.supplier}</h5>
                    </div>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Price: </h5>
                        <h5 className='text-gray-900 text-lg font-normal'>${product.price}</h5>
                    </div>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Quantity: </h5>
                        <h5 className='text-gray-900 text-lg font-normal' name='quantity'>{product.quantity}</h5>
                        <button type="button" className=" inline-block px-5 py-2 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3" onClick={() => handleDelivery(product._id)}>Deliver</button>
                    </div>
                    <div className="flex mb-5">
                        <h5 className='text-gray-900 text-lg font-medium pr-3'>Add Stock: </h5>
                        <input
                            type="number"
                            className="form-control px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="stock input" name='valueAdd' onChange={getInputValue} />
                        <button type="button" className=" inline-block px-5 py-2 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3" onClick={() => handleUpdate(product._id)}>Update</button>
                    </div>
                </div>

            </div>
            <Link to="/manageinventory" type="button" className=" inline-block px-6 py-4 bg-green-600 text-white font-semibold text-lg leading-tight rounded shadow-md hover:bg-green-800 hover:shadow-lg">Manage Inventory</Link>
        </div>
    );
};

export default ManageProduct;