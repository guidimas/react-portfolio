import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
