import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { filterContext } from '../context/filterContext';

import './../styles/app.scss';
import './../styles/body.scss';

import Filter from './Filter';
import Country from './Country';

// Local light and dark mode style objects
const darkStyle = { backgroundColor: 'hsl(207, 26%, 17%)' };
const lightStyle = { backgroundColor: 'hsl(0, 0%, 98%)' };

function Body() {
  const { theme } = useContext(ThemeContext);
  const { searchTerm, region, countries } = useContext(filterContext);

  //filter countries by search-term and region
  const searchedCountries = countries.filter((country) => {
    if (region === 'All') {
      return country.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        country.region === region
      );
    }
  });

  // JSX
  return (
    <main className={theme} style={theme === 'Dark' ? darkStyle : lightStyle}>
      <Filter />

      {/* Countries */}
      <div className='countries-container'>
        {countries.length > 0 ? (
          searchedCountries.map((country) => (
            <Country countryObj={country} key={country.latlng} />
          ))
        ) : (
          <p style={{ margin: '0 auto' }}>
            <em>Loading...</em>
          </p>
        )}
      </div>
    </main>
  );
}

export default Body;
