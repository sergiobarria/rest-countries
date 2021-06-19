import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    font-family: Nunito Sans, sans-serif;
    transition: all 300ms linear;
    height: 100vh;
  }
`;
