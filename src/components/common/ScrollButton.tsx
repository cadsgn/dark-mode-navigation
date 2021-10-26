import * as React from "react";
import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;
`;

const ScrollButton = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <Button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      Hola
    </Button>
  );
};

export default ScrollButton;
