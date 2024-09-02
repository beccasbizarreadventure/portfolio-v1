import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PROJECT TITLE HERE",
    description: "Description here",
    link: "link here",
  },
  {
    title: "PROJECT TITLE HERE",
    description: "Description here",
    link: "link here",
  },
  {
    title: "PROJECT TITLE HERE",
    description: "Description here",
    link: "link here",
  },
  {
    title: "PROJECT TITLE HERE",
    description: "Description here",
    link: "link here",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="section h-[145rem] pl-20 items-left justify-center"
    >
      <h1 className="font-header text-6xl text-header_text pb-[5rem]">
        PROJECTS
      </h1>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          index % 2 === 0 ? (
            // Left Side (Even Index)
            <div key={index} className="flex flex-row justify-between pb-20">
              <div className="bg-accent h-[25rem] w-[30rem] rounded-2xl relative before:absolute before:h-[25rem] before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:right-3 before:-z-10"></div>
              <div className="flex flex-col mr-60">
                <h2 className="text-text font-header text-4xl pb-2">
                  {project.title}
                </h2>
                <p className="text-text font-body text-lg pb-2">
                  {project.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-end"
                >
                  <a href={project.link}>
                    <button className="h-[2.5rem] w-[6rem] rounded-full text-lg text-buttons bg-contrast relative before:absolute before:h-[2.5rem] before:w-[6rem] before:rounded-full before:bg-secondary before:top-0 before:right-2 before:-z-10">
                      View
                      <i className="fa-solid fa-circle-chevron-right pl-2"></i>
                    </button>
                  </a>
                </motion.div>
              </div>
            </div>
          ) : (
            // Right Side (Odd Index)
            <div key={index} className="flex flex-row justify-between pb-20">
              <div className="flex flex-col">
                <h2 className="text-text font-header text-4xl pb-2">
                  {project.title}
                </h2>
                <p className="text-text font-body text-lg pb-2">
                  {project.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={project.link}>
                    <button className="h-[2.5rem] w-[6rem] rounded-full text-lg text-buttons bg-contrast relative before:absolute before:h-[2.5rem] before:w-[6rem] before:rounded-full before:bg-secondary before:top-0 before:left-2 before:-z-10">
                      View
                      <i className="fa-solid fa-circle-chevron-right pl-2"></i>
                    </button>
                  </a>
                </motion.div>
              </div>
              <div className="mr-60 bg-accent h-[25rem] w-[30rem] rounded-2xl relative before:absolute before:h-[25rem] before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:left-3 before:-z-10"></div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
