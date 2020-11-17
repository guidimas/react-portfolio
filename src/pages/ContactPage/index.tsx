import React, { useCallback, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Image,
  Main,
  Title,
  Message,
  Contact,
  Email,
  Phone,
} from './styles';

import contact from '../../assets/contact.svg';

const ContactPage: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  return (
    <Sidebar
      selectedPage="CONTACT"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container sidebarVisible={isSidebarVisible}>
        <Header
          onMenuShown={handleOnMenuToggle}
          selectedPage="CONTACT"
          theme="light"
        />
        <Content>
          <Image>
            <img src={contact} alt="Contact" />
          </Image>
          <Main>
            <Title>Get in touch!</Title>
            <Message>For support or any questions:</Message>
            <Contact>
              <Email>myemail@example.com</Email>
              <Phone>(11) 1 1234 5678</Phone>
            </Contact>
          </Main>
        </Content>
      </Container>
    </Sidebar>
  );
};

export default ContactPage;
