import * as React from "react";
import styled from "styled-components";
//components
import Layout from "../components/common/layout/layout";

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

// markup
const IndexPage = () => {
  return (
    <Layout>
      <PageStyle>
        <HeadContainerStyle>
          <HeadTitleStyle>
            My <EffectStrokeShadow>Playground</EffectStrokeShadow>
          </HeadTitleStyle>
          <HeadSubTitleStyle>
            Here is where i play.
            <span role='img' aria-label='Party popper emojis'>
              ⛹️‍♂️⛹️‍♂️⛹️‍♂️
            </span>
          </HeadSubTitleStyle>
        </HeadContainerStyle>
        <ParagraphStyle>
          Go <CodeStyle>GitHub</CodeStyle> to know more about me.
        </ParagraphStyle>
      </PageStyle>
    </Layout>
  );
};

export default IndexPage;
