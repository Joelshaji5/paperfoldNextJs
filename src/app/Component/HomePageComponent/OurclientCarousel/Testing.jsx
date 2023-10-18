import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';
import "../../../Style/Testing.css"

const Testing = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    cssEase: 'linear',
  });
  // Your component logic
  return (
    <div>
      <Slider {...settings} >

      <div className="logoStyle">
    <img  src="/Scoobies.png" />
    </div>

    <div className="logoStyle">
    <img  src="/Lodha.png" />
    </div>



   <div className="logoStyle">
    <img  src="/Hotstar.png" />
    </div>
    <div className="logoStyle">
    <img  src="/Jio.png" />
    </div>
    <div className="logoStyle">
    <img  src="/Scoobies.png" />
    </div>

    <div className="logoStyle">
    <img  src="/Lodha.png" />
    </div>



   <div className="logoStyle">
    <img  src="/Hotstar.png" />
    </div>
    <div className="logoStyle">
    <img  src="/Jio.png" />
    </div>



      </Slider>
    </div>
  );
};

export default Testing