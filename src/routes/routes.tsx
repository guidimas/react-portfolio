import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact />
    <Route path="/projects" component={ProjectsPage} exact />
    <Route path="/contact" component={ContactPage} exact />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
