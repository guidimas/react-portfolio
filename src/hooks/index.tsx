import React from 'react';
import { RepositoriesProvider } from './repositories';

const AppProvider: React.FC = ({ children }) => (
  <RepositoriesProvider>{children}</RepositoriesProvider>
);

export default AppProvider;
