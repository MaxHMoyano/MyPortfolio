import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  body {
    background-color: #000000;
    background-image: linear-gradient(230deg, #000000 0%, #181818 75%);
    color: ${(props) => props.theme.colors.light};
    overflow: hidden;
  }
  button {
    font-family: inherit;
  }

`;
