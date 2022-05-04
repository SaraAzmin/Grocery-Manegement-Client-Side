import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

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
                <h2 className='text-2xl md:text-4xl pt-5 md:pt-12 font-semibold text-green-600 drop-shadow-2xl uppercase'>Products Available</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 md:py-14'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;