import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/themeContext';

const countryStyle = {
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '1px 5px 14px -6px rgba(0,0,0,0.75)',
};

function Country({ countryObj }) {
  const { theme } = useContext(ThemeContext);
  const { name, population, capital, flag, latlng, region } = countryObj;

  return (
    <Link to={`/countries/${name}`}>
      <div key={latlng} className={theme} style={countryStyle}>
        <img src={flag} alt={name} />

        <div className='country-text'>
          <h3>{name}</h3>
          <p>
            <strong>Population: </strong>
            {new Intl.NumberFormat().format(population)}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
