import { createGlobalStyle } from "styled-components";
import { IThemeProps } from "./theme";

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        font-size: ${(props: IThemeProps) => props.theme.spacing.big};
        color: ${(props: IThemeProps) => props.theme.colors.black.default};
        background-color: ${(props: IThemeProps) =>
          props.theme.colors.white.default};
        -webkit-tap-highlight-color: transparent; 
    }

    body {
        overflow-anchor: none;
        margin: 0;
    }

    *:focus {
        outline: 0;
    }

    a {
        display: inline-block;
        color: ${(props: IThemeProps) => props.theme.colors.black.default};
        text-decoration: none;        
        cursor: pointer;

        &:hover {
            color: ${(props: IThemeProps) => props.theme.colors.black.default};
            text-decoration: none;  
        }

        &:visited {
            text-decoration: none;  
        }
    }

    button {
        color: ${(props: IThemeProps) => props.theme.colors.black.default};
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        
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
