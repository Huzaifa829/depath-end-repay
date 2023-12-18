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

const columns = [
    { id: 'name', label: 'S.no', minWidth: 30 },
    { id: 'code', label: 'Adversary Name', minWidth: 100 },
    {
        id: 'population',
        label: 'Facebook Link',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'size',
        label: 'Gmail',
        minWidth: 170,
        align: 'left',

    },
    {
        id: 'density',
        label: 'Add A Debt Case',
        minWidth: 170,
        align: 'right',
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('1', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('2', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('3', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('4', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('5', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('6', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('7', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('8', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('9', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('10', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
    createData('11', 'Huzaifa', "abc", "huizafahemd829@gmail.com"),
  
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
                <p className='HA_table_main_add_child_text'>My Adversaries</p>
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
                                                        <button key={columnIndex} onClick={() => console.log('Button clicked')}>
                                                            Add A Debt Case
                                                        </button>
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