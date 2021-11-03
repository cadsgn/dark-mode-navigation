import * as React from "react";
import styled from "styled-components";
//icons
import { ReactComponent as MoonIcon } from "../../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/icons/sun.svg";

const Button = styled.button`
  z-index: 1;
  display: flex;
  place-items: center;
  place-content: center;
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #005b4e;
  border-radius: 50%;
  top: 16px;
  right: 16px;
  transition: all 0.5s ease;

  svg path {
    fill: white;
  }
`;

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
