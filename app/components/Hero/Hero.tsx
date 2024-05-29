import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='hero sm:min-h-screen bg-base'>
      <div className='hero-content flex-col lg:flex-row'>
        <div>
          <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-b from-primary to-accent bg-clip-text text-transparent'>
            Hi,
            <br />
            I'm Atanas,
            <br />
            web developer
          </h1>
          <p className='pt-6 font-normal'>Full Stack Web Developer</p>
          <p className='pb-6 font-extralight'>
            JavaScript / React / NextJS / NodeJS / Express / MongoDB
          </p>
          <Link href='#contact' className='btn btn-accent'>
            Contact me!
          </Link>
        </div>
        <img
          src='images/profile/profile-picture.jpg'
          className='max-w-sm rounded-full w-60 h-60 sm:w-72 sm:h-72 m-8 shadow-2xl object-cover object-center mt-2 sm:mt-0'
        />
      </div>
    </section>
  )
}

export default Hero
