import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Wall from './pages/Wall';
import Register from './pages/Register';
import Publications from './pages/Publications';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/feed" component={ Wall } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/publications" component={ Publications } />
      <Route componente={ NotFound } />
    </Switch>
  );
}

export default Routes;
