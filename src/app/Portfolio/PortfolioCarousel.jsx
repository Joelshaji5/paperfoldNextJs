"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import "../Style/Portfolio.css";
import Testing from "../Component/HomePageComponent/Testing";
import DataPortfolio from "../Component/Constent/PortfolioData.json";

const PortfolioCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [description, setDescription] = useState(DataPortfolio[0].description);
  const [subHeading, setSubHeading] = useState(DataPortfolio[0].subName);
  const [titleCard, setTitleCard] = useState(DataPortfolio[0].name);
  const [typeCard, setTypeCard] = useState([]);
  const [DaysCard, setDaysCard] = useState(DataPortfolio[0].duration);
  const [sector, setSector] = useState(DataPortfolio[0].sector);
  const [services, setServices] = useState(DataPortfolio[0].services);
  const [projectOverview, setProjectOverview] = useState(
    DataPortfolio[0].projectOverview
  );
  const [technologies, setTechnologies] = useState(
    DataPortfolio[0].technologies
  );
  const [outcome, setOutcome] = useState(DataPortfolio[0].outcome);
  const [infoImg, setInfoImg] = useState(DataPortfolio[0].imageSrcInfo);
  const [infoImg2, setInfoImg2] = useState(DataPortfolio[0].imageSrcInfo2);

  const [CardType, setTitl] = useState("");

  const [initialSlideMobile, setInitialSlideMobile] = useState(0);

  const handleImageClick = (imageData, event, index) => {
    console.log("Image clicked:", imageData);
    setDescription(imageData.description);
    setSubHeading(imageData.subName);
    setTitleCard(imageData.name);
    setInitialSlideMobile(index);
    setDaysCard(imageData.duration);
    console.log(typeCard);
    setTypeCard([imageData.services]);
    setSector(imageData.sector);
    setDescription(imageData.description);
    setProjectOverview(imageData.projectOverview);
    setTechnologies(imageData.technologies);
    setOutcome(imageData.outcome);
    setInfoImg2(imageData.imageSrcInfo2);
    setInfoImg(imageData.imageSrcInfo);
  };

  const initialSlidePC = initialSlideMobile - 1;
  const initialSlide = isMobile ? initialSlideMobile : initialSlidePC;

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: initialSlide,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: initialSlide,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          initialSlide: initialSlide,
          slidesToScroll: 1,
          autoplay: false,
          dots: true,
        },
      },
    ],
  };

  const MobileImageSlider = () => (
    <div className="pt-16 inter">
      <Slider {...settings} className="SliderMb">
        {DataPortfolio.map((imageData, index) => (
          <div
            key={index}
            className="MobileDivPortfolio"
            onClick={(event) => handleImageClick(imageData, event, index)}
          >
            <img
              className="PortfolioImage"
              src={imageData.imageSrcMb}
              alt={`PortfolioMbImage ${index + 1}`}
            />
            <h1 className="CardTitle montserrat.className">{imageData.name}</h1>
            <h1 className="CardSubHeading font-inter">{imageData.subName}</h1>
            <h1 className="ProjectOverView">Project Overview</h1>
            <h1 className="CardDescription Inter.className">
              {imageData.projectOverview}
            </h1>
            <div className="OverviewSmallDivMain">
              <div className="OverviewSmallDiv">
                <p className="OverviewSmallDivP">Type</p>
                <div className="flex">
                  {imageData.services.map((itm, index) => {
                    return (
                      <div key={index} className="flex">
                        <h3 className="OverviewSmallDivH">{itm}</h3>
                        {index !== imageData.services.length - 1 && (
                          <span className="OverviewSmallDivH"> , </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="OverviewSmallDiv">
                <p className="OverviewSmallDivP">Duration</p>
                <h3 className="OverviewSmallDivH">{imageData.duration}</h3>
              </div>
            </div>

            <div className="OverviewSmallDivMain">
              <div className="OverviewSmallDiv">
                <p className="OverviewSmallDivP">Business Type</p>
                <div className="flex">
                  {imageData.businessType.map((itm, index) => {
                    return (
                      <div key={index} className="flex">
                        <h3 className="OverviewSmallDivH">{itm}</h3>

                        {index < imageData.businessType.length - 1 && (
                          <span className="OverviewSmallDivH"> , </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="OverviewSmallDiv">
                <p className="OverviewSmallDivP">Sector</p>
                <h3 className="OverviewSmallDivH">{imageData.sector}</h3>
              </div>
            </div>
            <img src={imageData.imageSrcInfo} alt="scoobies" />
            <p className="PortfolioDescription">{imageData.description}</p>
            <p className="PortfolioDescription2">{imageData.technologies}</p>
            <img src={imageData.imageSrcInfo2} alt="Image" />

            <h1 className="Outcome">Outcome</h1>
            <p className="OutcomeP">{imageData.outcome}</p>
          </div>
        ))}
      </Slider>
    </div>
  );

  const PCImageSlider = () => (
    <Slider {...settings}>
      {DataPortfolio.map((imageData, index) => (
        <div
          key={index}
          className="PorfolioPcImgDiv"
          onClick={(event) => handleImageClick(imageData, event, index)}
        >
          <img
            className="PortfolioImage"
            src={imageData.imageSrc}
            alt={`PortfolioMbImage ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="MbTesting">
      <Testing />
      {isMobile ? <MobileImageSlider /> : <PCImageSlider />}
      <div className="HideMblider">
        <h1 className="CardTitle">{titleCard}</h1>
        <h1 className="CardSubHeading">{subHeading}</h1>
        <h1 className="ProjectOverView">Project Overview</h1>
        <h1 className="CardDescription">{projectOverview}</h1>
        <div className="OverviewSmallDivMain ">

          <div className="OverviewSmallDiv">
            <p className="OverviewSmallDivP">Type</p>
            <div className="flex">
              {typeCard.map((itm, index) => {
                return (
                  <div key={index} className="flex">
                    <h3 className="OverviewSmallDivH">{itm}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="OverviewSmallDiv">
            <p className="OverviewSmallDivP">Duration</p>
            <h3 className="OverviewSmallDivH">{DaysCard}</h3>

          </div>

          <div className="OverviewSmallDiv">
            <p className="OverviewSmallDivP">Business Type</p>
            <div className="flex">
              {services.map((itm, index) => {
                return (
                  <div key={index} className="flex">
                    <h3 className="OverviewSmallDivH">{itm}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="OverviewSmallDiv">
            <p className="OverviewSmallDivP">Type</p>
        <h3 className="OverviewSmallDivH">{sector}</h3>
          </div>

        </div>

        <div>

        {/* <img src={imageData.imageSrcInfo} alt="scoobies" /> */}
            <p className="PortfolioDescription">{description}</p>
            <p className="PortfolioDescription2">{technologies}</p>
            {/* <img src={imageData.imageSrcInfo2} alt="Image" /> */}

            <h1 className="Outcome">Outcome</h1>
            <p className="OutcomeP">{outcome}</p>

        <div>

        </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
