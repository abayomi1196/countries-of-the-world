import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Dark');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const { Provider } = ThemeContext;
  return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
}

export { ThemeContextProvider, ThemeContext };
