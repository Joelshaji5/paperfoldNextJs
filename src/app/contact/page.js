'use client'

import React from 'react'
import Form from '../Component/ContactForm/Form'
import Footer from '../Component/HomePageComponent/Footer/Footer'
import { useState } from 'react'
import Testing from "../Component/HomePageComponent/Testing";

function page() {
  return (
    <div>
      <Testing />
    <Form />
    <Footer />

    </div>
  )
}

export default page