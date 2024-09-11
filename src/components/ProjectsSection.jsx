import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const projects = [
    {
      title: "Colab",
      image: "/CoLab.png",
      description:
        "This was my final group project of my Web Development program. Colab is a collaborative platform that allows developers to create, join, and manage programming projects. Users can discover projects, collaborate with team members, and effectively manage project details. The app features user authentication, real-time chat, and a project dependant links for GitHub, Trello, and Figma to streamline the project management process.",
      techStack:
        "Javascript, React + Vite, Node.js, Express, PostgreSQL, Socket.io, Tailwind CSS, DaisyUI",
      link: "https://github.com/rosario-je/CoLab",
    },
    {
      title: "Poke Collection",
      image: "/PokeCollection.png",
      description: ` This project was based off of the repo and tutorial by Github user imteekay. It uitilizes the PokeApi to populate the pokemon data. You can add pokemon from the 'Wild Encounters' list to the 'Pokedex' list with each pokemon having a custom background color based on their type. The app uses local storage to track the pokemon in your lists as well as any you add with the search bar and sprite color (normal or shiny).`,
      techStack: "Javascript, React, Tailwind CSS, Framer Motion",
      link: "https://github.com/beccasbizarreadventure/PokeCollection",
    },
    {
      title: "Plot Twist",
      image: "/PlotTwist.png",
      description: "Description here",
      techStack: "Javascript",
      link: "https://github.com/rosario-je/PlotTwist",
    },
  ];
  return (
    <div
    style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
    }}
  >
    <section
      id="projects"
      ref= {ref}
      className="section h-[145rem] pl-20 items-left justify-center"
    >
      <h1 className="font-header text-6xl text-header_text pb-[5rem]">
        PROJECTS
      </h1>
      <div className="flex flex-col">
        {projects.map((project, index) =>
          index % 2 === 0 ? (
            // Right Side (Odd Index)
            <div key={index} className="flex flex-row justify-between pb-20">
              <div className="flex flex-col">
                <h2 className="text-header_text font-header text-4xl pb-2">
                  {project.title}
                </h2>
                <p className="text-text font-body text-lg pb-2 pr-60">
                  {project.description}
                </p>
                <p className="text-text font-body text-lg pb-2 pr-60">
                  <span className="font-bold">Tech Stack - </span>
                  {project.techStack}
                </p>
                <a href={project.link}>
                  <motion.div
                    className="relative flex items-center justify-center h-[2.5rem] w-[6.5rem] bg-contrast rounded-full overflow-hidden text-lg font-body"
                    whileHover="hover" // Parent triggers hover state
                    whileTap={{ scale: 0.9 }}
                    initial="initial"
                    animate="initial"
                  >
                    <motion.span
                      className="absolute bg-contrast px-4 text-buttons z-1"
                      variants={{
                        initial: { x: 0 },
                        hover: { x: -15 },
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      View
                    </motion.span>
                    <motion.i
                      className="fa-solid fa-circle-chevron-right absolute right-4 text-buttons z-0"
                      variants={{
                        initial: { x: 0, opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </a>
              </div>
              <div className="flex-grow-0 flex-shrink-0 before:flex-grow-0 before:flex-shrink-0 mr-60 bg-accent h-[25rem] w-[30rem] rounded-2xl relative before:absolute before:h-[25rem] before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:left-3 before:-z-10 flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[20rem] w-[25rem] rounded-2xl border-4 border-buttons"
                />
              </div>
            </div>
          ) : (
            // Left Side (Even Index)
            <div key={index} className="flex flex-row justify-between pb-20">
              <div className="flex-grow-0 flex-shrink-0 before:flex-grow-0 before:flex-shrink-0 bg-accent h-[25rem] w-[30rem] rounded-2xl relative before:absolute before:h-[25rem] before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:right-3 before:-z-10 flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[20rem] w-[25rem] rounded-2xl border-4 border-buttons"
                />
              </div>
              <div className="flex flex-col mr-60">
                <h2 className="text-header_text font-header text-4xl pb-2 pl-60">
                  {project.title}
                </h2>
                <p className="text-text font-body text-lg pb-2 pl-60">
                  {project.description}
                </p>
                <p className="text-text font-body text-lg pb-2 pl-60">
                  <span className="font-bold">Tech Stack - </span>
                  {project.techStack}
                </p>
                <a href={project.link}>
                  <motion.div
                    className="relative flex items-center justify-center h-[2.5rem] w-[6.5rem] bg-contrast rounded-full overflow-hidden text-lg font-body z-1 ml-60"
                    whileHover="hover" // Parent triggers hover state
                    whileTap={{ scale: 0.9 }}
                    initial="initial"
                    animate="initial"
                  >
                    <motion.span
                      className="absolute bg-contrast px-4 text-buttons z-1"
                      variants={{
                        initial: { x: 0 },
                        hover: { x: -15 },
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      View
                    </motion.span>
                    <motion.i
                      className="fa-solid fa-circle-chevron-right absolute right-4 text-buttons z-0"
                      variants={{
                        initial: { x: 0, opacity: 0 }, // Icon is hidden and starts in the center
                        hover: { opacity: 1 }, // Icon moves right and becomes visible on hover
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  </div>
  );
};

export default ProjectsSection;
