import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  Main,
  Left,
  Right,
  Title,
  Description,
  Button,
} from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Left>
          <Title>Freelance Developer</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            incidunt placeat iure exercitationem commodi dignissimos at quaerat
            quasi suscipit pariatur.
          </Description>
          <Button>See projects</Button>
        </Left>
        <Right>Right</Right>
      </Main>
    </Container>
  );
};

export default LandingPage;
