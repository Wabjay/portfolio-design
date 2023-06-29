import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='text-center mb-5 mt-20'>
        <p className='text-text uppercasen'>©{year} Abdulwahab Jimoh</p>
    </div>
  )
}

export default Footer