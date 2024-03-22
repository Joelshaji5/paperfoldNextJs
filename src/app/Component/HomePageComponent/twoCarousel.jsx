import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import '../../Style/TwoCard.css'; 
import Image from "next/image";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
let productsp = [
{
id: 1,
name: "Scoobies",
brand: "Scoobies",
url: "/Port1F.png",
price: 100,
},
{
id: 2,
name: "Esger",
brand: "Esger",
url: "Port2F.png",
price: 100,
},
{
    id: 3,
    name: "Product 1",
    brand: "Brand Name",
    url: "/Port3F.png",
    price: 100,
    },
    {
    id: 4,
    name: "Disney+ Hoststar",
    brand: "Disney",
    url: "/Port4F.png",
    price: 100,
    },
    {
        id: 5,
        name: "Product Number 2",
        brand: "Brand Name",
        url: "/Port5F.png",
        price: 100,
        },
];
var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
const options = {
margin: 30,
responsiveClass: true,
nav: false,
autoplayHoverPause:false,

dots: true,
autoplay: true,
smartSpeed: 100,
navClass: ["owl-prev", "owl-next"],
navText: [
'previous ',
'next',
],
responsive: {
0: {
items: 1,
},
400: {
items: 1,
},
600: {
items: 1,
},
700: {
items: 2,
},
1000: {
items: 2,
},
},
};

return (
<div className="row no-gutters  pb-16 mt-24 flex Ourworkdiv">
<div
className="cardCarouselWork col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  pb-2 w-[80%] ml-[-38px]"
id="owl-carousel-products"
>
<h3 className="text-center">
</h3>
<ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
<OwlCarousel
className="owl-theme"
loop
margin={1}
nav={true}
width={"width:500px"}
navText={[
'<img src="/images/Arrow_left.png" />',
'<img src="/images/Arrow_right.png" />',
]}
dots={false}
animateIn={true}
{...options}
>
{productsp && productsp.length > 0
? productsp.map((product) => {
return (
<div
id="featuredProducts"
className="item float-left w-100"
key={product.name}
>
<div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">



    
<span className="image text-center">
<img
id={"img" + product.id}
src={product.url}
alt={product.name}
title={product.name} 
className="WorkImg"
/>

</span>
<span className="w-100 text-center mt-1 ">


</span>
</div>
</div>
);
})
: ""}
</OwlCarousel>
</ul>
</div>

<div className="OurWorkTxt">
    <h2 className="WorkTxt" >Our Work</h2>
</div>
</div>
);
};
export default Slider;
        
