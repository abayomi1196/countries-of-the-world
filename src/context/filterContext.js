import React, { createContext, useRef, useState, useEffect } from 'react';

const filterContext = createContext();

function FilterContextProvider({ children }) {
  const [region, setRegion] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  // using useEffect to get the data from the API
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const regionsRef = useRef(null);

  function toggleRegions() {
    regionsRef.current.style.display =
      regionsRef.current.style.display === 'block' ? 'none' : 'block';
  }

  function selectRegion(e) {
    if (e.target.hasAttribute('data-value')) {
      setRegion(e.target.getAttribute('data-value'));
    }
  }

  function handleSearch(e) {
    const { value } = e.target;
    setSearchTerm(value);
  }

  const { Provider } = filterContext;

  return (
    <Provider
      value={{
        region,
        toggleRegions,
        selectRegion,
        regionsRef,
        searchTerm,
        handleSearch,
        countries,
      }}
    >
      {children}
    </Provider>
  );
}

export { FilterContextProvider, filterContext };
