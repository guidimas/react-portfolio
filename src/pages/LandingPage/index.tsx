import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  return (
    <Sidebar
      selectedPage="LANDING"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container sidebarVisible={isSidebarVisible}>
        <TopRight />
        <BottomLeft />
        <BottomRight />
        <Header onMenuShown={handleOnMenuToggle} selectedPage="LANDING" />
        <Main>
          <Left>
            <Title>Freelance Developer</Title>
            <Description>
              Ideas are these disembodied life forms, they don't have a form,
              but they have a will. All they want is to be made manifest. If you
              can manage to open up your consciousness to an idea of living in a
              world of abundance, then you can believe that, constantly, ideas
              are trying to find human collaborators.
              <br />— Elizabeth Gilbert
            </Description>
            <Button>See projects</Button>
          </Left>
          <Right>
            <Image src={pic} alt="Developer" />
          </Right>
        </Main>
      </Container>
    </Sidebar>
  );
};

export default LandingPage;
