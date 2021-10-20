import { createGlobalStyle } from "styled-components";
import Montserrat300Woff2 from "../../static/fonts/montserrat/montserrat-300.woff2";
import Montserrat400Woff2 from "../../static/fonts/montserrat/montserrat-400.woff2";
import Montserrat600Woff2 from "../../static/fonts/montserrat/montserrat-600.woff2";
import OrelegaOne400Woff2 from "../../static/fonts/orelega-one/orelega-one-400.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: 
            local('Montserrat'),
            url(${Montserrat300Woff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: optional;
    }
    @font-face {
        font-family: 'Montserrat';
        src: 
            local('Montserrat'),
            url(${Montserrat400Woff2}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: optional;
    }
    @font-face {
        font-family: 'Montserrat';
        src: 
            local('Montserrat'),
            url(${Montserrat600Woff2}) format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: optional;
    }

    @font-face {
        font-family: 'Orelega';
        src: 
            local('Orelega'),
            url(${OrelegaOne400Woff2}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: optional;
    }
`;
