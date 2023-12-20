import React, { useState } from 'react';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio, Select } from 'antd';
import '../cssFile/Tab3.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Paper, Typography, Box, Icon } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; // Import the wallet icon

const columns = [
    { id: 'name', label: 'S.no', minWidth: 30 },
    { id: 'code', label: 'Adversary Name', minWidth: 170 },
    { id: 'size', label: 'Date', minWidth: 70, align: 'left', },
    { id: 'density', label: 'Amount', minWidth: 100, align: 'left', },
    { id: 'population', label: 'Type', minWidth: 70, align: 'left', },
    { id: 'datapass', label: 'Transaction ID', minWidth: 100, align: 'left', },
];

function createData(name, code, size, density, population, datapass) {
    return { name, code, size, density, population, datapass, };
}

const rows = [
    createData('1', 'Please Select Adversary Name:', "2023-11-09", "$50", ' Credit', "123456 "),



];
const Tab9 = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const buttonStyles = {
        backgroundColor: 'black',
        color: '#ffffff',
        borderColor: 'black',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    };
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div className='HA_table_main_add'>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>User Wallet</p>
            </div>
            <Paper elevation={5} style={{ width: '300px', padding: '20px', margin: '0px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                {/* Icon Section */}
                <Box marginRight={2}>
                    <Icon component={AccountBalanceWalletIcon} fontSize="large" color="black" />
                </Box>

                {/* Text Section */}
                <Box>
                    <Typography variant="h5">Total Balance</Typography>
                    <Typography variant="h4" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                        100 $
                    </Typography>
                </Box>
            </Paper>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>Last Transaction</p>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 140 }}>
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
                                                    {value}
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
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>Make a Transaction</p>
            </div>
            <Form
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                style={{
                    maxWidth: 1000,
                }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Amount (REPAYcoins):">
                            <Input className="my-input" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Transaction Type:">
                            <Select placeholder="Full Payment">
                                <Select.Option value="demo">Full Payment</Select.Option>
                                <Select.Option value="demo">Installement</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>


                <Form.Item>
                    <Button style={buttonStyles}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Tab9;