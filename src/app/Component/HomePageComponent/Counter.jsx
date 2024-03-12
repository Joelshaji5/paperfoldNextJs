import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../Style/Counter.css";

function Counter() {
  const [counterUp, setCounterUp] = useState(false);

  return (

    <div className="MilestoneBody flex">

        <div className="Milestonediv">
        <h2 className="milestoneTxt">Milestones</h2>
        </div>

   
        <div className="flex justify-center milestoneMainCounterDiv">
      <div >
        <ScrollTrigger
          className="ml-4 mr-10"
          onEnter={() => {
            setCounterUp(true);
          }}
          onExit={() => {
            setCounterUp(false);
          }}
        >
          <div>
            <div className="mt-5 -ml-[14] CounterTitile ">

            <div className="counterNumber">

              {counterUp && (
                <CountUp start={0} end={156} duration={2} delay={0} />
              )}
              <span className="ml-4">+</span>

              </div>

              <h2 >Websites</h2>
            </div>
          </div>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => {
            setCounterUp(true);
          }}
          onExit={() => {
            setCounterUp(false);
          }}
        >
          {" "}
          <div className="mbDiv">
            <div className="mt-5 -ml-[14] CounterTitile">
                <div className="counterNumber">
              {counterUp && (
                <CountUp start={0} end={58} duration={2} delay={0} />
              )}
              <span className="ml-4">+</span>
              </div>
              <h2>Mobile Applications</h2>
            </div>
          </div>
        </ScrollTrigger>
      </div>

      <div className="ml-16 MilestoneDiv2">
        <ScrollTrigger
          onEnter={() => {
            setCounterUp(true);
          }}
          onExit={() => {
            setCounterUp(false);
          }}
        >
          {" "}
          <div>
            <div className="mt-5 -ml-[14] CounterTitile">
            <div className="counterNumber">

            {counterUp && (
                <CountUp start={0} end={377} duration={2} delay={0} />
              )}
              <span className="ml-4">+</span>
                </div>

              <h2 className="BrandTitileHome">Branding & Content Handling</h2>
            
            </div>
          </div>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => {
            setCounterUp(true);
          }}
          onExit={() => {
            setCounterUp(false);
          }}
        >
          <div>
            <div className="mt-5 -ml-[14] CounterTitile">

            <div className="counterNumber">

            {counterUp && (
                <CountUp
                  start={0}
                  end={1254}
                  duration={2}
                  delay={0}
                  className="mt-28"
                />
              )}
              <span className="ml-4">+</span>

                </div>

              <h2>Digital Marketing</h2>

            
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>


    </div>


 
  );
}

export default Counter;


