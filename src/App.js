import React from "react";
import Routes from './routes/routes'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'

// components
import Layout from "./components/Layout";

// pages
import Error from "../src/pages/error";
import Login from "../src/pages/login";

// context
import { useUserState } from "../src/context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <Router>
      <Routes />
    </Router>




  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }


}
