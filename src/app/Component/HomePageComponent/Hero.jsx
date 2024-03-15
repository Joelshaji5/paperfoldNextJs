import React from 'react'
import Image from "next/image";

import "../../Style/Hero.css"

function Hero() {
  return (
    <div className="hero flex" >
      <div className="left-hero">
        <div className="herotextdiv">
          <h2 className="hero-text flex text-left ">
            We Design. <br />
            We Develop. <br />
            You Dominate.
          </h2>
          <div className="flex mt-7 btndiv">
            <button  className="btn1"><a href="/contact" className="btn1">Contact</a>
</button>
<button ><a href="/services" className="btn2">Services</a>
</button>
          </div>
        </div>
      </div>
      <div className="right-hero">
        {/* <img src={heroHome} alt="hero image" /> */}

        <Image
         className="hero-img"
                height={500}
                width={285}
                alt="burger menu"
                src="/hero-home.png"
              ></Image>        
      </div>
    </div>  )
}

export default Hero