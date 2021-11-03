import * as React from "react";
import { Link } from "gatsby";
//styles
import {
  HeaderContainerStyle,
  LinkContainerStyle,
  LinkStyle,
  ActiveStyle,
} from "./header.style";
//components
//icons
import { ReactComponent as LogoReduced } from "../../../assets/logo/reduced.svg";
import { ReactComponent as LogoStandard } from "../../../assets/logo/standard.svg";

// markup
const Header = () => {
  return (
    <HeaderContainerStyle>
      <LogoReduced />
      <LinkContainerStyle>
        <Link to='/' style={LinkStyle} activeStyle={ActiveStyle}>
          Home
        </Link>
        <Link to='/work/' style={LinkStyle} activeStyle={ActiveStyle}>
          Work
        </Link>
        <Link to='/lab/' style={LinkStyle} activeStyle={ActiveStyle}>
          Lab
        </Link>
      </LinkContainerStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
