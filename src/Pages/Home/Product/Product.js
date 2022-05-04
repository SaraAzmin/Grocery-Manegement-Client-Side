import React from 'react';

const Product = ({ product }) => {

    const { _id, name, img, price, quantity, description, supplier, email } = product;

    return (
        <div>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-xl bg-white max-w-sm">
                    <img class="rounded-t-lg h-[12rem] mx-auto " src={img} alt="" />
                    <div class="p-5 bg-green-50">
                        <h5 class="text-gray-900 text-xl font-semibold uppercase font-serif mb-4 pb-3 border-b-2 border-green-600">{name}</h5>
                        <h5 class="text-gray-900 text-lg font-semibold font-serif mb-2">Supplier: <span className=' text-green-600'>{supplier}</span> </h5>
                        <p class="text-gray-600 text-base mb-4 text-justify">
                            {description}
                        </p>
                        <div class="flex justify-between mb-4 py-1 border-y-2">
                            <h5 className='text-gray-900 text-lg font-medium'>Price: <span className=' text-green-600'>${price}</span></h5>
                            <h5 className='text-gray-900 text-lg font-medium'>Quantity: <span className=' text-green-600'>{quantity}</span></h5>
                        </div>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out">Manage Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;