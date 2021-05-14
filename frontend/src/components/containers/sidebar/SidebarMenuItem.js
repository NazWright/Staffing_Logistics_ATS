import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function SidebarMenuItem({ options }) {
  const { collapsed, openDrawer } = useSelector((state) => state.App);
  const isCollapsed = collapsed && !openDrawer;

  const [menuToggle, setMenuToggle] = useState(false);

  const renderItem = () => {
    if (isCollapsed) {
      return (
        <a href={options.path}>
          <span>{options.icon}</span>
        </a>
      );
    }
    return (
      <a href={options.path}>
        <span className="isoMenuHolder">
          <span style={{ marginLeft: "20px" }}>{options.leftIcon}</span>
          <span className="nav-text">{options.title}</span>
        </span>
      </a>
    );
  };

  const SubMenu = ({ subMenu, menuToggle }) => {
    return (
      <ul className={menuToggle ? "sub-menu active" : "sub-menu"}>
        {subMenu &&
          subMenu.map((subMenuItem, index) => {
            return (
              <li key={index}>
                <a href={subMenuItem.path}>
                  <span>{subMenuItem.title}</span>
                </a>
              </li>
            );
          })}
      </ul>
    );
  };

  const renderChildren = () => {
    return (
      <ul style={{ background: "rgb(32, 39, 57)" }}>
        {options.children.map((item, index) => {
          return (
            <li style={{ textAlign: "center" }} key={index}>
              <a href={item.path}>
                <span className="nav-text">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <li
        style={isCollapsed ? { textAlign: "center" } : undefined}
        onClick={
          options.children != undefined
            ? () => setMenuToggle(!menuToggle)
            : undefined
        }
      >
        {renderItem()}
      </li>
      {options.children ? (
        <SubMenu menuToggle={menuToggle} subMenu={options.children} />
      ) : undefined}
    </div>
  );
}
