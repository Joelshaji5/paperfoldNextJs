import React from 'react'
import Image from 'next/image'
import "../../../Style/Footer.css"

function Footer() {
  return (
    <div className='FooterDiv flex justify-center flex-wrap' >

    <div className='footer1 '>
        <img className='mt' src='/PaperfoldWhiteLogo.png' ></img>
        
        <div className='mt-10'>
        <input type='text' id='Newsletter' name='Newsletter' placeholder='Subscribe to our newsletter* ' className='SubNewsletter pl-4' />
        <button className='SubBtn ml-2'>Subscribe</button>
        </div>

        <div className='flex w-[117px] justify-between ml-4 mt-9 flex-wrap'>
            <img src='twitter.png' />
            <img src='facebook.png' />

            <img src='instagram.png' />


            <a href='https://www.linkedin.com/company/paperfold-sequential-pvt-ltd/mycompany/'>
            <img  src='linkedinlogo.png'  />
            </a>
        </div>
    </div>

    <div className='flex flex-wrap'>

    <div className='ml-28 mt-[60px] pl-[70px] ServicefooterLine'>
      <h1 className='ServiceFooter  mb-3 '>Services</h1>
      <ul className='ulService'>
        <li>Digital Strategy & Design</li>
        <li>Software Product Engineering</li>
        <li>Cloud & Infrastructure</li>
        <li>Enterprise IT Security</li>
        <li>Data & Analytics</li>
        <li>Enterprise Integration</li>
        <li>Application Development & Management</li>
      </ul>
    </div>

    <div>
      <h1 className='OtherLinkFooter mt-[60px] mb-3'>Other Links</h1>
      <ul className='ulOtherLinkFooter'>
      <li>Sitemap</li>
      <li>Privacy Notice</li>
      <li>Cookie Policy</li>
      <li>Terms of Use</li>
      </ul>
    </div>

    </div>


    </div>
  )
}

export default Footer