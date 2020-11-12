import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { Container, Logo, Navigation, NavigationItem } from './styles';

import logo from '../../assets/logo.svg';

interface IHeaderProps {
  selectedPage: 'LANDING' | 'PROJECTS' | 'MANAGER';
  theme?: 'light' | 'dark';
  fixed?: boolean;
  onMenuShown: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  onMenuShown,
  theme,
  fixed,
  selectedPage,
}) => {
  const history = useHistory();
  const [headerTransparent, setHeaderTransparent] = useState(true);

  const handleNavigateTo = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history],
  );

  const handleScroll = useCallback(() => {
    setHeaderTransparent(window.scrollY <= 0);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Container fixed={fixed} transparent={headerTransparent}>
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
