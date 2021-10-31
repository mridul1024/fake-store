import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    overflow-x: hidden;
    background: linear-gradient(90deg, rgba(247,16,16,1) 0%, rgba(231,11,11,1) 35%, rgba(255,183,0,1) 100%);
    box-sizing: border-box;
}


a{
    text-decoration: none;
}
`;

export default GlobalStyles;
