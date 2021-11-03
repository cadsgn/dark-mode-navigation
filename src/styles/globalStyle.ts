import { createGlobalStyle } from "styled-components";
import { IThemeProps } from "./theme";

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent; 
    }

    html {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        font-size: ${(props: IThemeProps) => props.theme.fontSizes.body};
        color: ${(props: IThemeProps) => props.theme.colors.neutral[500]};
        background-color: ${(props: IThemeProps) =>
          props.theme.colors.neutral[100]};
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
        color: ${(props: IThemeProps) => props.theme.colors.neutral[900]};
        text-decoration: none;        
        cursor: pointer;

        &:hover {
            color: ${(props: IThemeProps) => props.theme.colors.primary[500]};
            text-decoration: none;  
        }

        &:visited {
            text-decoration: none;  
        }
    }

    button {
        color: ${(props: IThemeProps) => props.theme.colors.neutral[900]};
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
    
    svg path {
        fill: ${(props: IThemeProps) => props.theme.colors.primary[500]};
    }
`;

export default GlobalStyle;
