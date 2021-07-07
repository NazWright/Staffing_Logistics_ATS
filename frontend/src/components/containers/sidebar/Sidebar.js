import React from "react";
import SidebarWrapper from "./Sidebar.styles";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../../../redux/app/actions";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  const { collapsed, openDrawer, height } = useSelector((state) => state.App);
  const isCollapsed = collapsed && !openDrawer;
  const dispatch = useDispatch();
  const { toggleOpenDrawer } = appActions;

  const asideStyle = {
    flex: "0 0 240px",
    maxWidth: "240px",
    minWidth: "240px",

    background: "rgb(45, 52, 70)",
    transition: "0.3s",
    float: "left",
  };
  const collapsedStyle = {
    flex: "0 0 80px",
    maxWidth: "80px",
    minWidth: "80px",
    width: "80px",
    transition: "0.3s",
    background: "rgb(45, 52, 70)",
    float: "left",
  };

  const onMouseEnter = (event) => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };
  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };

  return (
    <aside
      style={isCollapsed ? collapsedStyle : asideStyle}
      className="isomorphicSidebar"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="sidebar-children"
        style={{
          position: "relative",
          zIndex: "1001",
          background: "rgb(45, 52, 70)",
        }}
      >
        <div className="isoLogoWrapper"></div>
        <div className="menu-items-wrapper" style={{ height: "100%" }}>
          <div
            style={{
              position: "relative",
              inset: "0px",
              overflow: "scroll",
              marginRight: "0px",
              marginBottom: "0px",
              height: "100%",
            }}
          >
            <ul className="isoDashboardMenu" style={{ listStyle: "none" }}>
              <SidebarMenu />
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* <div
        className="sidebar-children"
        style={{
          position: "relative",
          zIndex: "1001",
          background: "rgb(45, 52, 70)",
        }}
      >
        <div className="isoLogoWrapper"></div>
        <div className="menu-items-wrapper" style={{ height: 931 }}>
          <div
            style={{
              position: "relative",
              inset: "0px",
              overflow: "scroll",
              marginRight: "0px",
              marginBottom: "0px",
              height: "100%",
            }}
          >
            <ul className="isoDashboardMenu">
              <SidebarMenu />
            </ul>
          </div>
        </div>
      </div> */
