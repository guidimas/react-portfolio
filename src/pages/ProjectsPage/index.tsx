import React, { useEffect, useState, useCallback } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useRepositories } from '../../hooks/repositories';

import { Container } from './styles';

const ProjectsPage: React.FC = () => {
  const { loadRepositories, repositories } = useRepositories();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    loadRepositories();
  }, [loadRepositories]);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  useEffect(() => {
    console.log(repositories);
  }, [repositories]);

  return (
    <Sidebar
      selectedPage="PROJECTS"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container>
        <Header
          onMenuShown={handleOnMenuToggle}
          selectedPage="PROJECTS"
          theme="light"
        />
      </Container>
    </Sidebar>
  );
};

export default ProjectsPage;
