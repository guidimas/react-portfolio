import styled, { css } from 'styled-components';

interface IContentProps {
  visible: boolean;
}

interface IChildrenProps {
  visible: boolean;
}

interface IPageProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f0fafa;
  position: relative;
  transition: all 0.3s;
  flex-shrink: 0;

  @media (min-width: 641px) {
    display: none;
  }

  @media (max-width: 640px) {
    width: 0;
    ${({ visible }) =>
      visible
        ? css`
            opacity: 1;
            width: 70%;
            overscroll-behavior: contain;
          `
        : css`
            opacity: 0;
            width: 0;
          `}
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 22px 2em;
  height: 32px;
  width: 100%;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  margin-top: 64px;

  button + button {
    margin-top: 16px;
  }
`;

export const Page = styled.button<IPageProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.02), transparent);
  position: relative;
  font-size: 14px;
  padding: 1em 1.5em;

  ${({ selected }) =>
    selected
      ? css`
          border-left: 4px solid #78d0d3;
        `
      : ''}

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
