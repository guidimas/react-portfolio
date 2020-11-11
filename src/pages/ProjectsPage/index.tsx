import React, { useEffect } from 'react';
import { useRepositories } from '../../hooks/repositories';

import { Container } from './styles';

const ProjectsPage: React.FC = () => {
  const { loadRepositories, repositories } = useRepositories();

  useEffect(() => {
    loadRepositories();
  }, [loadRepositories]);

  useEffect(() => {
    console.log(repositories);
  }, [repositories]);

  return (
    <Container>
      <h1>ProjectsPage</h1>
    </Container>
  );
};

export default ProjectsPage;
