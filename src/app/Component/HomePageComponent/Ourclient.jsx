'use client'
import React from 'react';
import Carouselrl from './OurclientCarousel/Carouselrl';
import Testing from './OurclientCarousel/Testing';
function OurClient() {
  // Assuming 'heroBg' is the URL of the background image
  const heroBg = 'your-image-url.jpg';

  const divStyle = {
    backgroundImage: `url(${heroBg})`,
    height: '100%',
  };

  const headingStyle = {
    color: '#1E1E1E',
  };








  return (
    <div>
      <div style={divStyle}>
        <h1 className="ourclienttxt mt-24 text-center font-inter text-8xl font-medium leading-none tracking-tight" style={headingStyle}>
          Our Client
        </h1>
        <hr className="md:mt-[10px] mt-[30px] mb-[70px] w-[90vw] m-[auto] border-black hrourclient" />
        <Carouselrl />
        <hr className="hrourclient mb-[70px] w-[90vw] m-[auto] border-black" />
        <Testing />
        <button className="border text-black mt-6 bg-slate-50 rounded-3xl p-3">Work With Us</button>
      </div>
    </div>
  );
}

export default OurClient;
