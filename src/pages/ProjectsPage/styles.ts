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
  transition: filter 0.2s linear;
  background: #efefef;

  ${({ sidebarVisible }) =>
    sidebarVisible &&
    css`
      @media (max-width: 640px) {
        filter: blur(2px);
      }
    `}
`;

export const Repositories = styled.div`
  margin-top: 5em;
  width: 100%;
  max-width: 700px;
  padding: 1em;

  > div {
    margin-bottom: 1.5em;
  }
`;
