import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  html {
    height: 100%;
    --grey: #D9D9D9;
    --darkgrey: #35393d;
    --light: #FFFFFF;
    --lightgrey: #fafafa;
    --red: #d19292;
    --darkred: #915a5a;
    --dark: #0D1B2A;
    --blue: #507096;
    --green: #509673;
    --lightgreen: #66bb6a;
    --greygreen: #b1c9b2;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px; 
  }

  body {
    height: 100%;
    padding: 0;
    margin: 0;    
    -webkit-tap-highlight-color: transparent;    
    font-size: 1rem;
    background: rgb(80,112,150);
background: linear-gradient(156deg, rgba(80,112,150,1) 25%, rgba(46,210,173,1) 100%);
    color: var(--darkgrey);
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-style: normal; 
  }
  body > #root {
    height: 100%;
}
  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 3rem;
    font-weight: 400;
  }
  h1:hover, h2:hover, h3:hover {
    cursor: default;
  }
  a {
    text-decoration: none;
    color: var(--darkgrey);
  }
  a:hover {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  p:hover {
    cursor: inherit;
  }
  button {
      font-family: 'Roboto', sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;
