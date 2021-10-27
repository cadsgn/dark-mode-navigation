import styled from "styled-components";
import { IThemeProps } from "../../../styles/theme";

// styles
export const HeaderContainerStyle = styled.nav`
  display: flex;
  flex-flow: row;
  width: 100%;
  align-items: center;
`;

export const LinkContainerStyle = styled.article`
  height: ${(props: IThemeProps) => props.theme.sizes.large};
  margin-bottom: ${(props: IThemeProps) => props.theme.sizes.big};
  border-bottom: 1px solid #000000;

  a:hover {
    color: #5454cc;
  }
`;

export const LinkStyle = {
  padding: "16px",
};

export const ActiveStyle = {
  color: "red",
};
