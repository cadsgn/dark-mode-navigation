import baseStyled, { ThemedStyledInterface } from "styled-components";

/* Theme */
/*  Settings: Global variables, config switches.
    Tools: Default mixins and functions.
    Generic: Ground-zero styles (Normalize.css, resets. box-sizing)
    Base: Unclassed HTML elements (type selectors)
    Objects: Cosmetic-free design patterns.
    Components: Designed components. UI.
    Trumps: Helpers and overrides.
*/

const lightTheme = {
  background: "#ffffff",
  color: "#666666",
};

const darkTheme = {
  background: "#666666",
  color: "#ffffff",
};

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export { lightTheme, darkTheme };
