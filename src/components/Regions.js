import React, { useContext } from 'react';

import { ThemeContext } from '../context/themeContext';
import { filterContext } from '../context/filterContext';

import { AiOutlineDown } from 'react-icons/ai';

function Regions() {
  const { theme } = useContext(ThemeContext);
  const { region, toggleRegions, regionsRef, selectRegion } = useContext(
    filterContext
  );

  return (
    <section data-role='regions-container' onClick={toggleRegions}>
      <h4 className={theme}>
        {region}
        <AiOutlineDown className='regions-icon' />
      </h4>
      <ul className={theme} ref={regionsRef} onClick={selectRegion}>
        <li data-value='All'>All</li>
        <li data-value='Africa'>Africa</li>
        <li data-value='Asia'>Asia</li>
        <li data-value='Europe'>Europe</li>
        <li data-value='Oceania'>Oceania</li>
        <li data-value='Americas'>Americas</li>
      </ul>
    </section>
  );
}

export default Regions;
