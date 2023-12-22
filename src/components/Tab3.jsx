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
import { useTranslation } from 'react-i18next';


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
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),
    createData('1', 'john', "abc", "john121@gmail.com"),

  
];


export default function Tab3() {
    const buttonStyles = {
        backgroundColor: 'black',
        color: '#ffffff',
        borderColor: 'black',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
      };
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {

        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [t, i18n] = useTranslation("global")
    return (
        <div className='HA_table_main_add'>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>{t("Tab3_1.message")}</p>{/*My Adversaries*/}
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
                                                        <Button  style={buttonStyles} key={columnIndex}>
                                                           {t("Tab3_2.message")}
                                                        </Button>/* Add A Debt Case*/
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