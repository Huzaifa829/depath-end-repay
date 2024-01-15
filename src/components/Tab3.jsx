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
import { useDispatch, useSelector } from 'react-redux';
import {actionCreators} from '../state/index'



const columns = [
    { id: 'index', label: 'S.no', minWidth: 30 },
    { id: 'name', label: 'Adversary Name', minWidth: 100 },
    { id: 'email', label: 'Gmail', minWidth: 170, align: 'left' },
    { id: 'facebookLink', label: 'Facebook Link', minWidth: 170, align: 'left' },
    {
        id: 'actions',
        label: 'Add A Debt Case',
        minWidth: 170,
        align: 'right',
    },
];

// function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
// }
function createData(index, name, email, facebookLink) {
    return { index, name, email, facebookLink };
}



export default function Tab3() {
    const dispatch = useDispatch();
    const users  = useSelector((state) => state.UserData); 
    // console.log(users)
        const handleOpen = () => {
            dispatch(actionCreators.openModal(true));
          };
    const buttonStyles = {
        backgroundColor: 'rgb(21, 101, 192)',
        color: '#ffffff',
        borderColor: 'rgb(21, 101, 192)',
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
                <Button  onClick={handleOpen} style={buttonStyles}>{t("TabFrom1_4.message")}</Button> {/*Add New Adversary*/}
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>S.no</TableCell>
                                {columns.slice(1).map((column) => (
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
                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                                        <TableCell>{rowIndex + 1}</TableCell>
                                        {columns.slice(1).map((column, columnIndex) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'actions' ? (
                                                        <Button style={buttonStyles} key={columnIndex}>
                                                            {t("Tab3_2.message")}
                                                        </Button>
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
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}