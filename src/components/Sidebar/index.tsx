import React, { useCallback } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Page, Pages, Header, Content, Container } from './styles';

interface ISidebarProps {
  visible: boolean;
  selectedPage: 'LANDING' | 'PROJECTS' | 'CONTACT';
  onClose: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  visible,
  children,
  selectedPage,
  onClose,
}) => {
  const history = useHistory();

  const handleNavigateTo = useCallback(
    (route: string) => {
      history.push(route, { drawerVisible: visible });
    },
    [history, visible],
  );

  return (
    <Container>
      <Content visible={visible}>
        <Header>
          <FiArrowLeft size={24} onClick={onClose} />
        </Header>
        <Pages>
          <Page
            selected={selectedPage === 'LANDING'}
            onClick={() => handleNavigateTo('/')}
          >
            <span>Landing</span>
          </Page>
          <Page
            selected={selectedPage === 'PROJECTS'}
            onClick={() => handleNavigateTo('/projects')}
          >
            <span>Projects</span>
          </Page>
          <Page
            selected={selectedPage === 'CONTACT'}
            onClick={() => handleNavigateTo('/contact')}
          >
            <span>Contact</span>
          </Page>
        </Pages>
      </Content>
      {children}
    </Container>
  );
};

export default Sidebar;
