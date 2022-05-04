import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageProduct = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    return (
        <div>
            <h1>hello: {productId}</h1>
        </div>
    );
};

export default ManageProduct;