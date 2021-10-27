import baseStyled, { ThemedStyledInterface } from "styled-components";
import { ISizes, sizes } from "./settings/sizes";
import { IFontSizes, fontSizes } from "./settings/fontSizes";
import { IColors, colors, darkColors } from "./settings/colors";

/* Theme */
/*  Settings: Global variables, config switches.
    Tools: Default mixins and functions.
    Generic: Ground-zero styles (Normalize.css, resets. box-sizing)
    Base: Unclassed HTML elements (type selectors)
    Objects: Cosmetic-free design patterns.
    Components: Designed components. UI.
    Trumps: Helpers and overrides.
*/

export interface IThemeProps {
  theme: {
    mode: string;
    sizes: ISizes;
    fontSizes: IFontSizes;
    colors: IColors;
  };
}

const theme = {
  sizes: sizes,
  fontSizes: fontSizes,
};

export const lightTheme = {
  ...theme,
  colors: colors,
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
};

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
