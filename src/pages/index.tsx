import * as React from "react";
import styled from "styled-components";
//styles
import GlobalStyle from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme, darkTheme } from "../styles/theme";
//components
import Layout from "../components/common/layout";

// styles
const PageStyle = styled.main`
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
`;

const HeadContainerStyle = styled.section`
  margin-top: 0;
`;

const HeadTitleStyle = styled.p`
  font-size: 82px;
  font-family: Orelega one, serif;
  margin: 0;
`;

const HeadSubTitleStyle = styled.p`
  text-align: center;
`;

const ParagraphStyle = styled.p`
  height: 200px;
`;

const CodeStyle = styled.code`
  color: #8a6534;
  padding: 4px;
  background-color: #fff4db;
  border-radius: 4px;
`;

const EffectStrokeShadow = styled.span`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #750437;
  text-shadow: 4px 4px #db2777;
  color: transparent;
`;

// data
const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
};

// markup
const IndexPage = () => {
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
    <ThemeProvider theme={themed}>
      <GlobalStyle />
      <Layout>
        <PageStyle>
          <HeadContainerStyle>
            <HeadTitleStyle>
              <EffectStrokeShadow>Hello</EffectStrokeShadow> stranger
            </HeadTitleStyle>
            <HeadSubTitleStyle>
              I'm Carlos, a former graphic designer that evolpes during more
              than 10 years in a UX/UI developer.
              <span role='img' aria-label='Party popper emojis'>
                🎉🎉🎉
              </span>
            </HeadSubTitleStyle>
          </HeadContainerStyle>
          <ParagraphStyle>
            Go <CodeStyle>linkedIn</CodeStyle> to know more about me
            <span role='img' aria-label='Sunglasses smiley emoji'>
              😎
            </span>
          </ParagraphStyle>
          <ParagraphStyle>
            <button onClick={ChangeTheme}>Change theme</button>
          </ParagraphStyle>
        </PageStyle>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
