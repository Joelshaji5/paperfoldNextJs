"use client"
import React, { useState } from 'react';
import Data from "../Constent/Priceinglist.json";
import "../../Style/Servicelist.css"


// const Services = [
//   "WebDevelopment",
//   "UI/UXDesign",
//   "DigitalMarketing",
//   "Database Management",
//   "Software Development",
//   "Branding",
//   "Google Services",
// ];

const Services = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
   ];

const ServiceList = () => {
  const [activeService, setActiveService] = useState("Web Development");

  const handleButtonClick = (serviceName) => {
    setActiveService(serviceName);
  };
  

  const serviceData = Data[activeService] || {};


  const [activeIndex, setActiveIndex] = useState(1);

  const handleToggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Toggle off if already active
    } else {
      setActiveIndex(index); // Set active if not already active
    }
  };

  return (
    <div className='serviceMainDiv pt-20'>
      <div id="myDIV">
        {Services.map((serviceName ,index) => (
          <button key={index}
            className={`name ml-2 btn ${activeService === serviceName ? 'active' : ''}`}
            onClick={() => handleButtonClick(serviceName)}
          >
            {serviceName}
          </button>
        ))}
      </div>

      

      <h1 className='mt-12 text-center serviceHeading'>{serviceData.name}</h1>

      <div className='flex serviceTable'>
      {serviceData.base && (
        <div className={`baseTable ${activeIndex === 0 ? 'activeService' : ''}`} onClick={() => handleToggleActive(0)}>
          <h2 className='servicetableHeading'>{serviceData.base.planName}</h2>
          <ul>
            {serviceData.base.features?.map((feature, index) => (
              <li key={index} className='flex'>
                <img src="check-outline (2).png" alt="" className='mr-3 ml-3 tickLogo' />
                {feature}
              </li>
            ))}
          </ul>
          <button className='GetQuotesBtn'>Get Quote</button>

        </div>

      )}

      {serviceData.medium && (
        <div className={`baseTable ${activeIndex === 1 ? 'activeService' : ''}`} onClick={() => handleToggleActive(1)}>
          <h2 className='servicetableHeading'>{serviceData.medium.planName}</h2>
          <ul>
            {serviceData.medium.features?.map((feature, index) => (
              <li key={index} className='flex'>
                <img src="check-outline (2).png" alt="" className='mr-3 ml-3 tickLogo' />
                {feature}
              </li>
            ))}
          </ul>
          <button className='GetQuotesBtn'>Get Quote</button>
        </div>
      )}

      {serviceData.pro && (
        <div className={`baseTable ${activeIndex === 2 ? 'activeService' : ''}`} onClick={() => handleToggleActive(2)}>
          <h2 className='servicetableHeading'>{serviceData.pro.planName}</h2>
          <ul>
            {serviceData.pro.features?.map((feature, index) => (
              <li key={index} className='tableInnerFont flex mt-3'>
                <img src="check-outline (2).png" alt="" className='mr-3 ml-3 tickLogo' />
                {feature}
              </li>
            ))}
          </ul>
          <button className='GetQuotesBtn'>Get Quote</button>

        </div>
      )}
    </div>


      <h1 className='serviceContent'>{serviceData.content1}</h1>

      <div className='mt-14'>
         {
          serviceData.services?.map((ServiceQuestion, index)=>{
            return(
              <div key={index} >
              <h1 className='serviceContentH' >{ServiceQuestion.name}</h1>
              <p className='serviceContentP' >{ServiceQuestion.content}</p>
              </div>
            )
          })
         }     
      </div>

   

    </div>
  );
};

export default ServiceList;
