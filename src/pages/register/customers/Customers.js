import React from 'react';
import { Box, Button, Paper } from "@material-ui/core";
import PageTitle from "../../../components/PageTitle";
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import TableCustomers from './components/TableCostumers/TableCustomers';
import ColumnsTable from './components/TableCostumers/ColumnsTable';

function Customers() {

    const classes = useStyles();

    return (
        <>
            <PageTitle title="Clientes" />
            <Paper elevation={3}>
                <Box padding={4}>
                    <Link to='clientes-form' className={classes.link}>
                        <Button variant="contained" color="primary" >
                            Adicionar cliente
                        </Button>
                    </Link>
                </Box>
                <Box padding={4}>
                    <TableCustomers columns={ColumnsTable} />
                </Box>
            </Paper>
        </>
    );
}

export default Customers;