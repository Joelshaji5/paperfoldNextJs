import React from 'react'
import Navbar from '../Component/HomePageComponent/Testing'
import ServiceList from '../Component/Services/Servicelist'
import Form from '../Component/ContactForm/Form'
import Footer from '../Component/HomePageComponent/Footer/Footer'

const page = () => {
  return (
    <div>

    <Navbar />
    <ServiceList />
    <Form />
    <Footer />


    </div>
  )
}

export default page