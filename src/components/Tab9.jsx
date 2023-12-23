// Tab9

import React, { useState,useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; 
import noteContext from '../context/check/NoteContext';

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
const nam=useContext(noteContext)

useEffect(()=>{
    nam.update();
})
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

    const [t, i18n] = useTranslation("global")
    return (
        <div className='HA_table_main_add'>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>{t("Tab9_1.message")}</p> {/*User Wallet*/}
            </div>
            <Paper elevation={5} style={{ width: '300px', padding: '20px', margin: '0px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                {/* Icon Section */}
                <Box marginRight={2}>
                    <Icon component={AccountBalanceWalletIcon} fontSize="large" color="black" />
                </Box>

                {/* Text Section */}
                <Box>
                    <Typography variant="h5">{t("Tab9_2.message")}</Typography> {/*Total Balance*/}
                    <Typography variant="h4" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                       100 $ {/*100 $*/}
                    </Typography>
                </Box>
            </Paper>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>{t("Tab9_3.message")}</p> {/*Last Transaction*/}
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
                <p className='HA_table_main_add_child_text'>{t("Tab9_4.message")}</p> {/*Make a Transaction*/}
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
                        <Form.Item label={t("Tab9_5.message")}> {/*Amount (REPAYcoins):*/}
                            <Input className="my-input" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={t("Tab9_6.message")}> {/*Transaction Type:*/}
                            <Select placeholder={t("Tab9_7.message")}> {/*Full Payment*/}
                                <Select.Option value="demo">{t("Tab9_8.message")}</Select.Option> {/*Full Payment*/}
                                <Select.Option value="demo">{t("Tab9_9.message")}</Select.Option> {/*Installement*/}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>


                <Form.Item>
                    <Button style={buttonStyles}>{t("Tab9_10.message")}</Button> {/*Submit*/}
                </Form.Item>
            </Form>
        </div>
    );
};
export default Tab9;