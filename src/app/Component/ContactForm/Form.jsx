import React, { useRef }  from 'react'
import "../../Style/Foorm.css"
import emailjs from '@emailjs/browser';


function Form() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c3k779p', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className='formMainDiv'>


<div className='flex justify-center'>
<div >
    <h1 className='formTitle'>Get In Touch</h1>
    <p  className='formPara mb-9'>We are excited to provide you solutions!</p>


    </div>

    </div>


<div class="rowform ">
  <div  className="column1">

  <form ref={form} onSubmit={sendEmail}>
            <input type='text' id="name" name="user_name" className='firstnamebox' placeholder='First Name*'/>

            <br></br>

            <input type='text' id='email' name='last_name' placeholder='Last Name*'/>

            <br></br>

            <input type='text' id='number' name='Company' placeholder='Company'/>

            <br></br>


            <input type='text' placeholder='Job Title*' name='jobTitle'/>

            <br></br>

            <input type='email' placeholder='Email Address**' name='Email' />

            <br></br>

            <div className='ml-16 mt-7'>
    <input type="checkbox" id="scales" name="scales"  />
    <label for="scales" className='labePrivacyPolicy'>I agree to the privacy policy.</label>
  </div>

  <div className='ml-16 mt-2 '>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns" className='labelSubscriveForm'>Subscribe me to Paperfold’s latest thought leadership, blogs and updates.</label>
  </div>


  <input type="submit" value="Send" className='ml-16 submitFormBtn' />
        </form>



  </div>
  <div className="column2" >
  <img className='formimg'  src='./formImg.png' ></img>

  <textarea id="w3review" name="w3review" rows="10  " cols="50" placeholder='How can we help you?' className='textareaform'></textarea>
  <p className='supportFormTxt'>You can also email us directly at support@paperfold.in</p>



  </div>


</div>



    </div>
  )
}

export default Form