import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";

import PageTitle from "../../../components/PageTitle";
// import classNames from "classnames";
import api from "../../../services/api";

import useStyles from "./styles";

const initialValuesCustomer = {
    corporate_name: '',
    name: '',
    cnpj: '',
    status: '',
    segment: '',
    cep: '',
    street: '',
    number: '',
    adjunct: '',
    neighborhood: '',
    city: '',
    uf: '',
    phone: '',
    phone_other: '',
    email: '',
};

function Customers() {

    const [customers, setCostumers] = useState();
    const [values, setValues] = useState(initialValuesCustomer);

    var classes = useStyles();

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

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }

    return (
        <>
            <PageTitle title="Clientes" />
            <Paper elevation={3}>

                {/* {customers?.map((customer, index) => (
                    <div key={index}>
                        <div>{customer.name}</div>
                        <div>{customer.email}</div>
                        <div>{customer.cnpj}</div>
                    </div>
                ))} */}
                <Box padding={4}>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item lg={4} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="corporate_name"
                                    name="corporate_name"
                                    type="text"
                                    label="Razão Social"
                                    variant="standard"
                                    values={values.corporate_name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={4} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    type="text"
                                    label="Nome Fantasia"
                                    variant="standard"
                                    values={values.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={2} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="cnpj"
                                    name="cnpj"
                                    type="text"
                                    label="CNPJ"
                                    variant="standard"
                                    values={values.cnpj}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={2} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="status"
                                    name="status"
                                    type="text"
                                    label="Status"
                                    variant="standard"
                                    values={values.status}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={3} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="segment"
                                    name="segment"
                                    type="text"
                                    label="Segmento"
                                    variant="standard"
                                    values={values.segment}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={2} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="cep"
                                    name="cep"
                                    type="text"
                                    label="CEP"
                                    variant="standard"
                                    values={values.cep}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={5} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="street"
                                    name="street"
                                    type="text"
                                    label="Logradouro"
                                    variant="standard"
                                    values={values.street}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={2} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="number"
                                    name="number"
                                    type="text"
                                    label="Número"
                                    variant="standard"
                                    values={values.number}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={4} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="adjunct"
                                    name="adjunct"
                                    type="text"
                                    label="Complemento"
                                    variant="standard"
                                    values={values.adjunct}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={4} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="neighborhood"
                                    name="neighborhood"
                                    type="text"
                                    label="Bairro"
                                    variant="standard"
                                    values={values.neighborhood}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={4} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="city"
                                    name="city"
                                    type="text"
                                    label="Cidade"
                                    variant="standard"
                                    values={values.city}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={3} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="uf"
                                    name="uf"
                                    type="text"
                                    label="Estado"
                                    variant="standard"
                                    values={values.uf}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={2} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    label="Telefone"
                                    variant="standard"
                                    values={values.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={2} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="phone_other"
                                    name="phone_other"
                                    type="text"
                                    label="Telefone"
                                    variant="standard"
                                    values={values.phone_other}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={5} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    type="text"
                                    label="E-mail"
                                    variant="standard"
                                    values={values.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Grid className={classes.gridButton}>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                className={classes.button}
                            >
                                Enviar
                            </Button>
                            <Button variant="contained" type="reset" className={classes.button}>
                                Limpar
                            </Button>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        </>
    );
}

export default Customers;