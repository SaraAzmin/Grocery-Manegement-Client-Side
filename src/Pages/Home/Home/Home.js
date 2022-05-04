import React from 'react';
import Footer from '../../Shared/Footer/Footer'
import Banner from '../Banner/Banner';

const Home = () => {
    return (

        <div>
            <Banner></Banner>
            <h1 className='text-7xl'>this is home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;