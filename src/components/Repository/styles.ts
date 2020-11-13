import styled, { css, keyframes } from 'styled-components';

interface IContainerProps {
  loading?: boolean;
}

const loadingAnimation = keyframes`
  from {
    left: -25%;
    opacity: 1;
  }

  to {
    left: 110%;
    opacity: 0.5;
  }
`;

export const Container = styled.div<IContainerProps>`
  width: 100%;
  ${({ loading }) =>
    loading &&
    css`
      background: rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      width: 100%;
      display: flex;
      height: 140px;
      max-height: 140px;
      position: relative;
      overflow: hidden;

      &:after {
        content: '';
        display: block;
        width: 150px;
        height: 250px;
        background: linear-gradient(to left, rgba(0, 0, 0, 0.03), transparent);
        position: absolute;
        transform: rotate(30deg);
        top: -60px;
        left: -25%;
        animation: ${loadingAnimation} 1.5s infinite ease-out;
      }
    `}

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    height: 140px;
    max-height: 140px;

    & + a {
      margin-top: 8px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;

      @media (max-width: 640px) {
        display: none;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Description = styled.div`
  margin: 0 16px;
  flex: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  strong {
    font-size: 20px;
    color: #3d3d4d;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;

    @media (max-width: 640px) {
      font-size: 14px;
    }
  }
`;
