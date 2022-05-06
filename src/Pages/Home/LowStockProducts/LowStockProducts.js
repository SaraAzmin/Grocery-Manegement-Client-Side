import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LowStockProducts = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const lowStock = products.filter(product => product.quantity < 20);

    useEffect(() => {
        fetch('https://evening-earth-39289.herokuapp.com/groceries')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleRestock = id => {
        navigate("/inventory/" + id);
    }

    return (
        <div className='bg-green-50'>
            <div className='mx-10 md:mx-24 py-5 md:py-10'>
                <h2 className='text-xl md:text-3xl pt-2 md:pt-5 font-bold text-green-900 drop-shadow-2xl uppercase'>Products lower in stock</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 py-5 md:py-10'>
                    {
                        lowStock.map(product =>
                            <div className='flex bg-white items-center p-5 rounded-md outline-2 outline-green-600 outline-dotted'>
                                <div className='flex  flex-col justify-start items-start w-2/3'>
                                    <h5 className='text-gray-900 text-base font-medium pr-3 pb-2 font-sans'>Product: {product.name}</h5>
                                    <h5 className='text-gray-900 text-base font-medium pr-3 pb-2 font-sans'>Quanity: <span className='text-red-700 text-lg font-semibold'>{product.quantity}</span> </h5>
                                </div>
                                <div className='flex justify-end w-1/3'>
                                    <button type="button" className="inline-block px-5 py-3 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg ml-3" onClick={() => handleRestock(product._id)}>Restock</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default LowStockProducts;