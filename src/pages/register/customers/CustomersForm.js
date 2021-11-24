import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import { useFormik } from 'formik'

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

function CustomersForm() {

    const [customers, setCostumers] = useState();
    // const [values, setValues] = useState(initialValuesCustomer);

    const classes = useStyles();

    useEffect(() => {
        const getCustomers = async () => {
            await api.get(`customers`)
                .then((res) => {
                    // console.log('data: ', res.data)
                    setCostumers(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getCustomers()
    }, [])

    const formik = useFormik({
        initialValues: initialValuesCustomer,
        onSubmit: (values, { resetForm }) => {
            // console.log('submit: ', values)
            api.post('/customers', values, {});
            resetForm({ values: '' });
        }

    })

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setValues({
    //         ...values,
    //         [name]: value
    //     })
    //     // console.log(values)
    // }

    // const resetForm = () => {
    //     setValues({ values: '' });
    // }


    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log('submit:', values)
    //     api.post('/customers', values);
    // }

    return (
        <>
            <PageTitle title="Cadastro de Clientes" />
            <Paper elevation={3}>

                {/* {customers?.map((customer, index) => (
                    <div key={index}>
                        <div>{customer.name}</div>
                        <div>{customer.email}</div>
                        <div>{customer.cnpj}</div>
                    </div>
                ))} */}
                <Box padding={4}>
                    <form
                        onSubmit={formik.handleSubmit}
                        onReset={formik.handleReset}
                    >
                        <Grid container spacing={2}>
                            <Grid item lg={4} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="corporate_name"
                                    name="corporate_name"
                                    type="text"
                                    label="Razão Social"
                                    variant="standard"
                                    value={formik.values.corporate_name}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.cnpj}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.segment}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.cep}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.street}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.adjunct}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.neighborhood}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.uf}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.phone_other}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item lg={5} md={6} sm={8} xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="E-mail"
                                    variant="standard"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
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

export default CustomersForm;