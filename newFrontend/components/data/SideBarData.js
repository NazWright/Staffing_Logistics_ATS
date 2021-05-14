import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

const menus = {
  EmployerMenu: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AiIcons.AiFillHome />,
      cName: "sl-menu-item",
    },
    {
      title: "Client",
      path: "/client",
      icon: <AiIcons.AiOutlineContacts />,
      cName: "sl-menu-item",
      sub_menu: [
        {
          title: "Add Client",
          path: "/add-client",
          cName: " nav-text sl-submenu-item",
        },
        {
          title: "View Clients",
          path: "/view-client",
          cName: "nav-text sl-submenu-item",
        },
      ],
    },
    {
      title: "Applications",
      path: "/workflow",
      icon: <IoIcons.IoIosGitNetwork />,
      cName: "sl-menu-item",
      // submenus
    },
    {
      title: "Job Orders",
      path: "/job-orders",
      icon: <GiIcons.GiSuitcase />,
      cName: "sl-menu-item",
    },
    {
      title: "Job Listings",
      icon: <RiIcons.RiSuitcaseLine />,
      cName: "sl-menu-item",
      sub_menu: {
        icon: <IoIcons.IoIosArrowDown />,
        items: [
          {
            title: "View Listings",
            path: "/listings",
            cName: "nav-text sl-submenu-item",
          },
          {
            title: "Post A Job",
            path: "/add-listings",
            cName: "nav-text sl-submenu-item",
          },
        ],
      },
    },
  ],

  ApplicantMenu: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AiIcons.AiFillHome />,
      cName: "sl-menu-item",
    },
    {
      title: "Job Openings",
      path: "/job-listings",
      icon: <RiIcons.RiSuitcaseLine />,
      cName: "sl-menu-item",
    },
    {
      title: "Contacts",
      path: "/contacts",
      icon: <AiIcons.AiOutlineContacts />,
      cName: "sl-menu-item",
    },
    {
      title: "Application Status",
      path: "/workflow",
      icon: <IoIcons.IoIosGitNetwork />,
      cName: "sl-menu-item",
      // submenus
    },
  ],
  AdminMenu: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AiIcons.AiFillHome />,
      cName: "sl-menu-item",
    },
    {
      title: "Client",
      icon: <AiIcons.AiOutlineContacts />,
      cName: "sl-menu-item",
      sub_menu: {
        icon: <IoIcons.IoIosArrowDown />,
        items: [
          {
            title: "Add Client",
            path: "/add-client",
            cName: "nav-text sl-submenu-item",
          },
          {
            title: "View Clients",
            path: "/view-client",
            cName: "nav-text sl-submenu-item",
          },
        ],
      },
    },
    {
      title: "Applications",
      icon: <IoIcons.IoIosGitNetwork />,
      cName: "sl-menu-item",
      sub_menu: {
        icon: <IoIcons.IoIosArrowDown />,
        items: [
          {
            title: "View Applications",
            path: "/applications",
            cName: "nav-text sl-submenu-item",
          },
        ],
      },
    },
    {
      title: "Job Orders",
      path: "/job-orders",
      icon: <GiIcons.GiSuitcase />,
      cName: "sl-menu-item",
    },
    {
      title: "Job Listings",
      icon: <RiIcons.RiSuitcaseLine />,
      cName: "sl-menu-submenu",
      sub_menu: {
        icon: <IoIcons.IoIosArrowDown />,
        items: [
          {
            title: "View Listings",
            path: "/listings",
            cName: "nav-text sl-submenu-item",
          },
          {
            title: "Post A Job",
            path: "/add-listings",
            cName: "nav-text sl-submenu-item",
          },
        ],
      },
    },
    {
      title: "Admin Console",
      icon: <RiIcons.RiSuitcaseLine />,
      cName: "sl-menu-item",
      sub_menu: {
        icon: <IoIcons.IoIosArrowDown />,
        items: [
          {
            title: "Create User",
            path: "/create-user",
            cName: "nav-text sl-submenu-item",
          },
          {
            title: "Create A Form",
            path: "/create-form",
            cName: "nav-text sl-submenu-item",
          },
        ],
      },
    },
  ],
};

export default menus;
