import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PageTitle from "../../../components/PageTitle";
import { Link } from 'react-router-dom'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import api from '../../../services/api'
import useStyles from "./styles";

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
        align: 'left',
    },
    {
        id: 'email',
        label: 'E-mail',
        minWidth: 130,
        align: 'left',
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'edit',
        label: 'Editar',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'delete',
        label: 'Excluir',
        minWidth: 100,
        align: 'left',
    },
];



function Customers() {
    const [customers, setCostumers] = useState();
    // const [data, setData] = useState();
    const classes = useStyles();
    const [updateCustomers, setUpdateCustomers] = useState(false);

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
        setUpdateCustomers(false)
    }, [updateCustomers])


    const handleDelete = async (id) => {
        console.log('id: ', id)
        await api.delete(`customers/${id}`)
            .then(response => {
                console.log('delete sucesso');
                setUpdateCustomers(true)
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <>
            <PageTitle title="Clientes" />
            <Paper elevation={3}>
                <Box padding={4}>
                    <Link to='clientes-form' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" >
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
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers?.map((customer) => (
                                    <TableRow key={customer.id}>
                                        <TableCell>{customer.name}</TableCell>
                                        <TableCell>{customer.cnpj}</TableCell>
                                        <TableCell>{customer.email}</TableCell>
                                        <TableCell>{customer.status}</TableCell>
                                        <TableCell>
                                            <Link to={`clientes-form/${customer.id}`}>
                                                <Button type="button" className="btn btn-link"><EditOutlinedIcon color="primary" /></Button>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Button type="button" onClick={() => handleDelete(customer.id)} className="btn btn-link"><DeleteIcon color="primary" /></Button>
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