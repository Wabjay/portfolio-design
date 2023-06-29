import React from 'react'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

function Project() {
  return (
    <Layout title="Projects"
    // Header part of each pages
    header={
      <div className='about_text relative mt-10'>
      <p className={` mt-4 max-w-xs leading-normal`}>
        I’ve worked on a handful of web projects over the years, some of which
        were for the following organizations:
      </p>
      </div>}>

      <Projects />
        
        </Layout>
  )
}

export default Project