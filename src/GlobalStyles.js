import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-dark-gray:#2f2f2f;
  --color-white:#f6f6f6;
  --color-yellow:#ffcb74;
  --color-gray:#333;
  --color-light-gray:#ddd;
  --box-shadow:rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background: linear-gradient(0deg, rgba(47,47,47,1) 0%, rgba(246,246,246,1) 100%);
    background-attachment: fixed;
    
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    max-width: 768px;
    margin: 0 auto;
  }

  input, textarea {
  border: none;
  border-bottom: 1px solid var(--color-dark-gray);
  border-radius: 5px;
  background-color: var(--color-gray);
  color: var(--color-light-gray);
  padding: 10px;
  box-shadow: var(--box-shadow);
  &:focus {
   outline: none;
 }
}

`;
