import React from "react";
import { Grid, Paper } from "@material-ui/core";

// styles

// components
import PageTitle from "../../../components/PageTitle";
import classNames from "classnames";

function Invoices() {

    return (
        <>
            <PageTitle title="Notas Fiscais" />
            <Paper className={classNames.iconsContainer}>
                Notas Fiscais
            </Paper>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </>
    );
}

export default Invoices;