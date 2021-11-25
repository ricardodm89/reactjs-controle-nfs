import React, { useEffect, useState } from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Link } from 'react-router-dom'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../../../../services/api'
import useStyles from "./../../styles";


function TableCustomers({ columns }) {
    const [customers, setCostumers] = useState();
    const [updateCustomers, setUpdateCustomers] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        const getCustomers = async () => {
            await api.get(`customers`)
                .then((res) => {
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
        // console.log('id: ', id)
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
    );
}

export default TableCustomers;