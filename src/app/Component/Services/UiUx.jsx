import React from "react";
import "../../Style/UiUx.css";
import Image from "next/image";

const UiUx = () => {
  return (
    <div>
      <div className="ProcessDiv">

        <div className="ProcessFlexDiv">
          <div className="ResDiv">
            <div className="ResDivInner">
              <h1 className="ResearchH">Ux Research</h1>
              <p className="ResearchP">
                UX research is the compass guiding product development, ensuring
                it aligns with user needs and desires. Through meticulous study
                and analysis, it illuminates the path toward intuitive and
                satisfying user experiences.
              </p>
            </div>
            <Image
              className="UIUXDivImg"
              height={170}
              width={170}
              alt=""
              src="/Ux11.png"
            ></Image>
          </div>
          <div className="ResDiv">
            <div className="ResDivInner">
              <h1 className="ResearchH"> Information Architecture</h1>
              <p className="ResearchP">
                Information architecture organizes digital content with finesse,
                shaping seamless pathways for users to navigate and access
                information effortlessly. It&apos;s the blueprint that crafts
                clarity in complexity, optimizing user journeys for maximum
                usability.
              </p>
            </div>
            <Image
              className="UIUXDivImg"
              height={170}
              width={170}
              alt=""
              src="/UxINew.png"
            ></Image>
          </div>
          <div className="ResDiv">
            <div className="ResDivInner">
              <h1 className="ResearchH">Visual Design</h1>
              <p className="ResearchP">
                Visual design meticulously harmonizes colors, typography, and
                imagery, sculpting immersive digital experiences that captivate
                users with artistry and functionality, guiding them seamlessly
                through interfaces that engage and delight.
              </p>
            </div>
            <Image
              className="UIUXDivImg"
              height={170}
              width={170}
              alt=""
              src="/Ux33.png"
            ></Image>
          </div>
         

          <div className="ResDiv">
            <div className="ResDivInner">
              <h1 className="ResearchH">Wireframing and Prototyping</h1>
              <p className="ResearchP">
                Wireframing and prototyping are the foundational tools in
                digital design, transforming abstract concepts into tangible
                user experiences. With precision and refinement, they craft the
                blueprint for seamless interactions, ensuring optimal
                functionality and user satisfaction.
              </p>
            </div>

            <Image
              className="UIUXDivImg"
              height={170}
              width={170}
              alt=""
              src="/Ux4.png"
            ></Image>
          </div>
        
         
          <div className="ResDiv">
          
                        <div className="ResDivInner">

            <h1 className="ResearchH">Interaction Design</h1>
            <p className="ResearchP">
              Interaction design breathes life into digital experiences,
              balancing functionality and elegance to create intuitive
              interfaces that feel like a natural extension of the user,
              fostering meaningful connections and effortless navigation.
            </p>
            </div>
            <Image
              className="UIUXDivImg"
              height={170}
              width={170}
              alt=""
              src="/Ux5.png"
            ></Image>
          </div>
          <div className="ResDiv">
         
                        <div className="ResDivInner">

            <h1 className="ResearchH">Responsive Design</h1>
            <p className="ResearchP">
              Responsive design ensures that websites and apps adapt smoothly to
              different devices and screen sizes, guaranteeing users a
              consistent and user-friendly experience, ultimately making their
              interaction with digital platforms seamless and enjoyable.
            </p>
            </div>
            <Image
              className="UIUXDivImg"
              height={170}
              width={170}
              alt=""
              src="/Ux6.png"
            ></Image>
          </div>

    

       
       
        </div>
      </div>

    

{/* Design  */}
      <div className="DesignDivWeb">
         <div className="DesignDivWeb2">
          <h1 className="DesignH">Designing with emotional intelligence</h1>
          <p className="DesignPa">Is like crafting a warm embrace, welcoming visitors into a truly immersive experience. Our tailored solutions prioritize adaptability, accessibility, and seamless performance across all devices, ensuring every user feels valued. Ready to enrich your online presence? Reach out for a call back today, and let's create something truly exceptional together.</p>
         </div>
         <div>
         <Image
         className="UIUXDivImg2"
                height={717}
                width={1100}
                alt=""
                src="/WebImg.png"
              ></Image> 
          </div> 
      </div>
      {/* explore */}

      <div className="ExploreDiv">
        <h1 className="ExploreH">
          Exploring ideas for a brighter tomorrow. <br></br>Let&apos;s innovate
          sustainably and thrive together.
        </h1>
        <button className="ExploreBtn">Contact Us</button>
      </div>


    </div>
  );
};

export default UiUx;
