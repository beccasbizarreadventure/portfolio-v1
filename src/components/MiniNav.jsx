import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const MiniNav = () => {

const { theme, toggleTheme } = useContext(ThemeContext);

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

return (
  <nav className="flex flex-col items-end mr-10">
    <ul className="flex flex-col justify-center items-center text-background text-xl bg-header_text h-[14rem] w-[4rem] rounded-full mt-10">
      <li><button onClick={() => scrollToSection('home')}><i className="fa-solid fa-house p-2"></i></button></li>
      <li><button onClick={() => scrollToSection('intro')}><i className="fa-regular fa-face-smile p-2"></i></button></li>
      <li><button onClick={() => scrollToSection('education')}><i className="fa-solid fa-user-graduate p-2"></i></button></li>
      <li><button onClick={() => scrollToSection('projects')}><i className="fa-regular fa-pen-to-square p-2"></i></button></li>
      <li><button onClick={() => scrollToSection('contact')}><i className="fa-regular fa-id-card p-2"></i></button></li>
    </ul>
      <button
        onClick={toggleTheme}
        className="bg-header_text text-background h-[4rem] w-[4rem] rounded-full text-2xl mt-5"
      >
        {theme === "light" ? <i className="fa-regular fa-moon" /> : <i className="fa-regular fa-sun" />}
      </button>
  </nav>
);
};

export default MiniNav;