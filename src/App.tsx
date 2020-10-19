import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
