import React from 'react'
import styles from "../styles/Resume.module.css";
import { companies, skills, technologies } from "../data/Collections";
import Links from "./Links";


function Techologies() {
  return (
    
        <div className={`${styles.sidebar}`}>
          <div className={styles.section}>
            <p
              className={`${styles.core} text-sm font-bold uppercase tracking-widest`}
            >
              Technologies
            </p>
            <ul className={styles.skills}>
              {technologies.map((tech, index) => (
                <li key={index} className={styles.text}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <p
              className={`${styles.core} text-sm font-bold uppercase tracking-widest`}
            >
              Others
            </p>
            <ul className={styles.skills}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.text}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
  )
}

export default Techologies