import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./tabela.css"

const rows = [
    {
        id: 1, nome: "Torta de limão",
        descricao: "Torta de limão com massa crocante"
    },
    {
        id: 2, nome: "Brigadeiro",
        descricao: "Brigas"
    },
    {
        id: 3, nome: "Cuscuz",
        descricao: "Cuscuz doce"
    },
    {
        id: 4, nome: "Bolo de cenoura",
        descricao: "Bolin com café bom dms "
    }
];

const Tabela = () => {
    return (
        <div style={{width: "100%"}}>

            <TableContainer component={Paper} className="minha-tabela" >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">Descrição</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={index % 2 === 0 ? { backgroundColor: "red" } : { backgroundColor: "blue" }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{`nome: ${row.nome}`}</TableCell>
                                <TableCell align="left">{row.descricao}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Tabela;