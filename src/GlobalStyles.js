import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --clr-white: #ffffff;
    --clr-light: #f3f6fb;
    --clr-med: #d0dedf;
    --clr-dark: #151b27;
    --clr-accent: #f5eee4;
    

    --ff-main: 'Open Sans', sans-serif;
    --ff-title: 'Montserrat', sans-serif;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    background-color: var(--clr-light);
    color: var(--clr-dark);
    font-family: var(--ff-main);
 
   
}

h1 {
    font-family: var(--ff-title);
}

span {
    font-weight: 700;
    color: var(--clr-accent)
}

a {
    font-size: 1.4rem;
    font-family: var(--ff-title);
    color: var(--clr-dark);
    font-weight:600;
}

p {
    padding: 1.5rem 0;
    font-size: 1.4rem;
    line-height: 150%
}
`;

export default GlobalStyle;
