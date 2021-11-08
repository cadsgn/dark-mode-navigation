import * as React from "react";
import {
  HeadContainerStyle,
  HeadTitleStyle,
  HeadSubTitleStyle,
  CodeStyle,
} from "./content.style";

const Content = () => {
  return (
    <HeadContainerStyle>
      <HeadTitleStyle>Lorem ipsum dolor sit amet</HeadTitleStyle>
      <HeadSubTitleStyle>
        Lorem ipsum dolor sit amet,{" "}
        <CodeStyle>consectetur adipiscing elit</CodeStyle>, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </HeadSubTitleStyle>
    </HeadContainerStyle>
  );
};

export default Content;
