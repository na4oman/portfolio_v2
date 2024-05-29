'use client'
import React, { useState } from 'react'

const About = () => {
  const [imgSrc, setImgSrc] = useState('')

  const showModalHandler = e => {
    const src = e.target.src.substr(21)
    document.getElementById('my_modal_2').showModal()
    setImgSrc(src)
  }

  return (
    <section className='mb-16 px-4 lg:px-0 pt-20' id='about'>
      <h2 className='text-accent text-center text-6xl mb-8 heading'>
        About me
      </h2>
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box max-w-[50rem] max-h-[95%] place-content-center p-0 rounded-none'>
          <img
            src={imgSrc}
            className='shadow-2xl object-contain object-center'
          />
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1'>
          I'm a self-taught Full Stack Web Developer with passion for building
          fully responsive user-friendly websites and web applications from
          scratch using proven design patterns combined with the latest
          technologies. I am looking for an opportunity where I can improve my
          coding skills and enhance my knowledge in both front-end and back-end
          technologies.
          <br />
          <br />
          More than three years ago, I first stumbled upon the term "web
          development", and that's when it all changed. I've started looking
          deeper into it, bought my first Udemy course and started watching
          YouTube videos, following some of the best channels and instructors.
          My current tech stack includes MUI for styling, NextJS as a front-end
          along with NextJS API routes for building API endpoints. MongoDB and
          Firebase are my preferred databases.
          <br />
          <br />I always strive to improve my coding skills and write concise,
          clean, reusable and readable code. I like the filling of satisfaction
          when a project is complete, or when you finally manage to solve an
          issue or implement a new feature you have been struggling with. All of
          these things are what I look forward to spending more time doing as a
          full-time web developer.
        </div>
        <div
          className='flex-2 grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center
        '
        >
          <img
            src='/images/certificates/html-css.jpg'
            className='max-w-sm shadow-2xl object-cover object-center'
            onClick={e => showModalHandler(e)}
          />
          <img
            src='/images/certificates/javascript.jpg'
            className='max-w-sm shadow-2xl object-cover object-center'
            onClick={e => showModalHandler(e)}
          />
          <img
            src='/images/certificates/men.jpg'
            className='max-w-sm shadow-2xl object-cover object-center'
            onClick={e => showModalHandler(e)}
          />
          <img
            src='/images/certificates/mern.jpg'
            className='max-w-sm shadow-2xl object-cover object-center'
            onClick={e => showModalHandler(e)}
          />
          <img
            src='/images/certificates/react.jpg'
            className='max-w-sm shadow-2xl object-cover object-center'
            onClick={e => showModalHandler(e)}
          />
          <img
            src='/images/certificates/web-developer-bootcamp.jpg'
            className='max-w-sm shadow-2xl object-cover object-center'
            onClick={e => showModalHandler(e)}
          />
        </div>
      </div>
    </section>
  )
}

export default About
