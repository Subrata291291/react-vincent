import React from 'react'
import ContactForm from '../sections/ContactForm'
import CommonBanner from '../components/CommonBanner';

const Contact = () => {
  return (
    <div>
      <CommonBanner title="Contact Us" current="Contact Us" />
      <ContactForm/>
    </div>
  )
}

export default Contact
