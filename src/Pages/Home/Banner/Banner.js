import React from 'react';
import BannerImg from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel">
                <div className="carousel-inner relative w-full lg:h-screen overflow-hidden">

                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={BannerImg}
                            className="block w-full"
                            alt="Woman with groceries"
                        />
                        <div className="carousel-caption hidden md:block absolute text-center bg-black lg:mb-64">
                            <h5 className="text-xl md:text-2xl lg:text-4xl uppercase text-green-500 font-semibold">A promise for fresh food!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;