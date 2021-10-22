import * as React from "react";
import styled from "styled-components";
import GlobalFonts from "../styles/fonts";
import GlobalStyle from "../styles/globalStyle";
import Layout from "../components/layout/layout";

// styles
interface IStyledProps {
  color?: string;
}

const PageStyle = styled.main`
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  color: #232129;
`;

const HeadContainerStyle = styled.section`
  margin-top: 0;
`;

const HeadTitleStyle = styled.p`
  font-size: 82px;
  font-family: Orelega, Georgia, "Times New Roman", Times, serif;
  margin: 0;
`;

const HeadSubTitleStyle = styled.p`
  text-align: center;
`;

const ParagraphStyle = styled.p``;

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
  color: "#8954A8",
};

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Layout>
        <PageStyle>
          <HeadContainerStyle>
            <HeadTitleStyle>
              <EffectStrokeShadow>Hello</EffectStrokeShadow>, I'm Carlos
            </HeadTitleStyle>
            <HeadSubTitleStyle>
              enjoy my work!
              <span role='img' aria-label='Party popper emojis'>
                🎉🎉🎉
              </span>
            </HeadSubTitleStyle>
          </HeadContainerStyle>
          <ParagraphStyle>
            Go <CodeStyle>src/pages/index.js</CodeStyle> to know more about me
            <span role='img' aria-label='Sunglasses smiley emoji'>
              😎
            </span>
          </ParagraphStyle>
        </PageStyle>
      </Layout>
    </>
  );
};

export default IndexPage;
