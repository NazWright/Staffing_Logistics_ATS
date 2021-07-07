import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TopbarMenuIcon } from "../../../config/iconConfig";
import appActions from "../../../redux/app/actions";
import { Row, Col } from "react-bootstrap";
import "./Header.css";

const { toggleCollapsed } = appActions;

export default function LoggedInHeader({ style, className }) {
  const { collapsed, openDrawer } = useSelector((state) => state.App);
  const dispatch = useDispatch();
  const handleToggle = useCallback(
    () => dispatch(toggleCollapsed()),
    [dispatch]
  );
  const isCollapsed = collapsed && !openDrawer;

  // get child elements
  return (
    <Row>
      <Col md={3} className="float-left">
        <button
          className={
            isCollapsed ? "menuButton menuCollapsed" : "menuButton menuOpen"
          }
          style={{ color: "rebeccapurple", height: "40px", width: "60px" }}
          onClick={handleToggle}
        >
          <TopbarMenuIcon size={24} color={"gray"} />
        </button>
      </Col>
      <Col md={8} className="float-left"></Col>
    </Row>
  );
}
