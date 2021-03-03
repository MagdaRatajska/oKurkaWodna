import React from "react";
import './scss/main.scss'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from 'src/images/image1.jpg'
import image2 from 'src/images/image2.jpg'
import image3 from 'src/images/image3.jpg'
import image4 from 'src/images/image4.jpg'

function Slider() {
    return (
        <div className="slider">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt=""/>
                <img src={image2} className="sliderimg" alt=""/>
                <img src={image3} className="sliderimg" alt=""/>
                <img src={image4} className="sliderimg" alt=""/>
            </AliceCarousel>
        </div>
    );
}

export default Slider;