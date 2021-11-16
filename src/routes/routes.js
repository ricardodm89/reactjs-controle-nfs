import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import Layout from "../components/Layout/Layout";

// pages
import Error from "../../src/pages/error";
import Login from "../../src/pages/login";

// context
import { useUserState } from "../../src/context/UserContext";

const Routes = () => {
    // global
    var { isAuthenticated } = useUserState();

    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
            <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
            {/* <PrivateRoute path="/app" component={Layout} /> */}
            {/* <PublicRoute path="/login" component={Login} /> */}
            <PublicRoute path="/app" component={Layout} />
            <Route component={Error} />
        </Switch>
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


};


export default Routes;