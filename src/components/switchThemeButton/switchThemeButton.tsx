import * as React from "react";
//icons
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
//Styles
import { Button } from "./switchThemeButton.style";

const SwitchThemeButton = ({
  ToggleTheme,
  themeSelected,
}: {
  ToggleTheme: any;
  themeSelected: any;
}) => {
  return (
    <Button onClick={ToggleTheme}>
      {themeSelected === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default SwitchThemeButton;
