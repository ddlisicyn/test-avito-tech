import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import { MainPage } from './containers/MainPage/MainPage';
import { NewsPage } from './containers/NewsPage/NewsPage';
import { routes } from './constans/routes';

const {newsPage, core} = routes;

function App() {
  return (
    <Router>
      <Switch>
        <Route path={newsPage}>
          <NewsPage />
        </Route>
        <Route path={core}>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;