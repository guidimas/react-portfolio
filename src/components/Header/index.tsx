import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { Container, Logo, Navigation, NavigationItem } from './styles';

import logo from '../../assets/logo.svg';

interface IHeaderProps {
  selectedPage: 'LANDING' | 'PROJECTS' | 'MANAGER';
  theme?: 'light' | 'dark';
  onMenuShown: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  onMenuShown,
  theme,
  selectedPage,
}) => {
  const history = useHistory();

  const handleNavigateTo = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history],
  );

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Dimas Portfolio" />
        <h1>Dimas Portfolio</h1>
      </Logo>
      <Navigation>
        <NavigationItem
          onClick={() => handleNavigateTo('/')}
          selected={selectedPage === 'LANDING'}
          theme={theme}
        >
          Landing
        </NavigationItem>
        <NavigationItem
          onClick={() => handleNavigateTo('/projects')}
          selected={selectedPage === 'PROJECTS'}
          theme={theme}
        >
          Projects
        </NavigationItem>
        <NavigationItem
          onClick={() => handleNavigateTo('/manager')}
          selected={selectedPage === 'MANAGER'}
          theme={theme}
        >
          Manager
        </NavigationItem>
      </Navigation>
      <FiMenu size={24} onClick={onMenuShown} />
    </Container>
  );
};

export default Header;
