import React from 'react';

import Search from './Search';
import Regions from './Regions';

function Filter() {
  return (
    <div className='filter-container'>
      <Search />
      <Regions />
    </div>
  );
}

export default Filter;
