import React from "react";
import { Grid, Paper } from "@material-ui/core";

// styles

// components
import PageTitle from "../../../components/PageTitle";
import classNames from "classnames";

function Providers() {

  return (
    <>
      <PageTitle title="Fornecedores" />
      <Paper className={classNames.iconsContainer}>

        Fornecedores
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>

        </Grid>
      </Grid>
    </>
  );
}

export default Providers;