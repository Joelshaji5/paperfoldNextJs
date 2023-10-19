import React, { useState } from "react";
import "../../Style/OurServiceAcordian.css";

const OurServiceAccordion = () => {
  const [active, setActive] = useState(0);

  const artists = [
    {
      name: "Web Development",
      description: `We offer a wide range of web development services, including front-end development, back-end development, and full-stack development. We use the latest technologies and best practices to create websites that are both visually appealing and functional. We also offer web design, web programming, web security, and web accessibility services. We are committed to providing our clients with the highest quality web development services.`,
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
        embedUrl:
          "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator",
      },
      backgroundUrl: "/ServiceCard1ff.png",
    },

    {
      name: "UI/UX Design",
      description: `We design user interfaces and user experiences that are both visually appealing and functional. We understand the importance of creating a seamless user experience that meets the needs of your target audience. Our team of experienced UI/UX designers will work with you to understand your goals and create a design that will help you achieve them.`,
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
        embedUrl:
          "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator",
      },
      backgroundUrl: "/ServiceCard2f.png",
    },
    {
      name: "Digital Marketing",
      description: `We offer a comprehensive range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, and email marketing. We can help you reach your target audience, increase brand awareness, and generate leads and sales. We are experts in using digital marketing to achieve your business goals.`,
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
        embedUrl:
          "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator",
      },
      backgroundUrl: "/ServiceCard3f.png",
    },
    {
      name: "Cloud / Database Management",
      description: `We offer a wide range of cloud database management services to help you get the most out of your data. Our team of experts can help you choose the right cloud database for your needs, set it up and configure it, and manage it on an ongoing basis. We also offer a variety of other database management services, such as data migration, backup and recovery, and performance tuning.`,
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
        embedUrl:
          "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator",
      },
      backgroundUrl: "/ServiceCard4f.png",
    },
    {
      name: "Software Development",
      description: `We offer a wide range of software development services, including web development, mobile app development, software engineering, data science, and machine learning. We also offer a variety of managed services, so you can focus on your business while we take care of your software needs.`,
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
        embedUrl:
          "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator",
      },
      backgroundUrl: "/ServiceCard5f.png",
    },
    {
      name: "Branding",
      description: `Branding & Logo Creating a strong positive perception of a company, its products or services in the customer's mind by combining such elements as logo, design, mission statement, and a consistent theme throughout all marketing & Communications.`,
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
        embedUrl:
          "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator",
      },
      backgroundUrl: "/ServiceCard6f.png",
    },
    {
      name: "Google Services",
      description: `Google Ads: Google Ads is a pay-per-click (PPC) advertising platform that allows businesses to display their ads on Google Search and other Google properties.
      Google Merchant Center: Google Merchant Center is a free service that allows businesses to upload their product catalogs to Google. 
      Google Analytics: Google Analytics is a web analytics service that helps businesses track and measure website traffic.
      Google Maps: Google Maps is a mapping service that can help businesses to find and reach their customers.`,
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
        embedUrl:
          "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator",
      },
      backgroundUrl: "/ServiceCard7.png",
    },

    // Add more artist data here
  ];

  const nextSlide = () => {
    if (active < artists.length - 1) {
      setActive(active + 1);
    }
  };

  const prevSlide = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="serviceAccMain flex">
      <div className="w-[26%]">
        <h1 className="Servicetxt">Our Services</h1>
      </div>

      <div className=" w-[80%] mt-28 mr-5 ">
        <ul className="h-[65%] mt-28 mb-20 Serviceul">
          {artists.map((artist, i) => (
            <li
              key={i}
              style={{
                backgroundImage: `url(${artist.backgroundUrl});     height: 550px;
            background-position: left;
`,
              }}
              role="button"
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
            >
              <h3 className="cardCloseService">{artist.name}</h3>
              <div className="section-content">
                <div className="inner">
                  <div className="bio">
                    <h2 className="AccordianH2">{artist.name}</h2>
                    <p className="AccordianP">{artist.description}</p>
                  </div>
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
