import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
${normalize()};
html{
    font-size: 18px;
    box-sizing: border-box;
}

*,*:before,*:after{
    box-sizing:inherit;
    margin: 0;
}

body{
    font-family:${primaryFont};
}

main {
    width:90%;
    margin: 0 auto;
}

`;
