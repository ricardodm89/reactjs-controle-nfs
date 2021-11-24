import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import PageTitle from "../../../components/PageTitle";
import { Link } from 'react-router-dom'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import api from '../../../services/api'
import useStyles from "./styles";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const columns = [
    {
        id: 'nome',
        label: 'Nome Fantasia',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'cnpj',
        label: 'CNPJ',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'email',
        label: 'E-mail',
        minWidth: 130,
        align: 'center',
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'edit',
        label: 'Editar',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'delete',
        label: 'Excluir',
        minWidth: 100,
        align: 'center',
    },
];


const handleDelete = ({ idCustomer }) => {

    console.log('delete id: ', idCustomer)
}

function Customers() {
    const [customers, setCostumers] = useState();
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

    return (
        <>
            <PageTitle title="Clientes" />
            <Paper elevation={3}>
                <Box padding={4}>
                    <Link to='clientes-form'>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Adicionar cliente
                        </Button>
                    </Link>
                </Box>
                <Box padding={4}>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            Key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.map((customer) => (
                                    <TableRow key={customer.id}>
                                        <TableCell>{customer.name}</TableCell>
                                        <TableCell>{customer.cnpj}</TableCell>
                                        <TableCell>{customer.email}</TableCell>
                                        <TableCell>{customer.status}</TableCell>
                                        <TableCell>
                                            <Link to={`clientes-form/${'customer.id'}`}>
                                                <EditOutlinedIcon color="primary" />
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <button type="button" onClick={() => handleDelete(customer.id)} className="btn btn-link"><DeleteIcon color="primary" /></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </>
    );
}

export default Customers;