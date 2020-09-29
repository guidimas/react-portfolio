import styled from 'styled-components';

export const Container = styled.div`
  background: #3f3b51;
`;

export const Main = styled.main`
  max-width: 1080px;
  margin: 0 auto;
`;

/* Left */
export const Left = styled.section``;

export const Title = styled.h2`
  font-size: 56px;
  color: #574e65;
  line-height: 56px;
  font-weight: 700px;
`;

export const Description = styled.div`
  color: #aba6b2;
  font-size: 18px;
  line-height: 18px;
  margin-top: 2em;
`;

export const Button = styled.button`
  border: 0;
  background: #78d0d3;
  margin-top: 3em;
  border-radius: 9px;
  text-transform: uppercase;
  padding: 1em 1.5em;
  box-shadow: 0px 20px 25px -15px rgba(100, 177, 180, 0.8);
  transition: all 0.2s linear;
  color: white;

  &:hover {
    background: #78c9cc;
    box-shadow: 0px 26px 25px -21px rgba(100, 177, 180, 0.8);
  }
`;

/* Right */
export const Right = styled.section``;
