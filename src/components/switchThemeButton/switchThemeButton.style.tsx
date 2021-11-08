import styled from "styled-components";
import { IThemeProps } from "../../styles/theme";

export const Button = styled.button`
  z-index: 1;
  display: flex;
  place-items: center;
  place-content: center;
  width: 50px;
  height: 50px;
  background-color: #005b4e;
  border-radius: 50%;
  transition: all 0.5s ease;

  svg path {
    fill: white;
  }
`;
