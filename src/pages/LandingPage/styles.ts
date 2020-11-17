import styled, { css } from 'styled-components';

import ellipse from '../../assets/ellipse.svg';
import topRight from '../../assets/top-right.svg';
import bottomLeft from '../../assets/bottom-left.svg';
import bottomRight from '../../assets/bottom-right.svg';

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

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  padding: 2em;

  @media (max-width: 640px) {
    padding: 1em;
  }
`;

/* Left */
export const Left = styled.section`
  flex: 1;
  margin-right: 3em;

  @media (max-width: 960px) {
    margin-right: 0;
  }
`;

export const Title = styled.h2`
  color: #574e65;
  font-weight: 900;
  font-size: 80px;
  line-height: 90px;
  transition: font-size 0.2s linear;

  @media (max-width: 1200px) {
    font-size: 70px;
    line-height: 60px;
  }

  @media (max-width: 640px) {
    font-size: 60px;
    line-height: 70px;
  }
`;

export const Description = styled.div`
  color: #aba6b2;
  font-weight: 500;
  font-size: 17px;
  line-height: 30px;
  margin-top: 2em;
`;

export const Button = styled.button`
  color: white;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 0.1em;

  border: 0;
  background: #78d0d3;
  margin-top: 3em;
  border-radius: 9px;
  text-transform: uppercase;
  padding: 1em 1.5em;
  box-shadow: 0px 20px 25px -15px rgba(100, 177, 180, 0.8);
  transition: transform 0.2s linear, box-shadow 0.2s linear;

  &:hover {
    background: #96d5d7;
    box-shadow: 0px 20px 25px -18px rgba(100, 177, 180, 0.8);
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

/* Right */
export const Right = styled.section`
  flex: 1;
  background: url(${ellipse}) no-repeat center;
  background-size: 85% 85%;
  display: flex;
  justify-content: center;
  transition: background-size 0.2s ease-in-out;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 625px;
  transition: height 0.2s linear;

  @media (max-width: 1200px) {
    height: 525px;
  }

  @media (max-width: 1100px) {
    height: 450px;
  }
`;

/* Background */
export const TopRight = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${topRight}) no-repeat top right;
  position: absolute;
  z-index: -1;

  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: 1200px) {
    background-size: 70%;
  }
`;

export const BottomLeft = styled.div`
  height: 100vh;
  min-height: 800px;
  width: 100%;
  background: url(${bottomLeft}) no-repeat bottom left;
  position: absolute;
  z-index: -1;

  @media (max-width: 640px) {
    background-size: 60%;
  }
`;

export const BottomRight = styled.div`
  height: 100vh;
  min-height: 800px;
  width: 100%;
  background: url(${bottomRight}) no-repeat bottom right;
  position: absolute;
  z-index: -1;

  @media (max-width: 960px) {
    display: none;
  }
`;
