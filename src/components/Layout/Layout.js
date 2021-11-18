import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import Customers from "../../pages/register/customers/Customers";
import Providers from "../../pages/register/providers/Providers";
import Invoices from "../../pages/register/invoices/Invoices";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/cadastros/clientes" component={Customers} />
            <Route path="/app/cadastros/fornecedores" component={Providers} />
            <Route path="/app/cadastros/notas-fiscais" component={Invoices} />

            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/maps" component={Maps} />
            <Route path="/app/icons" component={Icons} />
            <Route path="/app/charts" component={Charts} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
