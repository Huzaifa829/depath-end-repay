import * as React from 'react';
import '../cssFile/Tab3.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from 'antd';

const columns = [
    { id: 'name', label: 'S.no', minWidth: 30 },
    { id: 'code', label: 'Adversary Name', minWidth: 170 },
    { id: 'population', label: 'Category', minWidth: 70, align: 'left', },
    { id: 'size', label: 'Due Date', minWidth: 70, align: 'left', },
    { id: 'datapass', label: 'Transaction Direction', minWidth: 100, align: 'left', },
    { id: 'density', label: 'Actions', minWidth: 100, align: 'left', },
    { id: 'price', label: 'Amounts', minWidth: 170, align: 'right', },
];

function createData(name, code, population, size,density,datapass,price) {
    return { name, code, population, size, density,datapass,price };
}

const rows = [
    createData('1', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('2', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('3', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('4', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('5', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('6', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('7', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('8', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('9', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
    createData('10', 'Please Select Adversary Name:', "Money", "undefined",'asdasda',"2023-12-23","123123123 Coins"),
  

];
console.log(rows)

export default function Tab3() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='HA_table_main_add'>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>Offers Recieved</p>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column, columnIndex) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'density' ? (
                                                        <>
                                                        <Button style={{backgroundColor:'red',color:'white'}} key={columnIndex} onClick={() => console.log('Button clicked')}>
                                                            Add A Debt Case
                                                        </Button>
                                                        <Button style={{backgroundColor:'#00e500',color:'white'}} key={columnIndex} onClick={() => console.log('Button clicked')}>
                                                            Accpet
                                                        </Button>
                                                        </>
                                                    ) : (
                                                        value
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}