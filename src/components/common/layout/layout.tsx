import * as React from "react";
//styles
import GlobalStyle from "../../../styles/globalStyle";
import GlobalFonts from "../../../styles/fonts/fonts";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme, darkTheme } from "../../../styles/theme";
//Components
import Head from "../head/head";
import Header from "../header/header";
import ScrollButton from "../scrollButton/scrollButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [themed, setThemed] = React.useState(lightTheme);

  const ChangeTheme = () => {
    if (themed === lightTheme) {
      setThemed(darkTheme);
    }
    if (themed === darkTheme) {
      setThemed(lightTheme);
    }
  };

  return (
    <>
      <GlobalFonts />
      <ThemeProvider theme={themed}>
        <GlobalStyle />
        <Head />
        <Header ChangeTheme={ChangeTheme} />
        <div>{children}</div>
        <ScrollButton />
      </ThemeProvider>
    </>
  );
};
export default Layout;
