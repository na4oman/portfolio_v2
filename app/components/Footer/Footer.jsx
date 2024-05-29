import { socialLinks } from '@/app/constants/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='my-8'>
      <nav>
        <ul className='flex justify-center gap-4 mb-6 text-accent'>
          {socialLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} target='_blank'>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className='text-center text-sm'>
        Copyright &copy; 2024 by{' '}
        <span className='heading text-2xl text-accent hover:rotate-[-10deg] hover:scale-110 transition-transform duration-300 inline-block'>
          Atanas Irikev
        </span>
        . All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
