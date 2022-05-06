import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    const sixProducts = products.slice(0, 6);

    useEffect(() => {
        fetch('https://evening-earth-39289.herokuapp.com/groceries')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div id='products'>
            <div className='mx-10 md:mx-20 mb-10' >
                <h2 className='text-2xl md:text-4xl pt-5 md:pt-12 font-semibold text-green-900 drop-shadow-2xl uppercase'>Products Available</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 md:py-10'>
                    {
                        sixProducts.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <Link to="/manageinventory" type="button" className=" inline-block px-6 py-4 bg-green-600 text-white font-semibold text-lg leading-tight rounded shadow-md hover:bg-green-800 hover:shadow-lg">Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Products;