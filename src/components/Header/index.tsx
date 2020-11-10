import React from 'react';

import { FiMenu } from 'react-icons/fi';
import { Container, Logo, Navigation, NavigationItem } from './styles';

import logo from '../../assets/logo.svg';

interface IHeaderProps {
  onMenuShown: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onMenuShown }) => {
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
      <FiMenu size={24} onClick={onMenuShown} />
    </Container>
  );
};

export default Header;
