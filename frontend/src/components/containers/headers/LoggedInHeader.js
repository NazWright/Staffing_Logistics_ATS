import { useSelector } from "react-redux";

import HeaderWrapper from "./Header.styles";

export default function LoggedInHeader({ style, className }) {
  // get child elements
  return (
    <HeaderWrapper>
      <div style={style}>
        Logged In
        <button></button>
      </div>
    </HeaderWrapper>
  );
}
