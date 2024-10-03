import React, { useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Colab",
      image: "/CoLab.png",
      description:
        "This was the final group project of my Web Development program. Colab is a collaborative platform that allows developers to create, join, and manage programming projects. Users can discover projects, collaborate with team members, and effectively manage project details. The app features user authentication, real-time chat, and a project-dependent link for GitHub, Trello, and Figma to streamline the project management process.",
      techStack:
        "Javascript, React + Vite, Node.js, Express, PostgreSQL, Socket.io, Tailwind CSS, DaisyUI",
      link: "https://github.com/rosario-je/CoLab",
    },
    {
      title: "Poke Collection",
      image: "/PokeCollection.png",
      description:
        "This project was based off of the repo and tutorial by Github user imteekay. It uses the PokeApi to populate the pokemon data. You can add pokemon from the 'Wild Encounters' list to the 'Pokedex' list with each pokemon having a custom background color based on their type. The app uses local storage to track the pokemon in your lists as well as any you add with the search bar and sprite color (normal or shiny).",
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

  const handleOpenModal = (project) => {
    setActiveProject(project);
    onOpen();
  };

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
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-y-10 md:gap-y-20 lg:gap-y-20">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="sm:gap-2 md:gap-5 lg:gap-5 flex-grow-0 flex-shrink-0 flex-col bg-accent sm:h-[13rem] sm:w-[15rem] md:h-[20rem] md:w-[25rem] lg:h-[20rem] lg:w-[25rem] rounded-2xl relative before:absolute before:sm:h-[13rem] before:sm:w-[15rem] before:md:h-[20rem] before:md:w-[25rem] before:lg:h-[20rem] before:lg:w-[25rem] before:rounded-2xl before:bg-secondary before:top-2 before:left-3 before:-z-10 flex justify-center items-left">
                <h3 className="text-buttons pl-8">{project.title}</h3>
                <p className="sm:text-sm md:text-base lg:text-lg text-buttons sm:max-h-[3.75rem] md:max-h-[4.5rem] lg:max-h-[5rem] font-body line-clamp-3 px-8 pb-5">
                  {project.description}
                </p>
                <motion.div
                  onClick={() => handleOpenModal(project)}
                  className="
                    ml-8 relative flex items-center justify-center sm:h-[1.5rem] sm:w-[6.5rem] md:h-[2rem] md:w-[8rem] lg:h-[2.5rem] lg:w-[8.5rem] sm:bg-secondary md:bg-secondary lg:bg-contrast rounded-full overflow-hidden sm:text-sm md:text-base lg:text-lg font-body
                    sm:before:absolute before:sm:h-[1.5rem] before:sm:w-[6.5rem] sm:before:rounded-full sm:before:bg-contrast sm:before:right-1 md:before:absolute before:md:h-[2rem] before:md:w-[8rem] md:before:rounded-full md:before:bg-contrast md:before:right-2 lg:before:hidden cursor-pointer"
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
                    Read More
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
              </div>
              {/* Modal to show project details */}
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                backdrop="blur"
                className="max-w-5xl bg-background"
                hideCloseButton={true}
              >
                <ModalContent>
                  <>
                    <ModalHeader className="flex flex-col">
                      <button
                        onClick={() => onOpenChange(false)} // Close modal on click
                        className="absolute top-4 right-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center"
                      >
                        <motion.svg
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial="initial"
                          animate="initial"
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height="100%" // Make it responsive
                          width="100%" // Adjust based on button size
                          role="presentation"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 focus:outline-none"
                        >
                          <path d="M18 6L6 18M6 6l12 12"></path>
                        </motion.svg>
                      </button>
                      <h3>{activeProject?.title}</h3>
                    </ModalHeader>
                    <ModalBody>
                      <img
                        src={activeProject?.image}
                        alt={activeProject?.title}
                        className="rounded-xl border-3 border-text"
                      />
                      <p className="sm:text-sm md:text-base lg:text-lg text-text font-body">
                        {activeProject?.description}
                      </p>
                      <div className="flex flex-col">
                        <p className="font-bold sm:text-sm md:text-base lg:text-lg text-text font-body pr-2">
                          Tech Stack:
                        </p>
                        <p className="sm:text-sm md:text-base lg:text-lg text-text font-body">
                          {activeProject?.techStack}
                        </p>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <motion.div
                        onClick={() => window.open(activeProject?.link)}
                        className="
                    ml-8 relative flex items-center justify-center sm:h-[1.5rem] sm:w-[6.5rem] md:h-[2rem] md:w-[8rem] lg:h-[2.5rem] lg:w-[8.5rem] sm:bg-secondary md:bg-secondary lg:bg-contrast rounded-full overflow-hidden sm:text-sm md:text-base lg:text-lg font-body
                    sm:before:absolute before:sm:h-[1.5rem] before:sm:w-[6.5rem] sm:before:rounded-full sm:before:bg-accent sm:before:right-1 md:before:absolute before:md:h-[2rem] before:md:w-[8rem] md:before:rounded-full md:before:bg-accent md:before:right-2 lg:before:hidden cursor-pointer"
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
                          View Code
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
                    </ModalFooter>
                  </>
                </ModalContent>
              </Modal>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
