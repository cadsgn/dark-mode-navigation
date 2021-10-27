import { createGlobalStyle } from "styled-components";
import { IThemeProps } from "./theme";

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        font-size: ${(props: IThemeProps) => props.theme.fontSizes.body};
        color: ${(props: IThemeProps) => props.theme.colors.black};
        background-color: ${(props: IThemeProps) => props.theme.colors.white};
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
        color: ${(props: IThemeProps) => props.theme.colors.black};
        text-decoration: none;        
        cursor: pointer;

        &:hover {
            color: ${(props: IThemeProps) => props.theme.colors.black};
            text-decoration: none;  
        }

        &:visited {
            text-decoration: none;  
        }
    }

    button {
        color: ${(props: IThemeProps) => props.theme.colors.black};
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
