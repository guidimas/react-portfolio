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
  max-width: 700px;
  min-height: 100vh;
`;

export const Main = styled.div``;

export const Title = styled.h2`
  color: #78d0d3;

  font-size: 1.8rem;
  font-weight: 600;
`;

export const Message = styled.p`
  margin-top: 0.5em;
`;

export const Contact = styled.div`
  margin-top: 0.5em;
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
  max-width: 400px;
  margin-right: 1em;

  @media (max-width: 700px) {
    display: none;
  }
`;
