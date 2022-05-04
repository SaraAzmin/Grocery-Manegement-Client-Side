import React from 'react';
import BannerImg from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div
                id="carouselDarkVariant"
                class="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">

                    <div class="carousel-item active relative float-left w-full">
                        <img
                            src={BannerImg}
                            class="block w-full"
                            alt="Woman with groceries"
                        />
                        <div class="carousel-caption hidden md:block absolute text-center bg-black">
                            <h5 class="text-xl md:text-2xl lg:text-4xl uppercase text-green-500 font-semibold">A promise for fresh food!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;