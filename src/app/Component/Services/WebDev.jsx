import React from "react";
import Data from "../Constent/Priceinglist.json";
import "../../Style/WebDev.css"
import Image from "next/image";


const WebDev = () => {
  const webDevelopmentData = Data["Web Development"];

  return (
    <div>

    <div className="WebDevMainDivList ">
<div>
<h1 className="WebDevMainDivListH ">Are you on the lookout for top-tier website development services to craft online identity for your business or startup?  </h1>
<p className="WebDevMainDivListP ">Waste no time and choose Paperfold – we pride ourselves on being a leading website development company that ensures the best results at affordable prices. We are dedicated to transforming your digital aspirations into a tangible reality. Our seasoned team of developers stands at the forefront of technological innovation, committed to delivering websites that seamlessly blend aesthetics with functionality. Our Expertise Encompasses: Custom Website Development, E-Commerce Excellence, Responsive Design, Content Management Systems (CMS), API Integration, Website Maintenance and Support. Fast, Secure, SEO & Mobile Friendly Website Development Services worldwide.</p>
</div>
  
  
<div className="EcomWebDivMain">
      <div >
      <Image
         className="UIUXDivImg"
                height={330}
                width={330}
                alt=""
                src="/EcomWebDev.png"
              ></Image> 
      </div>
      <div className="EcomWebDivMainDiv2">

<h1 className="EcomWebDivMainDiv2H">Ecommerce Website</h1>
<p className="EcomWebDivMainDiv2P">We offer a wide range of eCommerce website design & development services. We have unmatched expertise in working on all leading eCommerce platforms including Prestashop, Magento, OSCommerce, VirtueMart, Zencart, Opencart, Ubercart, WooCommerce, BigCommerce, Shopify, etc. At Paperfold Sequential we have a vast pool of skilled and professional eCommerce website developers who have great expertise in developing custom specifications, modules, and user-centric shopping cart software.</p>
      </div>
    </div>

    <div className="EcomWebDivMain">
 
      <div className="EcomWebDivMain2">

<h1 className="EcomWebDivMainH">Custom Web App Development</h1>
<p className="EcomWebDivMainP">We, as a custom web app development company in India, catering to thousands of businesses and their digital needs all across the world. Along with our domain expertise, we have been working over to help start-ups and businesses of varied industries to develop B2B and B2C web applications. Our full-time custom web app developers have been giving their best to successfully deliver the projects to the clients.</p>
      </div>
      <div >
      <Image
         className="UIUXDivImg"
                height={330}
                width={330}
                alt=""
                src="/EcomWebDev.png"
              ></Image> 
      </div>
    </div>


    <div className="EcomWebDivMain">
      <div >
      <Image
         className="UIUXDivImg"
                height={330}
                width={330}
                alt=""
                src="/WebDev3Img.png"
              ></Image> 
      </div>
      <div className="EcomWebDivMainDiv2">

<h1 className="EcomWebDivMainDiv2H">Website Maintenance</h1>
<p className="EcomWebDivMainDiv2P">Let our experts take care of your website maintenance needs, while you take care of what’s more important for your business! Proactive and comprehensive website maintenance solutions Expert team of professionals dedicated to enhancing your website’s performance Custom-made maintenance packages to suit your specific needs Regular updates and security patches to keep your website safe Timely backups and disaster recovery options for peace of mind</p>
      </div>
    </div>
  


    <div className="WebMainDivWebDesign justify-evenly">
        {/* <h1>{webDevelopmentData.name}</h1>
            <p>{webDevelopmentData.content1}</p> */}
        <div className="baseTableWebDev">
          {/* Render base plan features */}
          <h2 className="servicetableHeadingNew">{webDevelopmentData.BackEnd.planName}</h2>
          <ul className="ml-4" >
            {webDevelopmentData.BackEnd.features.map((feature, index) => (
              <li key={index} className="LiImgBox">
                {/* <span className="servicetableLi">{feature.text}</span> */}
                <img src={feature.image} alt={feature.text} />
              </li>
            ))}
          </ul>
        </div>

        <div className="baseTableWebDev">
          {/* Render medium plan features */}
          <h2 className="servicetableHeadingNew">{webDevelopmentData.FrontEnd.planName}</h2>
          <ul className="ml-4">
            {webDevelopmentData.FrontEnd.features.map((feature, index) => (
              <li key={index} className="LiImgBox">
                {/* <span className="servicetableLi" >{feature.text}</span> */}
                <img src={feature.image} alt={feature.text} />
              </li>
            ))}
          </ul>
        </div>

        <div className="baseTableWebDev">
          {/* Render pro plan features */}
          <h2 className="servicetableHeadingNew">{webDevelopmentData.CMS.planName}</h2>
          <ul className="ml-4">
            {webDevelopmentData.CMS.features.map((feature, index) => (
              <li key={index} className="LiImgBox">
                {/* <span className="servicetableLi" >{feature.text}</span> */}
                <img src={feature.image} alt={feature.text} />
              </li>
            ))}
          </ul>
        </div>

        <div className="baseTableWebDev">
          {/* Render pro plan features */}
          <h2 className="servicetableHeadingNew">{webDevelopmentData.ServerCloud.planName}</h2>
          <ul className="ml-4" >
            {webDevelopmentData.ServerCloud.features.map((feature, index) => (
              <li key={index} className="LiImgBox">
                {/* <span className="servicetableLi" >{feature.text}</span> */}
                <img src={feature.image} alt={feature.text} />
              </li>
            ))}
          </ul>
        </div>

     
      </div>

    </div>






      {/* Render additional services */}
      <div>
        {webDevelopmentData.services.map((service, index) => (
          <div key={index}>
            {/* <h2>{service.name}</h2> */}
            {/* <p>{service.content}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDev;
