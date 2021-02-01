import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

import { FaMoon, FaSun } from 'react-icons/fa';

import './../styles/app.scss';
import './../styles/header.scss';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // JSX
  return (
    <header className={theme}>
      <h1 className='header-title'>Where in the world?</h1>

      <div className='header-theme-toggle' onClick={toggleTheme}>
        {theme === 'Dark' ? <FaMoon /> : <FaSun />}
        <span>{theme} Mode</span>
      </div>
    </header>
  );
}

export default Header;
