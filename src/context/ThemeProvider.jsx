import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeKey = 'theme';

  // Initialize state with a function that retrieves the theme from localStorage
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(themeKey);
    return storedTheme ? storedTheme : 'light'; // Fallback to 'light' if no value
  });

  // Set the theme on the document element and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(themeKey, theme); // Store the theme directly as a string
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const providerValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};