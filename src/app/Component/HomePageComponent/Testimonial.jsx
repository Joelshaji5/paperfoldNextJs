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
              <h1>John Doe, Orgniztn.</h1>
              <p>
                Best market researchers, always updated with technology and
                methods. Their market advice increases my revenue by almost 50%
                and still working to achieve even more.
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
              <h1>John Doe, Orgniztn.</h1>
              <p>
                Best market researchers, always updated with technology and
                methods. Their market advice increases my revenue by almost 50%
                and still working to achieve even more.
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
              <h1>John Doe, Orgniztn.</h1>
              <p>
                Best market researchers, always updated with technology and
                methods. Their market advice increases my revenue by almost 50%
                and still working to achieve even more.
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
