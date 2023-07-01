import React from "react";
import styles from "../styles/Resume.module.css";
import { projectList } from "../data/Collections";
import Links from "./Links";
function Projects({showlink}) {

  const path = window.location.pathname

  // Secon Model Design from Brittany
  return (
    <div className={` mb-16 md:mb-24`}>
    <div className={``}>
      <div className={styles.details}>
        <h2 className="text-sm font-bold uppercase tracking-widest">Projects</h2>
        
        {projectList.map((project, index) => (
         <li className={`${styles.top_role} list-none`} key={index}>
          <div className={`group relative flex flex-col gap-4 pb-1 transition-all ${path == "/projects" && `sm:flex-row` } sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50`}>
            {/* <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div> */}
            <div className="z-10 sm:order-2 sm:col-span-6 w-full max-w-[570px]">
              <h3>
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href={`/project/${project.path}`}
                  // target="_blank"
                  // rel="noreferrer"
                  aria-label={project.title}
                >
                  <span className="hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                  {project.title}
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">
              {project.text}
              </p>
              <ul className={`${styles.techs}`}>
              {project.tasks.map((task, index) => (
                <li key={index} className={`${styles.list} text-teal-300`}>
                  {task}
                </li>
              ))}
            </ul>
            </div>
            <img
              alt={project.title}
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              className="rounded border-2 border-slate-200/10 max-h-[120px] transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{"aspect-ratio" : "auto 200 / 48"}}
              src={project.img[0]}
            />
          
          </div>
        </li>
        ))}
      </div>
    </div>
    {showlink &&
            <div className={`mt-6`}>
            <Links
              arrow={true}
              text="View Full Project Archive"
              link="/projects"
            />
          </div>
}
    </div>
  );
}

export default Projects;
