import React from 'react';
import "../../Style/UiUx.css"
import Image from "next/image";

const UiUx = () => {
    return (
        <div>

            <div className='ProcessDiv'>

        <h1 className='ProcessHMain'>Process</h1>

        <div className='ProcessFlexDiv'>
            <div className='ResDiv'>
                <h1 className="ResearchH">Ux Research</h1>
                <p className="ResearchP" >UX research is the compass guiding product development, ensuring it aligns with user needs and desires. Through meticulous study and analysis, it illuminates the path toward intuitive and satisfying user experiences.</p>
            </div>
            <div className='ResDiv'>
                <h1 className="ResearchH"> Information Architecture</h1>
                <p className="ResearchP">
Information architecture organizes digital content with finesse, shaping seamless pathways for users to navigate and access information effortlessly. It's the blueprint that crafts clarity in complexity, optimizing user journeys for maximum usability.</p>
            </div>
            <div className='ResDiv' >
            <h1 className="ResearchH">Wireframing and Prototyping</h1>
                <p className="ResearchP">Wireframing and prototyping are the foundational tools in digital design, transforming abstract concepts into tangible user experiences. With precision and refinement, they craft the blueprint for seamless interactions, ensuring optimal functionality and user satisfaction.</p>
            </div>
            <div className='ResDiv' >
            <h1 className="ResearchH">Visual Design</h1>
                <p className="ResearchP">Visual design meticulously harmonizes colors, typography, and imagery, sculpting immersive digital experiences that captivate users with artistry and functionality, guiding them seamlessly through interfaces that engage and delight.</p>
            </div>
            <div className='ResDiv' >
            <h1 className="ResearchH">Interaction Design</h1>
                <p className="ResearchP">Interaction design breathes life into digital experiences, balancing functionality and elegance to create intuitive interfaces that feel like a natural extension of the user, fostering meaningful connections and effortless navigation.</p>
            </div>
            <div className='ResDiv' >
            <h1 className="ResearchH">Responsive Design</h1>
                <p className="ResearchP">
                Responsive design ensures that websites and apps adapt smoothly to different devices and screen sizes, guaranteeing users a consistent and user-friendly experience, ultimately making their interaction with digital platforms seamless and enjoyable.
                </p>
            </div>

            <div className='ResDiv' >
            <h1 className="ResearchH">Usability Testing</h1>
                <p className="ResearchP">        
Usability testing invites users to explore digital products firsthand, uncovering insights that refine interfaces for intuitive and satisfying experiences. It's like having a conversation with users, ensuring designs resonate and interactions flow seamlessly.
                </p>
            </div>

            <div className='ResDiv'>
            <h1 className="ResearchH">Accessibility</h1>
                <p className="ResearchP">     
                Accessibility is about making digital content open and welcoming to everyone, ensuring that all users, regardless of ability, can easily navigate and engage with online platforms. It's like ensuring that every door is open and accessible, allowing everyone to participate fully in the digital world.   
                </p>
            </div>

            <div className='ResDiv'>
            <h1 className="ResearchH">Front-end Development</h1>
                <p className="ResearchP">     
                Front-end development gives digital designs a heartbeat, creating interfaces users directly interact with. It's like crafting the welcoming entrance of a building, ensuring users have a smooth and engaging experience right from the start.
                </p>
            </div>
        </div>

            </div>

            <div className='DesignDiv'>
                <div >
                <Image
                className='DesignDivImg'
                height={650}
                width={1000}
                alt="burger menu"
                src="/uxUiStockImg.jpg"
              ></Image> 
                              </div>
                <div>
                    <h1 className='DesignPara' ><span className='ExpSpan'>Designing with emotional intelligence  </span><br></br> is like crafting a warm embrace, welcoming visitors into a truly immersive experience. Our tailored solutions prioritize adaptability, accessibility, and seamless performance across all devices, ensuring every user feels valued. Ready to enrich your online presence? Reach out for a call back today, and let's create something truly exceptional together.</h1>
                </div>
            </div>

{/* explore */}

            <div className='ExploreDiv'>
                <h1 className='ExploreH'>Exploring ideas for a brighter tomorrow. <br></br>Let's innovate sustainably and thrive together.</h1>
                <button className='ExploreBtn'>Contact Us</button>
            </div>

        </div>
    );
}

export default UiUx;
