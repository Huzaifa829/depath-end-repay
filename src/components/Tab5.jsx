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
    { id: 'Status', label: 'Status', minWidth: 50, align: 'left' },
    {
        id: 'actions',
        label: 'Veiw',
        minWidth: 20,
        align: 'center',
    },
];


function createData(index, name, type, check, PaymentOptions, Status, amount) {
    return { index, name, type, check, PaymentOptions, Status, amount };
}

const rows = [
    createData('John', "abc", "John121@gmail.com", "2023-12-23", "123123123 Coins", '1'),




];


export default function Tab3() {
    const { Option } = Select;
    const dispatch = useDispatch();
    const users = useSelector((state) => state.RecivedDataAdversaries);
    // const users1 = useSelector((state) => state.Setteled);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [isModalVisible1, setIsModalVisible1] = React.useState(false);
    const [selectedRowData1, setSelectedRowData1] = React.useState(null);
    const [isSecondModalVisible, setIsSecondModalVisible] = React.useState(false);
    const [selectedRowData, setSelectedRowData] = React.useState(null);
    const [modalselectedRowData1, modalsetSelectedRowData1] = React.useState(null);
    const [modalselectData1, modalsetSelectData1] = React.useState(null);
    const [setlementinput, setsetlementinput] = React.useState('');
    const [modaldescriptioninput, setmodaldescriptioninput] = React.useState('');
    const [additionalRows, setAdditionalRows] = React.useState(1);
    const [showAmountField, setShowAmountField] = React.useState(false);
    const [rowData, setRowData] = React.useState([]);

    console.log(users)
    const handlePendingButtonClick = (row) => {
        setSelectedRowData(row);
        setIsModalVisible(true);
    };
    const SentTosetelment = (row) => {
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
    const handleModalCancel1 = () => {
        setIsModalVisible1(false);
    };
    const handleModalCancel2 = () => {
        setIsSecondModalVisible(false)
    };

    const handleSettlementsClick = (array) => {
        modalsetSelectedRowData1(array)
        setsetlementinput(array.amount)
        modalsetSelectData1(array.type)
        handleModalCancel(); // Close the current modal
        setIsSecondModalVisible(true); // Open the new modal
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const selectedoptionupdate = (e) => {
        modalsetSelectData1(e)
    }
    const modalsetelmentupdate = () => {
        const data = {
            id: modalselectedRowData1.id,
            sented: false,
            recive: true,
            user:'user2',
            newSetelments: {
                amount: setlementinput,
                type: modalselectData1,
                rowData: rowData,
                description: modaldescriptioninput
            },
        }
        // console.log('working',data)
        dispatch(actionCreators.SentUpdateAdversary(data));
        dispatch(actionCreators.RecivUpdateAdversary(data));
        handleModalCancel2();
        console.log('working or not', users)

    }



    const handlePendingButtonClick1 = (row) => {
        // console.log(row)
        setSelectedRowData1(row);
        setIsModalVisible1(true);
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
                                                        <Button style={buttonStyles} key={columnIndex} onClick={() => (row.recive ? handlePendingButtonClick1(row) : handlePendingButtonClick(row))}>
                                                            {/* {t("Tab3_2.message")} */}
                                                            {row.recive ? 'View' : 'Action'}
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
                    style={{ maxHeight: '60vh', overflowY: 'auto' }}
                    onCancel={handleModalCancel}
                    footer={[
                        <Button key="settlements" onClick={() => handleSettlementsClick(selectedRowData)}>
                            Settlements
                        </Button>,
                        <Button key="accepted" type="primary" onClick={() => SentTosetelment(selectedRowData)}>
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
                    {selectedRowData && selectedRowData.newSetelments && selectedRowData.newSetelments.map((item, index) => (
                        <div key={index}>
                            <h1>updated setelments {index}</h1>
                            <p>amount: {item.amount}</p>
                            <p>description: {item.description}</p>
                            <p>rowData:</p>
                            {item.rowData && item.rowData.map((item2, index2) => (
                                <div key={index2}>
                                    <p>Date: {item2.date}</p>
                                    <p>On Date Amount: {item2.inputValue}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </Modal>
                <Modal
                    title="Settlements"
                    visible={isSecondModalVisible}
                    onCancel={handleModalCancel2} // Close the second modal
                    footer={[
                        <Button key="accepted" type="primary">
                            Cancel
                        </Button>,
                    ]}
                >
                    {

                        <Form
                            initialValues={{ selectOption: modalselectData1 }}
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
                                        <Input className="my-input" value={setlementinput} onChange={(e) => setsetlementinput(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    {/* Selector Dropdown */}

                                    <Form.Item label="Select Option" name="selectOption">
                                        <Select onChange={selectedoptionupdate}>
                                            <Option value="Money">Money</Option>
                                            <Option value="Favor">Favor</Option>
                                            <Option value="Service">Service</Option>
                                            <Option value="Meal">Meal</Option>
                                            <Option value="Drink">Drink</Option>
                                            <Option value="Apology">Apology</Option>
                                            <Option value="Challenge">Challenge</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item label="Description">
                                        <Input.TextArea
                                            className="my-input"
                                            autoSize={{ minRows: 2, maxRows: 3 }}
                                            onChange={(e) => setmodaldescriptioninput(e.target.value)}
                                        />
                                    </Form.Item>
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
                                        <Button style={buttonStyles1} onClick={modalsetelmentupdate}>
                                            {t("TabFrom1_13.message")}
                                        </Button>
                                        {/* + Add Debt Case */}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    }
                </Modal>
                <Modal
    title="Pending Details"
    visible={isModalVisible1}
    onCancel={handleModalCancel1}
    style={{ maxHeight: '60vh', overflowY: 'auto' }}
    footer={null}
>
    {selectedRowData1 && (
        <div>
            <p>Adversary Name: {selectedRowData1.name}</p>
            <p>amount: {selectedRowData1.amount}</p>
            <p>check: {selectedRowData1.check}</p>
            <p>email: {selectedRowData1.email}</p>
            <p>fblink: {selectedRowData1.fblink}</p>
            <p>PaymentOptions: {selectedRowData1.PaymentOptions}</p>
            {selectedRowData1.rowData.map((item, index) => (
                <div key={index}>
                    <p>Date: {item.date}</p>
                    <p>On Date Amount: {item.inputValue}</p>
                </div>
            ))}
        </div>
    )}
    {selectedRowData1 && selectedRowData1.newSetelments && selectedRowData1.newSetelments.map((item1, index1) => (
        <div key={index1}>
            <h1>updated setelments {index1}</h1>
            <p>amount: {item1.amount}</p>
            <p>description: {item1.description}</p>
            <p>rowData:</p>
            {item1.rowData && item1.rowData.map((item2, index2) => (
                <div key={index2}>
                    <p>Date: {item2.date}</p>
                    <p>On Date Amount: {item2.inputValue}</p>
                </div>
            ))}
        </div>
    ))}
</Modal>



            </Paper>
        </div>
    );
}