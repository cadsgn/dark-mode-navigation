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

// markup
const Header = ({ ToggleTheme }: { ToggleTheme: any }) => {
  return (
    <HeaderContainerStyle>
      <LinkContainerStyle>
        <Link to='/' style={LinkStyle} activeStyle={ActiveStyle}>
          Home
        </Link>
      </LinkContainerStyle>
      <LinkContainerStyle>
        <Link to='/work/' style={LinkStyle} activeStyle={ActiveStyle}>
          Work
        </Link>
      </LinkContainerStyle>
      <LinkContainerStyle>
        <Link to='/playground/' style={LinkStyle} activeStyle={ActiveStyle}>
          Playground
        </Link>
      </LinkContainerStyle>
      <LinkContainerStyle>
        <button onClick={ToggleTheme}>Change theme</button>
      </LinkContainerStyle>
    </HeaderContainerStyle>
  );
};

export default Header;
