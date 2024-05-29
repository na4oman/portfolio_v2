'use client'

import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { navLinks, themes } from '../../constants/constants.js'

const Navbar = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <nav className='navbar bg-base-100 text-accent sticky top-0 z-10'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navLinks.map(link => (
              <li key={link.id}>
                <a href={`#${link.href}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className='logo text-md sm:text-2xl' href='#'>
          Atanas Irikev
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.href}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        <select data-choose-theme className='select select-bordered select-xs'>
          <option value='dark'>Theme</option>
          {themes.map(theme => (
            <option value={theme} key={theme} className='capitalize'>
              {theme}
            </option>
          ))}
        </select>
      </div>
    </nav>
  )
}

export default Navbar
