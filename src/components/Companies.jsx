import React from "react";
import styles from "../styles/Resume.module.css";
import { companies, skills, technologies } from "../data/Collections";
import Links from "./Links";
function Companies() {
 

  // Secon Model Design from Brittany
  return (
  //    <div className={` mb-16 md:mb-24`}>
  // <div className={`${styles.experience}`}>
  //     <div className={styles.sidebar}>
  //       <div className={styles.section}>
  //         <p
  //           className={`${styles.core} text-sm font-bold uppercase tracking-widest`}
  //         >
  //           Technologies:
  //         </p>
  //         <ul className={styles.skills}>
  //           {technologies.map((tech, index) => (
  //             <li key={index} className={styles.text}>
  //               {tech}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div className={styles.section}>
  //         <p
  //           className={`${styles.core} text-sm font-bold uppercase tracking-widest`}
  //         >
  //           Others:
  //         </p>
  //         <ul className={styles.skills}>
  //           {skills.map((skill, index) => (
  //             <li key={index} className={styles.text}>
  //               {skill}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
      <div className={styles.details}>
        <h2 className="text-sm font-bold uppercase tracking-widest">Experience</h2>
        {companies.map((company, index) => (
          <div className={styles.top_role} key={index}>
            <div className={`mb-2`}>
              <div>
                <Links text={company.name} link={company.link} target={true}/>
                {/* <a
                  href={company.link}
                  className={`${styles.header} ${styles.company_header} mr-2 font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base`}
                >
                  {company.name}
                </a> */}
                <span className={styles.text}> - {company.role}</span>
              </div>
              <span className={styles.date}> {company.contract} | </span>
              <span className={styles.date}> {company.date.start} - {company.date.end}</span>
            </div>
            <p className={`${styles.text}`}>{company.brief}</p>
            <ul className={`${styles.techs}`}>
              {company.tasks.map((task, index) => (
                <li key={index} className={`${styles.list} text-teal-300`}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    // </div>
    // </div>
  );
}

export default Companies;
