import React from 'react'
import "../../Style/Foorm.css"

function Form() {
  return (
    <div className='formMainDiv'>

    <h1 className='formTitle'>Get In Touch</h1>
    <p  className='formPara'>We are excited to provide you solutions!</p>

<div class="rowform">
  <div  className="column1">

  <form>
            <input type='text' id="name" name='name' className='firstnamebox' placeholder='First Name*'/>

            <br></br>

            <input type='text' id='email' name='email' placeholder='Last Name*'/>

            <br></br>

            <input type='text' id='number' name='number' placeholder='Company'/>

            <br></br>


            <input type='text' placeholder='Job Title*'/>

            <br></br>

            <input type='email' placeholder='Email Address**'/>

            <br></br>

            <div className='ml-16'>
    <input type="checkbox" id="scales" name="scales"  />
    <label for="scales">I agree to the privacy policy.</label>
  </div>

  <div className='ml-16'>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Subscribe me to Paperfold’s latest thought leadership, blogs and updates.</label>
  </div>



            <button className='ml-16'>Submit</button>
        </form>



  </div>
  <div className="column2" >
   
  <textarea id="w3review" name="w3review" rows="10  " cols="50" placeholder='How can we help you?' className='textareaform'></textarea>
  <p>You can also email us directly at support@paperfold.in</p>



  </div>
</div>



    </div>
  )
}

export default Form