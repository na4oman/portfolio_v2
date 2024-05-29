'use client'

import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const MyContactForm = () => {
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false)
      setSuccess(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [error, success])

  const validateInput = input => {
    const inputValue = input.value.trim()
    const isValid = inputValue !== '' && !/<(.*?)>/g.test(inputValue)

    setFormErrors(prevErrors => ({
      ...prevErrors,
      [input.name]: isValid ? '' : 'Invalid input',
    }))

    return isValid
  }

  const validateForm = () => {
    const newFormErrors = {}
    let isValid = true

    Object.keys(formData).forEach(fieldName => {
      const inputValue = formData[fieldName].trim()
      const isFieldValid = inputValue !== '' && !/<(.*?)>/g.test(inputValue)
      newFormErrors[fieldName] = isFieldValid ? '' : 'Invalid input'
      isValid = isValid && isFieldValid
    })

    setFormErrors(newFormErrors)
    return isValid
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
    validateInput(e.target)
  }

  const sendEmail = e => {
    e.preventDefault()

    if (!validateForm()) {
      console.log('Form validation failed')
      return
    }

    emailjs
      .sendForm(
        'service_9mptgeg',
        'template_0nutkc1',
        formRef.current,
        'NRV3mNUcDStpMKLfO'
      )
      .then(
        result => {
          setSuccess(true)
          // console.log(result.text)
        },
        error => {
          setError(error.text)
          // console.log(error)
        }
      )
      .then(
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      )
  }

  return (
    <form
      className='flex flex-col w-full max-w-2xl mt-4'
      onSubmit={sendEmail}
      ref={formRef}
    >
      <div className='flex flex-col md:flex-row gap-0 md:gap-4'>
        <div className='flex flex-1 flex-col mb-2'>
          <label htmlFor='name' className='form-control label-md w-full hidden'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            onBlur={e => validateInput(e.target)}
            placeholder='Full Name*'
            className='input input-bordered input-md w-full mb-4'
            required
          />
          <span className='text-xs text-error mt-[-10px] pl-4'>
            {formErrors.name}
          </span>
        </div>

        <div className='flex flex-1 flex-col mb-2'>
          <label
            htmlFor='email'
            className='form-control label-md w-full hidden'
          >
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            onBlur={e => validateInput(e.target)}
            placeholder='Email*'
            className='input input-bordered input-md w-full mb-4'
            required
          />
          <span className='text-xs text-error mt-[-10px] pl-4'>
            {formErrors.email}
          </span>
        </div>
      </div>

      <label htmlFor='subject' className='form-control w-full hidden'>
        Subject:
      </label>
      <input
        type='text'
        id='subject'
        name='subject'
        value={formData.subject}
        onChange={handleChange}
        onBlur={e => validateInput(e.target)}
        placeholder='Subject*'
        className='input input-bordered input-md w-full mb-2'
        required
      />
      <span className='text-xs text-error mt-[-2px] pl-4 mb-2'>
        {formErrors.subject}
      </span>

      <label htmlFor='message' className='form-control w-full hidden'>
        Message:
      </label>
      <textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        onBlur={e => validateInput(e.target)}
        placeholder='Message*'
        className='textarea textarea-bordered textarea-md w-full mb-2'
        rows='4'
        required
      />
      <span className='text-xs text-error mt-[-2px] pl-4 mb-4'>
        {formErrors.message}
      </span>

      <button type='submit' className='btn btn-outline btn-accent'>
        Send Message!
      </button>
      {error && <div className='alert alert-error mt-4'>{error}</div>}
      {success && (
        <div className='alert bg-accent text-primary-content mt-4'>
          You message has been sent successfully!
        </div>
      )}
    </form>
  )
}

export default MyContactForm
