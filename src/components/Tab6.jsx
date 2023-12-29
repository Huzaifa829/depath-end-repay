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
import { LinearProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index'
import { Modal } from 'antd';
import ProgresBarRound from './ProgressBar/ProgresBarRound';
// import { useDispatch } from 'react-redux';

const columns = [
    { id: 'index', label: 'S.no', minWidth: 30 },
    { id: 'name', label: 'Adversary Name', minWidth: 100 },
    { id: 'type', label: 'Transaction/Type', minWidth: 30 },
    { id: 'check', label: 'check', minWidth: 50, align: 'left' },
    { id: 'PaymentOptions', label: 'Payment Options', minWidth: 50, align: 'left' },

    
    { id: 'amount', label: 'Total Amount', minWidth: 30, align: 'left' },
    { id: 'progress', label: 'Progress', minWidth: 100, align: 'center' },
    {
        id: 'actions',
        label: 'Veiw',
        minWidth: 20,
        align: 'center',
    },
];

function createData(index, name, type, check, PaymentOptions, amount,progress) {
    return { index, name, type, check, PaymentOptions, amount,progress };
}
const rows = [
    {
        name: 'hzuaifa',
        category: 'abc',
        dueDate: 'abc',
        datapass: '25%',  // Assuming this is your progress value
        amount: '123231',
    },
    {
        name: 'hzuaifa',
        category: 'abc',
        dueDate: 'abc',
        datapass: '25%',  // Assuming this is your progress value
        amount: '123231',
    },
    {
        name: 'hzuaifa',
        category: 'abc',
        dueDate: 'abc',
        datapass: '25%',  // Assuming this is your progress value
        amount: '123231',
    },
];
// console.log(rows)
export default function Tab6() {

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [selectedRowData, setSelectedRowData] = React.useState(null);
    const handlePendingButtonClick = (row) => {
        setSelectedRowData(row);
        setIsModalVisible(true);
    };
    const handleModalCancel = () => {
        setIsModalVisible(false);
    };


    const dispatch = useDispatch();
    const users = useSelector((state) => state.Setteled);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const buttonStyles = {
        backgroundColor: 'green',
        color: '#ffffff',
        borderColor: 'black',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [t, i18n] = useTranslation("global")
    return (
        <div className='HA_table_main_add'>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>{t("Tab6_1.message")}</p>{/*Setteled Debt Cases*/}
               
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
                                                        <Button style={buttonStyles} key={columnIndex} onClick={() => handlePendingButtonClick(row)}>
                                                            {/* {t("Tab3_2.message")} */}
                                                            Veiw
                                                        </Button>
                                                    ) : column.id === 'progress' ? (
                                                        <ProgresBarRound percentage={60} />
                                                    )
                                                     :(
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
                <Modal
                    title="Pending Details"
                    visible={isModalVisible}
                    onCancel={handleModalCancel}
                    footer={[
                 
                    ]}
                >
                    {selectedRowData && (
                        // Render the details of the selected row inside the modal content
                        <div>
                            <p>Adversary Name: {selectedRowData.name}</p>
                            <p>amount: {selectedRowData.amount}</p>
                            <p>check: {selectedRowData.check}</p>
                            <p>email: {selectedRowData.email}</p>
                            <p>fblink: {selectedRowData.fblink}</p>
                            <p>PaymentOptions: {selectedRowData.PaymentOptions}</p>
                            {selectedRowData.rowData.map((item, index) => (
                                <div key={index}>
                                    <p>Date: {item.date}</p>
                                    <p>On Date Amount: {item.inputValue}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </Modal>


            </Paper>
        </div>
    );
}
