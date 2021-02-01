import React, { useState, useEffect, createContext, useRef } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  //   // theme state initialized with dark mode or gotten from local storage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Dark');

  const [region, setRegion] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // using ref to get reference to the regions container
  const regionsRef = useRef(null);

  // toggles reference on and off
  function toggleRegions() {
    regionsRef.current.style.display =
      regionsRef.current.style.display === 'block' ? 'none' : 'block';
  }

  function selectRegion(e) {
    if (e.target.hasAttribute('data-value')) {
      setRegion(e.target.getAttribute('data-value'));
    }
  }

  // gets input from input field and sets it to state
  function handleSearch(e) {
    const { value } = e.target;
    setSearchTerm(value);
  }

  const { Provider } = Context;

  //   // switch / toggle theme
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));

  //   // useEffect is used to reset theme in local storage each time theme changes like componentDidUpdate
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Provider
      value={{
        theme,
        toggleTheme,
        region,
        toggleRegions,
        selectRegion,
        regionsRef,
        searchTerm,
        handleSearch,
      }}
    >
      {children}
    </Provider>
  );
}

export { ContextProvider, Context };
