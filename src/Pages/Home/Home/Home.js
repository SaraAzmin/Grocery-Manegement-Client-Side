import React from 'react';
import Footer from '../../Shared/Footer/Footer'
import Banner from '../Banner/Banner';
import LowStockProducts from '../LowStockProducts/LowStockProducts';
import Products from '../Products/Products';

const Home = () => {
    return (

        <div>
            <Banner></Banner>
            <Products></Products>
            <LowStockProducts></LowStockProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;