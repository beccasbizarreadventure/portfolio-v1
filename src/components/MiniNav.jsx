import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Tooltip } from "@nextui-org/tooltip";

const MiniNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex flex-col items-end mr-10">
      <ul className="flex flex-col justify-center items-center text-background text-xl bg-header_text h-[14rem] w-[4rem] rounded-full mt-10">
        <li>
          <Tooltip
            placement="left-end"
            offset={25}
            content={
              <span className="bg-header_text bg-opacity-40 text-buttons px-2 py-2 rounded-xl font-body">
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
            offset={25}
            content={
              <span className="bg-header_text bg-opacity-40 text-buttons px-2 py-2 rounded-xl font-body">
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
            offset={25}
            content={
              <span className="bg-header_text bg-opacity-40 text-buttons px-2 py-2 rounded-xl font-body">
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
            offset={25}
            content={
              <span className="bg-header_text bg-opacity-40 text-buttons px-2 py-2 rounded-xl font-body">
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
            offset={25}
            content={
              <span className="bg-header_text bg-opacity-40 text-buttons px-2 py-2 rounded-xl font-body">
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
