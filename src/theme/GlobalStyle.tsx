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
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.light};
    overflow: hidden;
  }
  button {
    font-family: inherit;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-exit{
    opacity: 0;
  }
  .fade-enter-active{
    opacity: 1;
    transition: opacity .3s ease-in;
  }

`;
