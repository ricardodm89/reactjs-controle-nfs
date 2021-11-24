import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import { useFormik } from 'formik'
import * as yup from "yup";
import onBlurCep from '../../../shared/getCEP';

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
        validationSchema: yup.object({
            corporate_name: yup
                .string("Digite a razão social")
                .required("Razão Social é obrigatório."),
            name: yup
                .string("Digite o nome fantasia")
                .required("Nome Fantasia é obrigatório."),
            cnpj: yup
                .string("Digite o CNPJ")
                .required("CNPJ é obrigatório."),
            status: yup
                .string('Selecione o status')
                .required('Status é obrigatório'),
            segment: yup
                .string('Digite o Segmento')
                .required('Segmento é obrigatório'),
            cep: yup
                .string('Digite o CEP')
                .required('CEP é obrigatório'),
            street: yup
                .string('Digite o logradouro')
                .required('Logradouro é obrigatório'),
            number: yup
                .string('Digite o número')
                .required('Número é obrigatório'),
            adjunct: yup
                .string('Digite o completemento'),
            neighborhood: yup
                .string('Digite o bairro')
                .required('Bairro é obrigatório'),
            city: yup
                .string('Digite a cidade')
                .required('Cidade é obrigatória'),
            uf: yup
                .string('Selecione o estado')
                .required('Estado é obrigatório'),
            phone: yup
                .string('Digite o telefone')
                .required('Telefone é obrigatório'),
            phone_other: yup
                .string('Digite o telefone'),
            email: yup
                .string('Digite o e-mail')
                .required('E-mail é obrigatório'),
        }),
        onBlur: (field, { setFieldValue }) => {
            // console.log('ONBLUR');
            // setFieldValue(field);
        },
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
                        onBlur={formik.handleBlur}
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
                                    error={formik.touched.corporate_name && Boolean(formik.errors.corporate_name)}
                                    helperText={formik.touched.corporate_name && formik.errors.corporate_name}
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
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
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
                                    error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
                                    helperText={formik.touched.cnpj && formik.errors.cnpj}
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
                                    error={formik.touched.status && Boolean(formik.errors.status)}
                                    helperText={formik.touched.status && formik.errors.status}
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
                                    error={formik.touched.segment && Boolean(formik.errors.segment)}
                                    helperText={formik.touched.segment && formik.errors.segment}
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
                                    onBlur={onBlurCep}
                                    error={formik.touched.cep && Boolean(formik.errors.cep)}
                                    helperText={formik.touched.cep && formik.errors.cep}
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
                                    error={formik.touched.street && Boolean(formik.errors.street)}
                                    helperText={formik.touched.street && formik.errors.street}
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
                                    error={formik.touched.number && Boolean(formik.errors.number)}
                                    helperText={formik.touched.number && formik.errors.number}
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
                                    error={formik.touched.adjunct && Boolean(formik.errors.adjunct)}
                                    helperText={formik.touched.adjunct && formik.errors.adjunct}
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
                                    error={formik.touched.neighborhood && Boolean(formik.errors.neighborhood)}
                                    helperText={formik.touched.neighborhood && formik.errors.neighborhood}
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
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
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
                                    error={formik.touched.uf && Boolean(formik.errors.uf)}
                                    helperText={formik.touched.uf && formik.errors.uf}
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
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
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
                                    error={formik.touched.phone_other && Boolean(formik.errors.phone_other)}
                                    helperText={formik.touched.phone_other && formik.errors.phone_other}
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
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
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