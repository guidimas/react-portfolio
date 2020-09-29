import React from 'react';

import { Container, Logo, Navigation, NavigationItem } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>Dimas Portfolio</Logo>
      <Navigation>
        <NavigationItem selected>Developer</NavigationItem>
        <NavigationItem>Designer</NavigationItem>
        <NavigationItem>Manager</NavigationItem>
      </Navigation>
    </Container>
  );
};

export default Header;
