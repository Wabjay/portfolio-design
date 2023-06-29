import React from 'react'
import style from '../styles/Layout.module.css'
import Links from './Links'
function Layout(props) {
 
  const path = window.location.pathname

  return (
    <div className={`${style.content}  p-5 md:py-[5rem] bg-premium_dark`}>
    <div className={style.home_content}>
     <div className={`${style.about} relative`}>
       <p className={`text-2xl capitalize font-bold tracking-tight sm:text-5xl`}>{props.title}</p>
      {props.header}
     </div>
   
     <div className={`${style.links}`}>
       {/* <p className='text-[2rem] '>Links</p> */}
       <div className='page-links mt-4 relative'>
       <ul className={`bg-premium_dark rounded-t-lg`}>
       {path != "/" && <li><a href="/" className={`text-text text-xl`}>Home</a></li>} 
        {/* {path != "/experience" && <li><a href="/experience" className={`text-text text-xl`}>Experience</a></li>}  */}
        {path != "/resume" && <li><a href="/resume" className={`text-text text-xl`}>Résumé</a></li>}
          {path != "/projects" &&<li><a href="/projects" className={`text-text text-xl`}>Projects</a></li>}
          {path != "/contact" && <li><a href="/contact" className={`text-text text-xl`}>Contact</a></li>}
       </ul>
       {path == "/resume" &&  <div className={`mt-6`}>
       <Links download={true} text="Download Résumé" link="/resume.pdf"/>
          </div>}

       <div className={style.top_line}></div>

       </div>
     </div>
     {/* </div> */}
    </div>
    {props.children}

   </div>
  )
}

export default Layout