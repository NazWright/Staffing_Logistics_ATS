import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoggedInHeader from "./LoggedInHeader";
import VisitorHeader from "./VisitorHeader";
import HeaderWrapper from "./Header.styles";
import appActions from "../../../redux/app/actions";
import { TopbarMenuIcon } from "../../../config/iconConfig";
const { toggleCollapsed } = appActions;

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth) ? true : false;
  const [selectedItem, setSelectedItem] = useState("");
  const { collapsed, openDrawer } = useSelector((state) => state.App);

  const dispatch = useDispatch();
  const handleToggle = useCallback(() => dispatch(toggleCollapsed()), [
    dispatch,
  ]);
  const isCollapsed = collapsed && !openDrawer;

  const style = {
    background: "white",
    position: "fixed",
    width: "100%",
    height: 70,
  };

  const globalAttributes = {
    className: isCollapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar",
    style,
  };

  return (
    <HeaderWrapper>
      <div {...globalAttributes}>
        <div className="isoLeft">
          <button
            className={
              isCollapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
            }
            style={{ color: "rebeccapurple", height: "40px", width: "60px" }}
            onClick={handleToggle}
          >
            {isLoggedIn ? (
              <TopbarMenuIcon size={24} color={"gray"} />
            ) : undefined}
          </button>
        </div>
        <ul className="isoRight"></ul>
      </div>
    </HeaderWrapper>
  );
}
