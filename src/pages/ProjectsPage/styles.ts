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
  background: #efefef;

  ${({ sidebarVisible }) =>
    sidebarVisible &&
    css`
      @media (max-width: 640px) {
        filter: blur(0.1em);
      }
    `}
`;

export const Repositories = styled.div`
  margin-top: 5em;
  width: 100%;
  max-width: 700px;
  padding: 1em;
  animation: fade-in 0.4s ease;

  > div {
    margin-bottom: 1.5em;
  }
`;
