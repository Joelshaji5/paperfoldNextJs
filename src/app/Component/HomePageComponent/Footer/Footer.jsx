import React from 'react'
import Image from 'next/image'
import "../../../Style/Footer.css"

function Footer() {
  return (
    <div className='FooterDiv'>

    <div className='footer1'>
        <img src='/Logo.png' ></img>
        
        <div>
        <input type='text' id='Newsletter' name='Newsletter' placeholder='Subscribe to our newsletter*'/>
        <button className='SubBtn'>Subscribe</button>
        </div>

        <div className='flex '>
            <img src='twitter.png' />
            <img src='facebook.png' />

            <img src='instagram.png' />

            <img src='linkedin.png' />

        </div>
    </div>

    <div></div>


    </div>
  )
}

export default Footer