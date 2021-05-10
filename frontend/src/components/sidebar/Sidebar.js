import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Button } from "react-bootstrap";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarMenuList from "./SidebarMenuList";
import "../css/Sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleSubMenu = this.handleSubMenu.bind(this);
    this.state = {
      sidebar: false,
      submenu: false,
    };
  }

  handleSidebar() {
    const sidebar = this.state.sidebar;
    this.setState({ sidebar: !sidebar });
  }
  handleSubMenu() {
    const submenu = this.state.submenu;
    this.setState({ submenu: submenu });
  }

  render() {
    // function that updates state in
    // toggles on off
    const sidebar = this.state.sidebar;
    var Menu;

    return (
      <div>
        <a to="#" className="menu-bars">
          <FaIcons.FaBars onClick={this.handleSidebar} />
        </a>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items">
            <div className="navbar-toggle">
              <a to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={this.handleSidebar} />
              </a>
            </div>
            <SidebarMenuList />
          </div>
        </nav>
      </div>
    );
  }
}
