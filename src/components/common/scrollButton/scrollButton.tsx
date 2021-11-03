import * as React from "react";
import styled from "styled-components";
import isBrowser from "../../../utils/isBrowser";
//icons
import { ReactComponent as ArrowUp } from "../../../assets/icons/arrow-up.svg";

interface IStyledProps {
  visible: boolean;
}

const Button = styled.button<IStyledProps>`
  z-index: 1;
  display: flex;
  place-items: center;
  place-content: center;
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #005b4e;
  border-radius: 50%;
  bottom: 16px;
  right: 16px;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  svg path {
    stroke: white;
    fill: transparent;
  }
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
    if (isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (isBrowser) {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <ArrowUp />
    </Button>
  );
};

export default ScrollButton;
