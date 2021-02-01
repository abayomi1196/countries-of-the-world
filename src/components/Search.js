import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';

import { ThemeContext } from '../context/themeContext';
import { filterContext } from '../context/filterContext';

function Search() {
  const { theme } = useContext(ThemeContext);
  const { searchTerm, handleSearch } = useContext(filterContext);

  return (
    <section data-role='search-container'>
      <FaSearch className='search-icon' />
      <input
        type='text'
        placeholder='Search for a country...'
        className={theme}
        onChange={handleSearch}
        value={searchTerm}
      />
    </section>
  );
}

export default Search;
