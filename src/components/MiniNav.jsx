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
    <nav className="fixed right-20 flex flex-col items-end z-50">
      <ul className="flex flex-col justify-center items-center text-navlinks text-xl bg-nav h-[14rem] w-[4rem] rounded-full mt-10">
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="bg-header_text text-navlinks h-[4rem] w-[4rem] rounded-full text-2xl mt-5"
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
