import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import "../../../Style/OurClient.css"

// import TataMotors from '/Tata-Motors-Logo.png'; 
// import easger from '/esger.png'; 
// import LifeSpeaks from '/LifeSpeaks.png'; 
// import IndiaC from '/India_Circus.png'; 
// import Phool from '/some-image.png';  

const images = [
    '/Tata-Motors-Logo.png',
    '/esger.png',
    '/LifeSpeaks.png',
    '/India_Circus.png',
    '/Phool.png'
  ];
const Carousel = () => {
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
    
    <div className="slider">
	<div className="slide-track">
		<div class="slide " >
			<img src='/Tata-Motors-Logo.png' height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src='/esger.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/LifeSpeaks.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/India_Circus.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
        <div class="slide " >
			<img src='/Tata-Motors-Logo.png' height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src='/esger.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/LifeSpeaks.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/India_Circus.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
        <div class="slide " >
			<img src='/Tata-Motors-Logo.png' height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src='/esger.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/LifeSpeaks.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/India_Circus.png' height="100" width="250" alt="" />
		</div>
        <div class="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
		
	</div>

    <div className="slide-tracknew">
		<div className="slide " >
			<img src='/Tata-Motors-Logo.png' height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src='/esger.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/LifeSpeaks.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/India_Circus.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
        <div className="slide " >
			<img src='/Tata-Motors-Logo.png' height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src='/esger.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/LifeSpeaks.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/India_Circus.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
        <div className="slide " >
			<img src='/Tata-Motors-Logo.png' height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src='/esger.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/LifeSpeaks.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/India_Circus.png' height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src='/Phool_Logo.png' height="100" width="250" alt="" />
		</div>
		
	</div>
</div>



  
  );
};

export default Carousel;
