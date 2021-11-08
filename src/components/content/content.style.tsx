import styled from "styled-components";
import { IThemeProps } from "../../styles/theme";

// styles
export const HeadContainerStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const HeadTitleStyle = styled.p`
  font-family: -apple-system, Georgia, "Times New Roman", Times, serif;
  font-size: ${(props: IThemeProps) => props.theme.fontSizes.Header};
  line-height: ${(props: IThemeProps) => props.theme.fontSizes.Header};
  margin: 0;
`;

export const HeadSubTitleStyle = styled.p`
  text-align: left;
`;

export const ParagraphStyle = styled.p`
  height: 1800px;
`;

export const CodeStyle = styled.code`
  color: #8a6534;
  padding: 4px;
  background-color: #fff4db;
  border-radius: 4px;
`;

export const EffectStrokeShadow = styled.span`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #750437;
  text-shadow: 4px 4px #db2777;
  color: transparent;
`;
