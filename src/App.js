import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import SingleCountry from './components/singleCountry';

import './styles/app.scss';
import ScrollToTop from './components/scrollToTop';

function App() {
  // JSX
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Body />
        </Route>
        <Route path='/countries/:countryName'>
          <ScrollToTop />
          <SingleCountry />
        </Route>
      </Switch>
    </>
  );
}

export default App;
