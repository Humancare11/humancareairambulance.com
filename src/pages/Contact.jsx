import React from 'react'
import PageBanner from '../components/PageBanner'
import ContactForm from '../components/ContactForm'
import { Helmet } from "react-helmet";


function Contact() {
  return (
    <>
    <Helmet>
      <title>Contact - Mumbai, India: Humancare Air Ambulance</title>
      <meta
        name="description"
        content="Contact us for fast and affordable air ambulance patient transfer in Mumbai. Call +919699999067 for more details."
      />
      <meta
        name="keywords"
        content="air ambulance Mumbai, contact air ambulance, patient transfer, emergency air ambulance, Humancare"
      />
      <link rel="canonical" href="https://www.humancareairambulance.com/contact" />
    </Helmet>
   <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-primary-red">Us</span>
          </h1>
        }
        subtitle="For over 20+ years, Humancare has been at the forefront of medical transport services, combining advanced medical technology with compassionate care to save lives and provide hope during critical moments."
      />
    <ContactForm/>
    </>
  )
}

export default Contact