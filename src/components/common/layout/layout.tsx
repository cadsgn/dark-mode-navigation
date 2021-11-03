import * as React from "react";
//styles
import GlobalStyle from "../../../styles/globalStyle";
import GlobalFonts from "../../../styles/fonts/fonts";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../../styles/theme";
//Components
import Head from "../head/head";
import Header from "../header/header";
import ScrollButton from "../scrollButton/scrollButton";
import SwitchThemeButton from "../switchThemeButton/switchThemeButton";
//Hooks
import { useSelectedTheme } from "../../../utils/hooks/useSelectedTheme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, ToggleTheme] = useSelectedTheme();
  const themeSelected = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <GlobalFonts />
      <ThemeProvider theme={themeSelected}>
        <GlobalStyle />
        <Head />
        <Header />
        <div>{children}</div>
        <ScrollButton />
        <SwitchThemeButton ToggleTheme={ToggleTheme} themeSelected={theme} />
      </ThemeProvider>
    </>
  );
};

export default Layout;
