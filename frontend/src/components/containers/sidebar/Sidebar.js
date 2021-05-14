import React from "react";
import SidebarWrapper from "./Sidebar.styles";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { collapsed, openDrawer, height } = useSelector((state) => state.App);
  const isCollapsed = collapsed && !openDrawer;

  const asideStyle = {
    flex: "0 0 240px",
    maxWidth: "240px",
    minWidth: "240px",
    height: "100vh",
    background: "rgb(45, 52, 70)",
    position: "relative",
    transition: "0.3s",
  };
  const collapsedStyle = {
    flex: "0 0 80px",
    maxWidth: "80px",
    minWidth: "80px",
    width: "80px",
    transition: "0.3s",
    background: "rgb(45, 52, 70)",
  };

  return (
    <SidebarWrapper>
      <div className="">
        <aside
          style={isCollapsed ? collapsedStyle : asideStyle}
          className="isomorphicSidebar"
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
                <ul className="isoDashboardMenu"></ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </SidebarWrapper>
  );
}
