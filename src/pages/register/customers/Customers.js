import React, { useEffect, useState } from "react";
import { Grid, Paper, TextField } from "@material-ui/core";

import PageTitle from "../../../components/PageTitle";
import classNames from "classnames";
import api from "../../../services/api";

function Customers() {
    const [customers, setCostumers] = useState();

    useEffect(() => {
        const getCustomers = async () => {
            await api.get(`customers`)
                .then((res) => {
                    console.log('data: ', res.data)
                    setCostumers(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getCustomers()
    }, [])

    // console.log('Customers: ', customers)

    return (
        <>
            <PageTitle title="Clientes" />
            <Paper className={classNames.iconsContainer}>

                {customers?.map((customer, index) => (
                    <div key={index}>
                        <div>{customer.name}</div>
                        <div>{customer.email}</div>
                        <div>{customer.cnpj}</div>
                    </div>
                ))}

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Nome" variant="standard" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Nome" variant="standard" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Nome" variant="standard" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Nome" variant="standard" />
                    </Grid>
                </Grid>

            </Paper>


        </>
    );
}

export default Customers;