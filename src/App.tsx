import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes/routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
