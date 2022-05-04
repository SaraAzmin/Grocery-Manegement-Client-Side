import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, img, price, quantity, description, supplier, email } = product;

    const navigate = useNavigate();

    const navigateToManageProduct = (id) => {
        navigate("/inventory/" + id);
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="rounded-lg shadow-xl bg-white max-w-sm">
                    <img className="rounded-t-lg h-[12rem] mx-auto " src={img} alt="" />
                    <div className="p-5 bg-green-50">
                        <h5 className="text-gray-900 text-xl font-semibold uppercase font-serif mb-4 pb-3 border-b-2 border-green-600">{name}</h5>
                        <h5 className="text-gray-900 text-lg font-semibold font-serif mb-2">Supplier: <span className=' text-green-600'>{supplier}</span> </h5>
                        <p className="text-gray-600 text-base mb-4 text-justify">
                            {description}
                        </p>
                        <div className="flex justify-between mb-4 py-1 border-y-2">
                            <h5 className='text-gray-900 text-lg font-medium'>Price: <span className=' text-green-600'>${price}</span></h5>
                            <h5 className='text-gray-900 text-lg font-medium'>Quantity: <span className=' text-green-600'>{quantity}</span></h5>
                        </div>
                        <button type="button" onClick={() => navigateToManageProduct(_id)} className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out">Manage Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;