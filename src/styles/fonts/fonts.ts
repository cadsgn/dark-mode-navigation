import { createGlobalStyle } from "styled-components";
import Montserrat400Woff2 from "../fonts/montserrat/montserrat-400.woff2";
import OrelegaOne400woff2 from "../fonts/orelega-one/orelega-one-400.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: 
            local('Montserrat'),
            url(${Montserrat400Woff2}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Orelega One';
        src: 
            local('Orelega One'),
            url(${OrelegaOne400woff2}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
`;
