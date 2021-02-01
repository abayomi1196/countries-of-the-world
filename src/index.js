import React from 'react';
import { render } from 'react-dom';
import { ThemeContextProvider } from './context/themeContext';
import { FilterContextProvider } from './context/filterContext';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

render(
  <FilterContextProvider>
    <ThemeContextProvider>
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </FilterContextProvider>,
  document.getElementById('root')
);
