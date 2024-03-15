import React, { useState } from 'react';
import "../../Style/TestimonialSection.css";
import Image from 'next/image';

function Testimonial() {
  const [showData, setShowData] = useState(1);

  return (
    <div className='bgTesttimonial'>
      <div>
        <h1 className='testimonialHeading'>Don’t Trust Us! Trust Them</h1>
      </div>
      <div className='dotedLine'>
        <div className=' logoContainer '>
          <div>
            <img
              className='logoTestimonial'
              src='/dont-trust1.png'
              onMouseEnter={() => setShowData(1)}
            />
            <div className={showData === 1 ? 'activeTestimonial activeTestimonialfade' : 'nonetest'}>
              <h1>Abhinav, Nanoswab Solutions.</h1>
              <p>
              We Appreciate the amount of efforts Paperfold put to develop out technical infra. It&apos;s been 3 years and we are up and running smoothly.
              </p>
            </div>
          </div>

          <div>
            <img
              className='logoTestimonial'
              src='/dont-trust2.png'
              onMouseEnter={() => setShowData(2)}
            />
            <div className={showData === 2 ? 'activeTestimonial activeTestimonialfade' : 'nonetest'}>
              <h1>Tejaswini Patil, Proodos.</h1>
              <p>
              Paperfold has shown amazing team effort. They always have a unique approach towards things and come up with positive suggestions.
              </p>
            </div>
          </div>

          <div>
            <img
              className='logoTestimonial'
              src='/dont-trust3.png'
              onMouseEnter={() => setShowData(3)}
            />
            <div className={showData === 3 ? 'activeTestimonial activeTestimonialfade' : 'nonetest'}>
              <h1>Saket Dandotia, Linkites .</h1>
              <p>
              Paperfold Regular updates and achieving in minimum time trame make our work even easier to plan ahead for the next phase. kudos to them !  
              </p>
            </div>
          </div>

          <div>
            <img
              className='logoTestimonial'
              src='/dont-trust4.png'
              onMouseEnter={() => setShowData(4)}
            />
            <div className={showData === 4 ? 'activeTestimonial activeTestimonialfade' : 'nonetest'}>
              <h1>John Doe, Orgniztn.</h1>
              <p>
                Best market researchers, always updated with technology and
                methods. Their market advice increases my revenue by almost 50%
                and still working to achieve even more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
