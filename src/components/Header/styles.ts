import styled, { css } from 'styled-components';

interface INavigationItemProps {
  selected?: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 1080px;
  margin: 0 auto;
  padding: 1em 0;
`;

export const Logo = styled.h1`
  color: #574e65;
  font-size: 24px;
  font-weight: 500;
`;

export const Navigation = styled.nav`
  display: flex;

  button + button {
    margin-left: 2em;
  }
`;

export const NavigationItem = styled.button<INavigationItemProps>`
  border: 0;
  background: none;

  ${({ selected }) =>
    selected
      ? css`
          color: #78d0d3;
        `
      : css`
          color: white;
        `}
`;
