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
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index'
import { Modal, Select } from 'antd';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio, Popconfirm } from 'antd';
import { DeleteOutlined } from '@mui/icons-material';
import { TextField } from '@mui/material';


const columns = [
    { id: 'index', label: 'S.no', minWidth: 30 },
    { id: 'name', label: 'Adversary Name', minWidth: 100 },
    { id: 'type', label: 'Transaction/Type', minWidth: 30 },
    { id: 'check', label: 'check', minWidth: 50, align: 'left' },
    { id: 'PaymentOptions', label: 'Payment Options', minWidth: 50, align: 'left' },
    { id: 'amount', label: 'Total Amount', minWidth: 30, align: 'left' },
    {
        id: 'actions',
        label: 'Veiw',
        minWidth: 20,
        align: 'center',
    },
];


function createData(index, name, type, check, PaymentOptions, amount) {
    return { index, name, type, check, PaymentOptions, amount };
}

const rows = [
    createData('John', "abc", "John121@gmail.com", "2023-12-23", "123123123 Coins", '1'),




];


export default function Tab3() {
    const { Option } = Select;
    const dispatch = useDispatch();
    const users = useSelector((state) => state.RecivedDataAdversaries);
    const users1 = useSelector((state) => state.Setteled);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [isSecondModalVisible, setIsSecondModalVisible] = React.useState(false);
    const [selectedRowData, setSelectedRowData] = React.useState(null);
    const [additionalRows, setAdditionalRows] = React.useState(1);
    const [showAmountField, setShowAmountField] = React.useState(false);
    const [rowData, setRowData] = React.useState([]);
    const handlePendingButtonClick = (row) => {
        setSelectedRowData(row);
        setIsModalVisible(true);
    };
    const checkhandle = (row) => {
        // console.log(row)
        dispatch(actionCreators.RecivRemoveAdversary(row));
        dispatch(actionCreators.SentRemoveAdversary(row));
        dispatch(actionCreators.addSetteled(row));
        console.log(users)
        setIsModalVisible(false);

    };
    const handleModalCancel = () => {
        setIsModalVisible(false);
    };


    const handleSettlementsClick = () => {
        handleModalCancel(); // Close the current modal
        setIsSecondModalVisible(true); // Open the new modal
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const buttonStyles = {
        backgroundColor: 'green',
        color: '#ffffff',
        borderColor: 'black',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    };
    const buttonStyles1 = {
        backgroundColor: 'black',
        color: '#ffffff',
        borderColor: 'black',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [t, i18n] = useTranslation("global")



    const handleDeleteRow = (rowIndex) => {

        setAdditionalRows((prevRows) => prevRows - 1);

        // Update rowData to remove the deleted row
        setRowData((prevData) => {
            const newData = [...prevData];
            if (newData.length > 0) {
                // Remove inputValie property from each object in the array
                newData.forEach(item => delete item.inputValue);
                // Log the modified array

            }
            newData.splice(rowIndex, 1);
            return newData;
        });
    };
    const handleButtonClick = () => {
        setAdditionalRows((prevRows) => prevRows + 1);
        setShowAmountField(true);
    };
    const renderAdditionalRows = () => {
        const rows = [];

        for (let i = 0; i < additionalRows; i++) {
            rows.push(
                <Row key={i} span={24}>
                    <Col span={8}>
                        <Form.Item label={t("TabFrom1_7.message")}>
                            <DatePicker
                                className="my-input"
                                readOnly
                                onChange={(date, dateString) => {
                                    const updatedRowData = { date: dateString };
                                    if (dateString && dateString.trim() !== "") {
                                        // Include inputValue only if date is present
                                        updatedRowData.inputValue = rowData[i]?.inputValue;
                                    }
                                    rowData[i] = updatedRowData;
                                    setRowData([...rowData]);
                                }}
                            />
                        </Form.Item>
                    </Col>
                    {showAmountField && additionalRows > 1 && (
                        <Col span={12}>
                            <Form.Item label={t("TabFrom1_2.message")}>
                                <Input
                                    className="my-input"
                                    onChange={(e) => {
                                        const inputValue = e.target.value.trim() !== "" ? e.target.value : null;
                                        rowData[i] = { ...rowData[i], inputValue };
                                        setRowData([...rowData]);
                                    }}
                                />
                            </Form.Item>
                        </Col>
                    )}
                    <Col span={4}>
                        {additionalRows > 1 && (
                            <Popconfirm
                                title="Are you sure to delete this row?"
                                onConfirm={() => handleDeleteRow(i)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="link" icon={<DeleteOutlined />} />
                            </Popconfirm>
                        )}
                    </Col>
                </Row>
            );
        }
        return rows;
    };





    return (
        <div className='HA_table_main_add'>
            <div className='HA_table_main_add_child'>
                <p className='HA_table_main_add_child_text'>{t("Tab5_1.message")}</p>{/*Recieved*/}
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
                                                            pending
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
                        <Button key="settlements" onClick={() => handleSettlementsClick()}>
                            Settlements
                        </Button>,
                        <Button key="accepted" type="primary" onClick={() => checkhandle(selectedRowData)}>
                            Accepted
                        </Button>,
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
                <Modal
                    title="Settlements"
                    visible={isSecondModalVisible}
                    onCancel={() => setIsSecondModalVisible(false)} // Close the second modal
                    footer={[
                        // Add buttons or actions for the second modal if needed
                    ]}
                >
                    {

                        <Form
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            layout="horizontal"
                            style={{
                                maxWidth: 1000,
                            }}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label={t("TabFrom1_2.message")}>
                                        <Input className="my-input" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    {/* Selector Dropdown */}
                                    <Form.Item label="Select Option" name="selectOption">
                                        <Select>
                                            <Option value="option1">Money</Option>
                                            <Option value="option2">Favor</Option>
                                            <Option value="option3">Service</Option>
                                            <Option value="option4">Meal</Option>
                                            <Option value="option5">Drink</Option>
                                            <Option value="option6">Apology</Option>
                                            <Option value="option7">Challenge</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    {/* Description Text Field */}
                                    <TextField
                                        id="filled-textarea"
                                        label="Description"
                                        placeholder=""
                                        multiline
                                        fullWidth
                                        variant="filled"
                                    />
                                </Col>
                            </Row>

                            {/* datepicker row add */}
                            {renderAdditionalRows()}

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item>
                                        <Button onClick={handleButtonClick} style={buttonStyles1}>
                                            {t("TabFrom1_8.message")}
                                        </Button>
                                        {/* + Add an Installment */}
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item>
                                        <Button style={buttonStyles1}>
                                            {t("TabFrom1_13.message")}
                                        </Button>
                                        {/* + Add Debt Case */}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    }
                </Modal>

            </Paper>
        </div>
    );
}