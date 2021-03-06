import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// styles
const PageStyles = styled.main`
  color: #232129;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
`;

const HeadingStyles = styled.h1`
  margin-top: 0;
  margin-bottom: 64;
  max-width: 320;
`;

const ParagraphStyles = styled.p`
  margin-bottom: 48;
`;

const CodeStyles = styled.code`
  color: #8a6534;
  padding: 4;
  background-color: #fff4db;
  font-size: 1.25rem;
  border-radius: 4;
`;

// markup
const NotFoundPage = () => {
  return (
    <PageStyles>
      <title>Not found</title>
      <HeadingStyles>Page not found</HeadingStyles>
      <ParagraphStyles>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <CodeStyles>src/pages/</CodeStyles>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </ParagraphStyles>
    </PageStyles>
  );
};

export default NotFoundPage;
