import React, { useState } from "react";

const SubMenu = ({ subMenu, menuToggle }) => {
  return (
    <ul className={menuToggle ? "sub-menu active" : "sub-menu"}>
      {subMenu &&
        subMenu.items.map((subMenuItem, index) => {
          return (
            <SidebarMenuItem
              title={subMenuItem.title}
              path={subMenuItem.path}
              icon={subMenuItem.icon}
              key={index}
              className={subMenuItem.cName}
            />
          );
        })}
    </ul>
  );
};

/* Single menu item component */
const SidebarMenuItem = ({ path, title, icon, className, sub_menu }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <li
        className={className}
        onClick={
          sub_menu != undefined ? () => setMenuToggle(!menuToggle) : undefined
        }
      >
        <a href={path}>
          <span className="isoMenuHolder">
            <span className="nav-text">
              {icon}
              <span className="pl-10">{title}</span>
              {sub_menu ? <span>{sub_menu.icon}</span> : undefined}
            </span>
          </span>
        </a>
      </li>
      {sub_menu != undefined && sub_menu != null ? (
        <SubMenu subMenu={sub_menu} menuToggle={menuToggle} />
      ) : undefined}
    </div>
  );
};

export default SidebarMenuItem;
