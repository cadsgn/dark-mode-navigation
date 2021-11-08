import * as React from "react";
import styled from "styled-components";
import { IThemeProps } from "../styles/theme";
//components
import Layout from "../components/layout/layout";
import Content from "../components/content/content";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default IndexPage;
