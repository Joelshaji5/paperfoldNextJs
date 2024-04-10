import React, { useState } from "react";
import servicesData from "../Constent/services.json"; // Import JSON data
import "../../Style/OurServiceAcordian.css";

const OurServiceAccordion = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    if (active < servicesData.length - 1) {
      setActive(active + 1);
    }
  };

  const prevSlide = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="serviceAccMain flex justify-around">
      <div className="w-[26%] ServiceTxtDiv">
        <h1 className="Servicetxt">Our Services</h1>
      </div>

      <div className=" HomeCDiv h-[523px] ServiceCardDiv mr-5 ">
        <ul className="h-[99%] mb-20 Serviceul">
          {servicesData.map((service, i) => (
            <li
              key={i}
              style
              ={{
                backgroundImage: `url(${service.backgroundUrl})`,
                backgroundPosition: "center",
              }}
              role="button"
              className={active === i ? "activeService" : ""}
              onClick={() => setActive(i)}
              >
              <h3 className="cardCloseService">{service.name}</h3>
              <div className="inner section-content">
                <div className="bio gap-3">
                  <h2 className="AccordianH2">{service.name}</h2>
                  <p className="AccordianP">{service.description}</p>
                </div>
              </div>
              </li>
              ))}
              </ul>
              {/* <button onClick={prevSlide}>Previous</button>
              <button onClick={nextSlide}>Next</button> */}
              </div>
              
              <div></div>
              </div>
              );
              };
              
              export default OurServiceAccordion;
              