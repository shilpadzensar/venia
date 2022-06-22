import React from 'react';
import './Banner.scss';
import BannerImg from './images/banner.webp';



function Banner() {

    return (
        <div className="container banner-wrapper">

            <div className="img-banner">
                <img src={BannerImg} alt="banner image" ></img>
            </div>

            <div className="content-banner">
                <h2>Women's <span className="show-xs">Outerwear</span></h2>

                <div className="underline">

                </div>
            </div>

        </div>
    );
}


export default Banner;