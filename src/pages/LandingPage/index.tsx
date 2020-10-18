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
  TopRight,
  BottomLeft,
  BottomRight,
  Image,
} from './styles';

import pic from '../../assets/illustration.svg';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <TopRight />
      <BottomLeft />
      <BottomRight />
      <Header />
      <Main>
        <Left>
          <Title>Freelance Developer</Title>
          <Description>
            Ideas are these disembodied life forms, they don't have a form, but
            they have a will. All they want is to be made manifest. If you can
            manage to open up your consciousness to an idea of living in a world
            of abundance, then you can believe that, constantly, ideas are
            trying to find human collaborators.
            <br />— Elizabeth Gilbert
          </Description>
          <Button>See projects</Button>
        </Left>
        <Right>
          <Image src={pic} alt="Developer" />
        </Right>
      </Main>
    </Container>
  );
};

export default LandingPage;
