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
        "This was the final group project of my Web Development program. Colab is a collaborative platform that allows developers to create, join, and manage programming projects. Users can discover projects, collaborate with team members, and effectively manage project details. The app features user authentication, real-time chat, and a project dependant links for GitHub, Trello, and Figma to streamline the project management process.",
      techStack:
        "Javascript, React + Vite, Node.js, Express, PostgreSQL, Socket.io, Tailwind CSS, DaisyUI",
      link: "https://github.com/rosario-je/CoLab",
    },
    {
      title: "Poke Collection",
      image: "/PokeCollection.png",
      description: `This project was based off of the repo and tutorial by Github user imteekay. It uitilizes the PokeApi to populate the pokemon data. You can add pokemon from the 'Wild Encounters' list to the 'Pokedex' list with each pokemon having a custom background color based on their type. The app uses local storage to track the pokemon in your lists as well as any you add with the search bar and sprite color (normal or shiny).`,
      techStack: "Javascript, React, Tailwind CSS, Framer Motion",
      link: "https://github.com/beccasbizarreadventure/PokeCollection",
    },
    {
      title: "Plot Twist",
      image: "/PlotTwist.png",
      description:
        "This was the midterm project of my Web Development program. Plot Twist is a story creator app where users can create a new story and other users can add to the story. The app features liking stories and story contributions, user profile pages to manage stories and contributions, and a main page to view all the stories in the app.",
      techStack:
        "Javascript, EJS, Express, Node.js, PostgreSQL, SCSS, jQuery, Ajax",
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
        ref={ref}
        className="section h-auto sm:pl-10 md:pl-20 lg:pl-20 items-left justify-center"
      >
        <h2 className="pb-10">PROJECTS</h2>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`pb-20 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } flex flex-col`}
            >
              <div
                className={`
                  ${index % 2 === 0 ? "lg:mr-60" : "lg:ml-0"}
                  flex-grow-0 flex-shrink-0 bg-accent sm:h-[15rem] sm:w-[18rem] md:h-[20rem] md:w-[25rem] lg:h-[25rem] lg:w-[30rem] rounded-2xl relative before:absolute before:sm:h-[15rem] before:sm:w-[18rem] before:md:h-[20rem] before:md:w-[25rem] before:lg:h-[25rem] before:lg:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:left-3 before:-z-10 flex justify-center items-center`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="sm:h-[12rem] sm:w-[14rem] md:h-[15rem] md:w-[20rem] lg:h-[20rem] lg:w-[25rem] rounded-2xl border-5 border-buttons"
                />
              </div>
              <div
                className={`
                  ${index % 2 === 0 ? "lg:pr-20" : "lg:pl-40"}
              flex flex-col text-left sm:pt-10 md:pt-10 lg:pt-0`}
              >
                <h3 className="pb-2 sm:pr-20 md:pr-60 lg:pr-60">{project.title}</h3>
                <p className={`
                 ${index % 2 === 0 ? "lg:pr-20" : "lg:pl-0"}
                text-text font-body py-2 mx-auto lg:mx-0 sm:pr-20 md:pr-60 sm:text-sm md:text-base lg:text-lg`}>
                  {project.description}
                </p>
                <p className={`
                  ${index % 2 === 0 ? "lg:pr-20" : "lg:pl-0"}
                sm:pr-20 md:pr-60 text-text font-body pb-2 sm:text-sm md:text-base lg:text-lg`}>
                  <span className="font-bold">Tech Stack - </span>
                  {project.techStack}
                </p>
                <a href={project.link} className="lg:mx-auto lg:ml-0">
                  <motion.div
                    className="
                    relative flex items-center justify-center sm:h-[1.5rem] sm:w-[4.5rem] md:h-[2rem] md:w-[6rem] lg:h-[2.5rem] lg:w-[6.5rem] sm:bg-secondary md:bg-secondary lg:bg-contrast rounded-full overflow-hidden sm:text-sm md:text-base lg:text-lg font-body
                    sm:before:absolute before:sm:h-[1.5rem] before:sm:w-[4.5rem] sm:before:rounded-full sm:before:bg-contrast sm:before:right-1 md:before:absolute before:md:h-[2rem] before:md:w-[6rem] md:before:rounded-full md:before:bg-contrast md:before:right-2 lg:before:hidden"
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    initial="initial"
                    animate="initial"
                  >
                    <motion.span
                      className="absolute px-4 text-buttons z-1"
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
