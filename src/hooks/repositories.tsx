import React, { useContext, createContext, useState, useCallback } from 'react';

import api from '../services/api';
import IRepository from '../models/IRepository';

interface RepositoriesContextData {
  repositories: IRepository[];
  loadRepositories: () => Promise<void>;
}

const RepositoriesContext = createContext<RepositoriesContextData>(
  {} as RepositoriesContextData,
);

export const RepositoriesProvider: React.FC = ({ children }) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const loadRepositories = useCallback(async () => {
    const response = await api.get<IRepository[]>('');
    setRepositories(response.data);
  }, []);

  return (
    <RepositoriesContext.Provider value={{ repositories, loadRepositories }}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export function useRepositories(): RepositoriesContextData {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error('useRepositories must be used within RepositoriesProvider');
  }

  return context;
}
