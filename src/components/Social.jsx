import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'

function Social() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li className="mr-5 text-xs"><a href="https://github.com/wabjay" className='text-text hover:text-teal-300 focus-visible:text-teal-300 nav'><GitHub /></a></li>
    <li className="mr-5 text-xs"><a href="https://instagram.com/wabjay" className='text-text hover:text-teal-300 focus-visible:text-teal-300 nav'><Instagram /></a></li>
    <li className="mr-5 text-xs"><a href="https://twitter.com/itz_wabjay" className='text-text hover:text-teal-300 focus-visible:text-teal-300 nav'><Twitter /></a></li>
    <li className="mr-5 text-xs"><a href="https://www.linkedin.com/in/wabjay/" className='text-text hover:text-teal-300 focus-visible:text-teal-300 nav'><LinkedIn /></a></li>
  </ul>
  )
}

export default Social