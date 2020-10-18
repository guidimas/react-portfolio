import React from 'react';

import { FiMenu } from 'react-icons/fi';
import { Container, Logo, Navigation, NavigationItem } from './styles';

import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Dimas Portfolio" />
        <h1>Dimas Portfolio</h1>
      </Logo>
      <Navigation>
        <NavigationItem selected>Developer</NavigationItem>
        <NavigationItem>Designer</NavigationItem>
        <NavigationItem>Manager</NavigationItem>
      </Navigation>
      <FiMenu size={24} />
    </Container>
  );
};

export default Header;
