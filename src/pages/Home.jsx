import React from 'react'
import Layout from '../components/Layout'
import Social from "../components/Social";

function Home() {
  return (
    <Layout title="Welcome" header={
      <div className='about_text relative mt-10'>
      <p className='mb-2'>Hello! My name is Jimoh Abdulwahab, I am a front-end developer based in Nigeria. I spend most of my time on Javascript and my main focus is React and Next-Js.</p>
      <p className='mb-2'>In the past i worked on Ethco admin dashboard and landing pages as a frontend engineeer with react-next js and redux for state management. Before Ethco, I developed the complete web app and admin dashboard of ayrem a digital platform that provides access to exchanging digital assets as a frontend developer.</p>
      <p className='mb-2'>These days, I focus more on building web interfaces with reactjs, nextjs, Bootstrap and TailwindCSS based on the project and the client's requirement.</p>
     <div className="pl-5"><Social /></div>
      </div>
    }>
    </Layout>
        
     
  )
}

export default Home