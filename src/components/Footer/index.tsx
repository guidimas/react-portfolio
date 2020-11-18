import React from 'react';

import { Container, Heart } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <span>Feito com</span>
      <span role="img" aria-label="amor">
        💙
      </span>
      <span>por</span>
      <a
        href="https://github.com/guidimas"
        target="_blank"
        rel="noopener noreferrer"
      >
        guidimas
      </a>
      <span>.</span>
    </Container>
  );
};

export default Footer;
