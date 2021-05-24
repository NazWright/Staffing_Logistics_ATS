import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import { PUBLIC_ROUTE } from "./constants/routeConstants";
import Loader from "./utility/Loader";
import Dashboard from "./components/containers/dashboard/Dashboard";
import { selectAuth } from "./redux/app/features/ auth/authSlice";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("./components/pages/Landing")),
  },
  {
    path: PUBLIC_ROUTE.SEARCH,
    exact: true,
    component: lazy(() => import("./components/pages/search/Search")),
  },
  {
    path: PUBLIC_ROUTE.FORM,
    exact: true,
    component: lazy(() => import("./components/pages/application/PageOne")),
  },
];

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector(selectAuth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => {
              return (
                <Route key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </Route>
              );
            })}
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
