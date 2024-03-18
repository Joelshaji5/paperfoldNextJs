import React from "react";
import Data from "../Constent/Priceinglist.json";
import "../../Style/WebDev.css"

const WebDev = () => {
  const webDevelopmentData = Data["Web Development"];

  return (
    <div>
      <div className="WebMainDiv justify-evenly">
        {/* <h1>{webDevelopmentData.name}</h1>
            <p>{webDevelopmentData.content1}</p> */}
        <div className="baseTableWeb">
          {/* Render base plan features */}
          <h2 className="servicetableHeading">{webDevelopmentData.BackEnd.planName}</h2>
          <ul className="ml-4" >
            {webDevelopmentData.BackEnd.features.map((feature, index) => (
              <li key={index}>
                <span className="servicetableLi">{feature.text}</span>
                {/* <img src={feature.image} alt={feature.text} /> */}
              </li>
            ))}
          </ul>
        </div>

        <div className="baseTableWeb">
          {/* Render medium plan features */}
          <h2 className="servicetableHeading">{webDevelopmentData.FrontEnd.planName}</h2>
          <ul className="ml-4">
            {webDevelopmentData.FrontEnd.features.map((feature, index) => (
              <li key={index}>
                <span className="servicetableLi" >{feature.text}</span>
                {/* <img src={feature.image} alt={feature.text} /> */}
              </li>
            ))}
          </ul>
        </div>

        <div className="baseTableWeb">
          {/* Render pro plan features */}
          <h2 className="servicetableHeading">{webDevelopmentData.CMS.planName}</h2>
          <ul className="ml-4">
            {webDevelopmentData.CMS.features.map((feature, index) => (
              <li key={index}>
                <span className="servicetableLi" >{feature.text}</span>
                {/* <img src={feature.image} alt={feature.text} /> */}
              </li>
            ))}
          </ul>
        </div>

        <div className="baseTableWeb">
          {/* Render pro plan features */}
          <h2 className="servicetableHeading">{webDevelopmentData.ServerCloud.planName}</h2>
          <ul className="ml-4" >
            {webDevelopmentData.ServerCloud.features.map((feature, index) => (
              <li key={index}>
                <span className="servicetableLi" >{feature.text}</span>
                {/* <img src={feature.image} alt={feature.text} /> */}
              </li>
            ))}
          </ul>
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
