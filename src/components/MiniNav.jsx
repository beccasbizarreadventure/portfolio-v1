import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Tooltip } from "@nextui-org/tooltip";

const MiniNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const itemVariants = {
    enter: {
      opacity: 1,
      y: 0,
      scale: 0.97, 
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.97,
      transition: { duration: 0.2 }
    }
  };

  const motionProps = {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    variants: itemVariants
  };

  return (
    <nav className="fixed right-10 top-10 flex flex-col items-end z-50">
      <ul className="flex flex-col justify-center items-center text-background text-xl bg-header_text h-[14rem] w-[4rem] rounded-full mt-10">
        <li>
          <Tooltip
            placement="left-end"
            motionProps={motionProps}
            offset={25}
            content={
              <span className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body">
                Home
              </span>
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
              <span className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body">
                About Me
              </span>
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
              <span className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body">
                Education
              </span>
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
              <span className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body">
                Projects
              </span>
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
              <span className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body">
                Contact
              </span>
            }
          >
          <button onClick={() => scrollToSection("contact")}>
            <i className="fa-regular fa-id-card p-2"></i>
          </button>
        </Tooltip>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="bg-header_text text-background h-[4rem] w-[4rem] rounded-full text-2xl mt-5"
      >
        {theme === "light" ? (
          <i className="fa-regular fa-moon" />
        ) : (
          <i className="fa-regular fa-sun" />
        )}
      </button>
    </nav>
  );
};

export default MiniNav;