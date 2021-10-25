import baseStyled, { ThemedStyledInterface } from "styled-components";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { ISpacing, spacing } from "./settings/spacing";
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
    spacing: ISpacing;
    colors: IColors;
  };
}

export const theme = {
  mode: "default",
  spacing: spacing,
  colors: colors,
};

//Change theme from light to dark re-load fonts. And it's a shit!
export const lightTheme = {
  mode: "light",
  spacing: spacing,
  colors: colors,
};

export const darkTheme = {
  mode: "dark",
  spacing: spacing,
  colors: darkColors,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
