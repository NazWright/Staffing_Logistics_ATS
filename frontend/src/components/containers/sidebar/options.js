import React from "react";
import {
  SidebarEmailIcon,
  SidebarChatIcon,
  SidebarEcommerceIcon,
  SidebarMapsIcon,
  SidebarProfileIcon,
  SidebarScrumBoardIcon,
  SidebarInvoiceIcon,
  SidebarYouTubeIcon,
  SidebarCalendarIcon,
  SidebarNotesIcon,
  SidebarToDosIcon,
  SidebarFireStoreIcon,
  SidebarContactsIcon,
  SidebarShuffleIcon,
  SidebarChartsIcon,
  SidebarFormsIcon,
  SidebarUIIcon,
  SidebarAdvancedIcon,
  SidebarFeedbackIcon,
  SidebarTablesIcon,
  SidebarPagesIcon,
  SidebarGithubIcon,
  SidebarBlankIcon,
} from "../../../config/iconConfig";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

/* const options = [
  {
    key: "home",
    path: "/",
    label: "sidebar.home",
    title: "Home",
    leftIcon: <SidebarEmailIcon size={19} />,
    icon: <SidebarEmailIcon size={25} />,
  },
  {
    key: "chat",
    path: "/dashboard/chat",
    label: "sidebar.chat",
    title: "Chat",
    leftIcon: <SidebarChatIcon size={19} />,
    icon: <SidebarChatIcon size={25} />,
  },
];
export default options;

import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

const options = {
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
      leftIcon: <AiIcons.AiFillHome />,
      cName: "sl-menu-item",
    },
    {
      title: "Job Openings",
      path: "/job-listings",
      leftIcon: <RiIcons.RiSuitcaseLine />,
      cName: "sl-menu-item",
    },
    {
      title: "Contacts",
      path: "/contacts",
      leftIcon: <AiIcons.AiOutlineContacts />,
      cName: "sl-menu-item",
    },
    {
      title: "Application Status",
      path: "/workflow",
      leftIcon: <IoIcons.IoIosGitNetwork />,
      cName: "sl-menu-item",
      // submenus
    },
  ],
  AdminMenu: [
    {
      title: "Dashboard",
      path: "/dashboard",
      leftIcon: <AiIcons.AiFillHome />,
      cName: "sl-menu-item",
    },
    {
      title: "Client",
      leftIcon: <AiIcons.AiOutlineContacts />,
      cName: "sl-menu-item",
      sub_menu: {
        leftIcon: <IoIcons.IoIosArrowDown />,
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

export default options; */

const options = {
  AdminMenu: [
    {
      key: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      leftIcon: <AiIcons.AiFillHome size={19} />,
      icon: <AiIcons.AiFillHome size={25} />,
    },
    {
      key: "applications",
      title: "Applications",
      path: "/applications",
      leftIcon: <IoIcons.IoIosGitNetwork size={19} />,
      icon: <IoIcons.IoIosGitNetwork size={25} />,
    },
    {
      key: "admin",
      title: "Admin Console",
      leftIcon: <RiIcons.RiSuitcaseLine size={19} />,
      icon: <RiIcons.RiSuitcaseLine size={25} />,
      children: [
        {
          title: "Create User",
          path: "/create-user",
        },
        {
          title: "Create A Form",
          path: "/create-form",
        },
      ],
    },
  ],
};

export default options;
