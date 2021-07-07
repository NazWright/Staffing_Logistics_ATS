import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowSize from "../../../hooks/useWindowSize";
import { DashboardContainer, DashboardGlobalStyles } from "./Dashboard.styles";
import appActions from "../../../redux/app/actions";
import Header from "../headers/Header";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  //const appHeight

  const { toggleAll } = appActions;
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();

  useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  const { collapsed, openDrawer } = useSelector((state) => state.App);
  const isCollapsed = collapsed && !openDrawer;

  const styles = {
    layout: {
      flexDirection: "row",
      overflowX: "hidden",
      height,
      maxHeight: height,
    },
    content: {
      padding: "70px 0 0",
      flexShrink: "0",
      background: "#f1f3f6",
      position: "relative",
    },
    footer: {
      background: "#ffffff",
      textAlign: "center",
      borderTop: "1px solid #ededed",
    },
  };

  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section className="float-left" style={{ width: "100%" }}>
        <DashboardRoutes />
      </section>
    </main>
  );
}
