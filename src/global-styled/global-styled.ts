import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        background: linear-gradient(#797878 20%,#bebebe 80%);
    }
`

export default GlobalStyles;
