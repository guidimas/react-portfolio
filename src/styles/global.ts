import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scrollbar-color: rgba(64, 61, 82, 0.6) hsla(0,0%, 100%, 0.1);
    scrollbar-width: thin;
  }

  html {
    overflow-y: scroll;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, span, strong {
    font-family: 'Poppins', serif;
    font-size: 16px;
  }

  a, a:focus, a:hover, a:visited, a:link, a:active {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }

  button {
    cursor: pointer;
    outline: 0;
  }

  ::-moz-selection {
    background: #78D0D3;
    color: #FFF;
  }

  ::selection {
    background: #78D0D3;
    color: #FFF;
  }
`;
