import styled, { css } from 'styled-components';

interface ISidebarVisible {
  sidebarVisible?: boolean;
}

export const Container = styled.div<ISidebarVisible>`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s filter linear 0.3s;
  justify-content: space-between;

  ${({ sidebarVisible }) =>
    sidebarVisible &&
    css`
      @media (max-width: 640px) {
        filter: blur(0.1em);
      }
    `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin-bottom: 1.5em;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Main = styled.div``;

export const Title = styled.h2`
  color: #78d0d3;

  font-size: 2.5rem;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }
`;

export const Message = styled.p`
  margin-top: 0.5em;
  font-size: 1.3rem;
  transition: all 0.2s linear;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const Contact = styled.div`
  margin-top: 0.5em;
  font-size: 1.3rem;
  transition: all 0.2s linear;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const Email = styled.p`
  color: #78d0d3;
  font-weight: 600;
`;

export const Phone = styled.p`
  color: #78d0d3;
  font-weight: 600;
  margin-top: 0.3em;
`;

export const Image = styled.div`
  display: flex;
  max-width: 600px;
  margin: 1.5em;
  transition: all 0.2s linear;

  @media (max-width: 1200px) {
    max-width: 400px;
  }

  @media (max-width: 700px) {
    max-width: 300px;

    @media (max-height: 639px) {
      display: none;
    }
  }

  img {
    width: 100%;
  }
`;
