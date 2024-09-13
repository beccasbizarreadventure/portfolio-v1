import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Tooltip } from "@nextui-org/tooltip";
import { motion } from "framer-motion";

const MiniNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Framer Motion animation properties
  const motionProps = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };

  return (
    <nav className="fixed flex sm:flex-row sm:left-10 sm:items-center md:flex-col md:right-20 md:items-end lg:flex-col lg:right-20 lg:items-end z-50">
      <ul className="flex justify-center items-center text-navlinks bg-nav sm:text-base sm:h-[2.5rem] sm:w-[12rem] sm:flex-row md:text-xl md:h-[13rem] md:w-[3.5rem] md:flex-col lg:text-xl lg:h-[14rem] lg:w-[4rem] lg:flex-col rounded-full mt-10">
      <li>
          {/* Tooltip for large screens */}
          <div className="hidden lg:block">
            <Tooltip
              placement="left-end"
              motionProps={motionProps}
              offset={25}
              content={
                <motion.span
                  className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body"
                  initial={motionProps.initial}
                  animate={motionProps.animate}
                  exit={motionProps.exit}
                  transition={motionProps.transition}
                >
                  Home
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("home")}>
                <i className="fa-solid fa-house p-2"></i>
              </button>
            </Tooltip>
          </div>

          {/* motion.span for small and medium screens */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("home")}
            className="lg:hidden sm:p-2 md:p-1"
          >
            <i className="fa-solid fa-house"></i>
          </motion.button>
        </li>

        <li>
          <div className="hidden lg:block">
            <Tooltip
              placement="left-end"
              motionProps={motionProps}
              offset={25}
              content={
                <motion.span
                  className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body"
                  initial={motionProps.initial}
                  animate={motionProps.animate}
                  exit={motionProps.exit}
                  transition={motionProps.transition}
                >
                  About Me
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("intro")}>
                <i className="fa-regular fa-face-smile p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("intro")}
            className="lg:hidden p-1"
          >
            <i className="fa-regular fa-face-smile"></i>
          </motion.button>
        </li>

        <li>
          <div className="hidden lg:block">
            <Tooltip
              placement="left-end"
              motionProps={motionProps}
              offset={25}
              content={
                <motion.span
                  className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body"
                  initial={motionProps.initial}
                  animate={motionProps.animate}
                  exit={motionProps.exit}
                  transition={motionProps.transition}
                >
                  Education
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("education")}>
                <i className="fa-solid fa-user-graduate p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("education")}
            className="lg:hidden sm:p-2 md:p-1"
          >
            <i className="fa-solid fa-user-graduate"></i>
          </motion.button>
        </li>

        <li>
          <div className="hidden lg:block">
            <Tooltip
              placement="left-end"
              motionProps={motionProps}
              offset={25}
              content={
                <motion.span
                  className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body"
                  initial={motionProps.initial}
                  animate={motionProps.animate}
                  exit={motionProps.exit}
                  transition={motionProps.transition}
                >
                  Projects
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("projects")}>
                <i className="fa-regular fa-pen-to-square p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("projects")}
            className="lg:hidden sm:p-2 md:p-1"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </motion.button>
        </li>

        <li>
          <div className="hidden lg:block">
            <Tooltip
              placement="left-end"
              motionProps={motionProps}
              offset={25}
              content={
                <motion.span
                  className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body"
                  initial={motionProps.initial}
                  animate={motionProps.animate}
                  exit={motionProps.exit}
                  transition={motionProps.transition}
                >
                  Contact
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("contact")}>
                <i className="fa-regular fa-id-card p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("contact")}
            className="lg:hidden sm:p-2 md:p-1"
          >
            <i className="fa-regular fa-id-card"></i>
          </motion.button>
        </li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="bg-nav text-navlinks sm:text-base sm:h-[2.5rem] sm:w-[2.5rem] md:text-xl md:h-[3.5rem] md:w-[3.5rem] lg:text-2xl lg:h-[4rem] lg:w-[4rem] rounded-full sm:mt-10 sm:ml-2 md:mt-5 lg:mt-5"
      >
        {theme === "light" ? (
          <i className="fa-regular fa-moon" />
        ) : (
          <i className="fa-regular fa-sun" />
        )}
      </motion.button>
    </nav>
  );
};

export default MiniNav;
