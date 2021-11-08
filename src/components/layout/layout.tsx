import * as React from "react";
//styles
import GlobalStyle from "../../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import { PageStyle } from "./layout.style";
//Components
import Head from "../head/head";
import SwitchThemeButton from "../switchThemeButton/switchThemeButton";
//Hooks
import { useSelectedTheme } from "../../utils/hooks/useSelectedTheme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, ToggleTheme] = useSelectedTheme();
  const themeSelected = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeSelected}>
      <GlobalStyle />
      <Head />
      <PageStyle>
        <SwitchThemeButton ToggleTheme={ToggleTheme} themeSelected={theme} />
        {children}
        <SwitchThemeButton ToggleTheme={ToggleTheme} themeSelected={theme} />
      </PageStyle>
    </ThemeProvider>
  );
};

export default Layout;
