import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Montserrat', serif;
        font-weight: 400;
        font-size: 16px;
        color: #000000;
        -webkit-tap-highlight-color: transparent; 
    }

    body {
        overflow-anchor: none;
        margin: 0;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    a {
        display: inline-block;
        color: #000000;
        text-decoration: none;        
        cursor: pointer;

        &:hover {
        color: #000000;
            text-decoration: none;  
        }

        &:visited {
            text-decoration: none;  
        }
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: 'Open-Sans', sans-serif;
        
        &:focus {
            outline: none;
        }
    }

    li, ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    label {
        display: block;
    }
    
    svg {
        fill: currentColor;
        height: 24px;
    }
`;

export default GlobalStyle;
