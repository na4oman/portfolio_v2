import React from 'react'
import Mapbox from '../Mapbox/Mapbox'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className='mb-16 px-4 lg:px-0 pt-20' id='contact'>
      <h2 className='text-accent text-5xl mb-6 heading'>Let's Chat!</h2>
      <div className='flex flex-col lg:flex-row gap-20 lg:gap-10'>
        <div className='flex-1'>
          <p>
            Want to get in touch? Whether you're interested in working on a
            project together or just want to say hello, feel free to leave me a
            message and I'll get back to you as soon as I can! You can also
            check out my social links in the footer of the sidebar to get in
            touch that way.
          </p>
          <div className='flex justify-center'>
            <ContactForm />
          </div>
        </div>
        <div className='flex-1'>
          <Mapbox />
        </div>
      </div>
    </section>
  )
}

export default Contact
