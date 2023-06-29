import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { projectList } from "../data/Collections";

function Project() {
  const { id } = useParams();
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
  return (
    <>
      {projectList.map(
        (project) =>
          project.id === id && (
            <Layout
              title={project.title}
              key={project.id}
              // Header part of each pages
              header={
                <div className="about_text relative mt-10">
                  <p className={`mt-4 leading-normal`}>
                    {project.text}
                  </p>
                  <div>
                    {project.client && (<>
                      <div className="mt-4">
                        <p className="tet-2xl font-bold mb-2">Client:</p>
                        <p>{project.client}</p>
                      </div>
                      <div className="mt-4">
                      <p className="tet-2xl font-bold mb-2">Industry:</p>
                      <p>{project.industry}</p>
                    </div>
                    </>
                    )}
                    <div className="mt-4">
                      <p className="tet-2xl font-bold mb-2">Technologies:</p>

                      <ul style={techs} className="md:flex pl-5">
                        {project.tasks.map((task, index) => (
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
              }
            >
              <div className="mt-10">
              {project.img.map((img,index)=>
              index > 0 &&
              <img key={index} src={img} alt="" className="w-[90%] mx-auto mb-8 h-fit" />
              )}
              </div>
            </Layout>
          )
      )}
    </>
  );
}

export default Project;
