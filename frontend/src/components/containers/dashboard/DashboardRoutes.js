import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Loader from "../../../utility/Loader";

const routes = [
  {
    path: "",
    component: lazy(() => import("./DashboardContent")),
    exact: true,
  },
  {
    path: "/jobs/:jobId",
    component: lazy(() => import("../../jobs/EditJob")),
    exact: true,
  },
  {
    path: "jobs/map",
    component: lazy(() => import("../../pages/map/Map")),
    exact: true,
  },
  {
    path: "jobs/rankings",
    component: lazy(() => import("../../CandidateRankings")),
    exact: true,
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
