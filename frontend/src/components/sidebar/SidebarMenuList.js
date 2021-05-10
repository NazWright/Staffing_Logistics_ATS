import menus from "../data/SideBarData";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { selectAuth } from "../../auth/ auth/authSlice";

function SidebarMenuList() {
  const { AdminMenu, EmployerMenu, ApplicantMenu } = menus;
  const SubMenu = ({ subMenu, menuToggle }) => {
    return (
      <ul className={menuToggle ? "sub-menu active" : "sub-menu"}>
        {subMenu &&
          subMenu.items.map((subMenuItem, index) => {
            return (
              <MenuItem
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

  const getMenuType = (roleName) => {
    const rolesToMenuMap = {
      Admin: AdminMenu,
      Default: AdminMenu,
      Employer: EmployerMenu,
      Recruiter: EmployerMenu,
      Applicant: ApplicantMenu,
    };
    return rolesToMenuMap[roleName] || false;
  };

  const authInfo = useSelector(selectAuth).auth;

  const currentMenu = getMenuType(authInfo.role.name);

  /* Single menu item component */
  const MenuItem = ({ path, title, icon, className, sub_menu }) => {
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

  return (
    <div>
      <ul className="sl-menu sl-menu-dark sl-menu-root sl-menu-inline">
        {currentMenu.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              className={menuItem.cName}
              title={menuItem.title}
              icon={menuItem.icon}
              sub_menu={menuItem.sub_menu}
              path={menuItem.path}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarMenuList;
