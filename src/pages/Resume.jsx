import React from "react";
// import styles from '../components/Companies/Resume.module.css';
import styles from "../components/Companies/Resume2.module.css";
import Layout from "../components/Layout";
// import Companies from '../components/Companies/Companies';
import Companies from "../components/Companies/Companies2";
import { skills, technologies } from "../data/Collections";
import Social from "../components/Social";
import Projects from "../components/Projects";
// import Header from "../components/Header";

function heading() {
  return (
  <>
      <p
        className={`${styles.subtitle} mb-1 mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl`}
      >
        Frontend Developer
      </p>
      <p className={` mt-4 max-w-xs leading-normal`}>
        I’ve worked on a handful of web projects over the years, some of which
        were for the following organizations:
      </p>
      <Social />
      </>
      )
}


function Resume() {
     
  
  return (
    <Layout title="Abdulwahab Jimoh" 
    // Header part of each pages
    header={<>
      <p
        className={`${styles.subtitle} mb-1 mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl`}
      >
        Frontend Developer
      </p>
      <p className={` mt-4 max-w-xs leading-normal`}>
        I’ve worked on a handful of web projects over the years, some of which
        were for the following organizations:
      </p>
      <Social />
      </>}>


      <div className="resume">
     
      
        {/* <a href='#' className={`${styles.link} mr-6`}>wabjay.dev</a>
        <a href='mailto:omoniyi.success@gmail.com' className={`${styles.link}`}>hello@wabjay.dev</a>
        </div><p className={`${styles.link}`}>Lagos, Nigeria</p> */}
        <div className="pt-24 lg:py-24">
          <section
            id="about"
            className="mb-16 md:mb-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 mb-4 w-screen  py-5 lg:relative lg:top-auto lg:w-full lg:py-0">
              <h2 className="text-sm font-bold uppercase tracking-widest ">
                About
              </h2>
            </div>

            <p className={`${styles.text} mb-4 `}>
              I’ve worked on a handful of web projects over the years, some of
              which were for the following organizations:
            </p>
          </section>
          <Companies />
          <Projects showlink={true} />
        </div>
      </div>

    </Layout>
  );
}

export default Resume;
