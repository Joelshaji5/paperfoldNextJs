import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import "../../../app/Style/CarouselNew.css"

// import TataMotors from '/Scoobies.png'; 
// import easger from '/Lodha.png'; 
// import LifeSpeaks from '/Hotstar.png'; 
// import IndiaC from '/Jio.png'; 
// import Phool from '/some-image.png';  

const images = [
    '/Scoobies.png',
    '/Lodha.png',
    '/Hotstar.png',
    '/Jio.png',
    '/Phool.png'
  ];
const CarouselNew = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const totalImages = images.length;
    let currentIndex = 0;

    const animateCarousel = () => {
      if (currentIndex === totalImages) {
        currentIndex = 0;
      }

      if (imageRef.current) {
        imageRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        currentIndex++;
      }
    };

    const intervalId = setInterval(animateCarousel, 2000); // Change images every 2 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    
    <div className="slidernew">
	<div className="slide-tracknew">
		<div class="slide " >
			<img src='/Scoobies.png' height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src='/Lodha.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Hotstar.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Jio.png' height="100" width="250" alt="" />
		</div>
     
        <div class="slide " >
			<img src='/Scoobies.png' height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src='/Lodha.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Hotstar.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Jio.png' height="100" width="250" alt="" />
		</div>
   
        <div class="slide " >
			<img src='/Scoobies.png' height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src='/Lodha.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Hotstar.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Jio.png' height="100" width="250" alt="" />
		</div>
     
		
	</div>

    <div className="slide-tracknew">
		<div className="slide " >
			<img src='/Scoobies.png' height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src='/Lodha.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Hotstar.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Jio.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
        <div className="slide " >
			<img src='/Scoobies.png' height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src='/Lodha.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Hotstar.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Jio.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
        <div className="slide " >
			<img src='/Scoobies.png' height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src='/Lodha.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Hotstar.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Jio.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
		
	</div>
</div>



  
  );
};

export default CarouselNew;
