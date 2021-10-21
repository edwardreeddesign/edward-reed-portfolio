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
    background-color: var(--clr-med);
    padding-top: 8rem;
    color: var(--clr-dark);
    font-family: var(--ff-main);
}

h1 {
    font-family: var(--ff-title);
}
`;

export default GlobalStyle;
