import React, { useState } from 'react';

const Services = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "Database Management",
  "Software Development",
  "Branding",
  "Google Services",
];

const ServiceList = () => {
  const [activeService, setActiveService] = useState("Web Development");

  const handleButtonClick = (serviceName) => {
    setActiveService(serviceName);
  };

  return (
    <div>

      <div id="myDIV">
        {Services.map((serviceName) => (
          <button
            key={serviceName}
            className={`name ml-2 btn ${activeService === serviceName ? 'active' : ''}`}
            onClick={() => handleButtonClick(serviceName)}
          >
            {serviceName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
