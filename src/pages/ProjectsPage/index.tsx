import React, { useEffect, useState, useCallback } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Repository from '../../components/Repository';

import { useRepositories } from '../../hooks/repositories';
import { Container, Repositories } from './styles';

const ProjectsPage: React.FC = () => {
  const { loadRepositories, repositories } = useRepositories();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    loadRepositories();
  }, [loadRepositories]);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

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
          fixed
        />
        <Repositories>
          {repositories.length === 0 ? (
            <>
              <Repository key="0" />
              <Repository key="1" />
              <Repository key="2" />
            </>
          ) : (
            repositories.map(repository => (
              <Repository key={repository.full_name} repository={repository} />
            ))
          )}
        </Repositories>
      </Container>
    </Sidebar>
  );
};

export default ProjectsPage;
