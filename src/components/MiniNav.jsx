import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Tooltip } from "@nextui-org/tooltip";
import { motion } from "framer-motion";

const MiniNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id, offset) => {
    const section = document.getElementById(id);

    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const motionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };

  return (
    <nav className="flex fixed top-8 sm:pl-8 md:right-8 lg:right-8 z-50 sm:flex-row md:flex-col lg:flex-col">
      <ul className="flex justify-center items-center text-navlinks bg-nav sm:text-base sm:h-[2.5rem] sm:w-[12rem] sm:flex-row md:text-xl md:h-[13rem] md:w-[3.5rem] md:flex-col lg:text-xl lg:h-[14rem] lg:w-[4rem] lg:flex-col rounded-full">
        <li>
          {/* Tooltip for large screens */}
          <div className="hidden lg:block">
            <Tooltip
              placement="left-end"
              motionProps={motionProps}
              offset={25}
              content={
                <span
                  className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body">
                  Home
                </span>
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
                >
                  About Me
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("intro", -100)}>
                <i className="fa-regular fa-face-smile p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("intro", -100)}
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
                >
                  Education
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("education", -100)}>
                <i className="fa-solid fa-user-graduate p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("education", -100)}
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
                >
                  Projects
                </motion.span>
              }
            >
              <button onClick={() => scrollToSection("projects", -100)}>
                <i className="fa-regular fa-pen-to-square p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("projects", -100)}
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
                  className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body">
                  Contact
                </motion.span>
              }
            >
              {/* Use scrollToSection with offset 0 for Contact */}
              <button onClick={() => scrollToSection("contact", 0)}>
                <i className="fa-regular fa-id-card p-2"></i>
              </button>
            </Tooltip>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("contact", 0)}
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
        className="bg-nav text-navlinks sm:text-base sm:h-[2.5rem] sm:w-[2.5rem] md:text-xl md:h-[3.5rem] md:w-[3.5rem] lg:text-2xl lg:h-[4rem] lg:w-[4rem] rounded-full sm:ml-2 md:ml-0 lg:ml-0 sm:mt-0 md:mt-5 lg:mt-5"
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
