import menus from "../data/SideBarData";
import { useSelector } from "react-redux";
import React from "react";
import { selectAuth } from "../../auth/ auth/authSlice";
import SidebarMenuItem from "./SidebarMenuItem";

function SidebarMenuList() {
  const { AdminMenu, EmployerMenu, ApplicantMenu } = menus;

  // const getMenuType = (roleName) => {
  //   const rolesToMenuMap = {
  //     Admin: AdminMenu,
  //     Default: AdminMenu,
  //     Employer: EmployerMenu,
  //     Recruiter: EmployerMenu,
  //     Applicant: ApplicantMenu,
  //   };
  //   return rolesToMenuMap[roleName] || false;
  // };

  // const authInfo = useSelector(selectAuth).auth;

  // const currentMenu = getMenuType(authInfo.role.name);

  return <div></div>;
}

export default SidebarMenuList;

/*  <ul className="sl-menu sl-menu-dark sl-menu-root sl-menu-inline">
        {currentMenu.map((menuItem, index) => {
          return (
            <SidebarMenuItem
              key={index}
              className={menuItem.cName}
              title={menuItem.title}
              icon={menuItem.icon}
              sub_menu={menuItem.sub_menu}
              path={menuItem.path}
            />
          );
        })}
      </ul> */
