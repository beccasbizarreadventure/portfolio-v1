import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const MiniNav = () => {

const { theme, toggleTheme } = useContext(ThemeContext);

return (
  <nav
    className={`flex justify-between items-center p-4 ${
      theme === "dark"
        ? "bg-dark-background text-dark-text"
        : "bg-light-background text-light-text"
    }`}
  >
    <div className="flex space-x-4">
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          theme === "dark" ? "bg-dark-accent text-dark-text" : "bg-light-accent text-light-text"
        }`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  </nav>
);
};
