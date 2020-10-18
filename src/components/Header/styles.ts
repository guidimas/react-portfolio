import styled, { css } from 'styled-components';

interface INavigationItemProps {
  selected?: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin: 0 auto;
  padding: 1em 2em;

  svg {
    color: #574e65;
    display: none;
    cursor: pointer;

    @media (max-width: 640px) {
      display: block;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: #574e65;
    font-size: 24px;
    font-weight: 500;
    margin-left: 0.3em;
  }

  img {
    width: 30px;
    height: 30px;
    transition: opacity 0.2s linear, transform 0.4s ease-out;
  }

  &:hover {
    opacity: 0.8;

    img {
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;

  button + button {
    margin-left: 2em;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavigationItem = styled.button<INavigationItemProps>`
  border: 0;
  background: none;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.7;
  }

  ${({ selected }) =>
    selected
      ? css`
          color: #78d0d3;
        `
      : css`
          color: white;
        `}
`;
