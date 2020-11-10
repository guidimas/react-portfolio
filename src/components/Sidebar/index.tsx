import React, { useCallback } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Page, Pages, Header, Content, Container } from './styles';

interface ISidebarProps {
  visible: boolean;
  selectedPage: string;
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
            selected={selectedPage === 'DEVELOPER'}
            onClick={() => handleNavigateTo('/')}
          >
            <span>Developer</span>
          </Page>
          <Page
            selected={selectedPage === 'DESIGNER'}
            onClick={() => handleNavigateTo('/designer')}
          >
            <span>Designer</span>
          </Page>
          <Page
            selected={selectedPage === 'MANAGER'}
            onClick={() => handleNavigateTo('/manager')}
          >
            <span>Manager</span>
          </Page>
        </Pages>
      </Content>
      {children}
    </Container>
  );
};

export default Sidebar;
