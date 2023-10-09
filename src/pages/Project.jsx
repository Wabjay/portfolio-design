import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { projectList } from "../data/Collections";
import Links from "../components/Links";

function Project() {
  const { id } = useParams();

  // Styles*********
  const techs = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    // marginTop: "1rem",
    width: "fit-content",
  };
  const list = {
    padding: "0.25rem 0.75rem",
    borderRadius: "2rem",
    backgroundColor: "rgba(45,212,191,.1)",
    width: "fit-content",
  };
// Styles*************

  const Heading = ({text, client, industry, tasks, link})=>{
    return(
      <div className="about_text relative mt-10">
      <p className={`mt-4 leading-normal`}>{text}</p>
      <div>
        {client && (
          <>
          <div className="mt-4 flex  flex-col gap-4 md:flex-row md:gap-0">
            <div className="">
              <p className="tet-2xl font-bold">Client:</p>
              <p>{client}</p>
            </div>
            <div className="">
              <p className="tet-2xl font-bold">Industry:</p>
              <p>{industry}</p>
            </div>
          </div>
          <div className="mt-4">
              <p className="tet-2xl font-bold">Link:</p>
              <a href={link} target="_blank" rel="noreferrer">{link}</a>
            </div></>
        )}
       
        <div className="mt-4">

          <p className="tet-2xl font-bold mb-2">Technologies:</p>

          <ul style={techs} className="md:flex pl-5">
            {tasks.map((task, index) => (
              <li
                key={index}
                style={list}
                className={` text-teal-300`}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      )
  }

  return (
    <>
      {projectList.map(
        (project, index) =>
          project.path === id && (
            <React.Fragment key={project.path}>
              <Layout
                title={project.title}
                header={
                  <Heading
                    text={project.text}
                    tasks={project.tasks}
                    client={project.client}
                    industry={project.industry}
                    link={project.link}
                  />
                }
              >
                <div className="mt-10">
                  {project.img.map(
                    (img, index) =>
                      index > 0 && (
                        
                        <img
                          key={index}
                          src={img}
                          alt=""
                          className="w-[90%] mx-auto mb-8 h-fit"
                        >{console.log(img)}</img>
                      )
                  )}
                  <div className="mt-4 text-center mx-auto flex gap-8 justify-between w-[200px]">
                    {index > 0 && (
                        <Links
                          key={index}
                          back={true}
                          text="Prev"
                          link={`/project/${projectList[index - 1].path}`}
                        />
                    )}

                    {projectList.length - 1 > index && (
                        <Links
                          key={index}
                          arrow={true}
                          text="Next"
                          link={`/project/${projectList[index + 1].path}`}
                        />
                    )}
                  </div>
                </div>
              </Layout>
            </React.Fragment>
          )
      )}
    </>
  );
}

export default Project;
