import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

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
                <button type="button" class=" inline-block px-6 py-4 bg-green-600 text-white font-semibold text-lg leading-tight rounded shadow-md hover:bg-green-800 hover:shadow-lg">Manage Inventory</button>
            </div>
        </div>
    );
};

export default Products;