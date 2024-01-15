
// TabFrom1

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio, Popconfirm } from 'antd';
import '../../cssFile/TabFrom.css'
import PopupForm from '../PopupForm/PopupForm1';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index'
import { DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';



const TabFrom1 = () => {
    const [t, i18n] = useTranslation("global")
    const [formData, setFormData] = useState([]);
    const [additionalRows, setAdditionalRows] = useState(1);
    const [showAmountField, setShowAmountField] = useState(false);
    const [rowData, setRowData] = useState([]);

    const dispatch = useDispatch();
    const [uniqueId, setUniqueId] = useState('');
    const open = useSelector((state) => state.amount);
    const users = useSelector((state) => state.UserData);
    const addAdversaries = useSelector((state) => state.Adversaries);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedEmail, setSelectedEmail] = useState('');
    const [selectedFacebok, setSelectedFacebok] = useState('');
    const [selectedOption, setSelectedOption] = useState(undefined);


    const treeData = users.map((row, index) => ({
        title: row.name,
        value: row.email,
    }));
    const hello = [
        {
            date: 'asdjasjd',
            inputValie: 'asdjkasjkd'
        },
        {
            date: 'asdjasjd',
            inputValie: 'asdjkasjkd'
        }
    ]
    const generateUniqueId = () => {
        // The following line generates a random string that can be used as a unique ID
        const newUniqueId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

        setUniqueId(newUniqueId);
    };
    useEffect(() => {
        const intervalId = setInterval(generateUniqueId, 1000); // Change 1000 to the desired interval in milliseconds

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const handleAddDebtCase = () => {
        let abc = false
        if (selectedValue === selectedValue) {
            const allData = {
                id: uniqueId,
                name: selectedValue,
                amount: selectedAmount,
                email: selectedEmail,
                fblink: selectedFacebok,
                check: selectedOption,
                type: 'money',
                PaymentOptions: "Full",
                Status: 'pendding',
                rowData: rowData,
                newSetelments: [],
                sented: true,
                recive: false
            }
            dispatch(actionCreators.addAdversaries(allData));
            dispatch(actionCreators.SentAdversaries(allData));
            dispatch(actionCreators.RecivedAdversaries(allData));
            console.log("adverseris_data", addAdversaries)

            abc = true
        }



        if (abc === true) {

            Swal.fire({
                title: 'Success!',
                text: 'The data has been added successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            setSelectedAmount('');
            setSelectedValue(null);
            setSelectedEmail('');
            setSelectedFacebok('');
            setSelectedOption(undefined);
            setAdditionalRows(1);
            setShowAmountField(false);
            setRowData([]);
        }





    };



    const handleTreeSelectChange = (value, label, extra) => {


        console.log('USERS:', label[0]);

        users.map((user) => {
            if (value == user.email) {

                console.log('confirm', user)
                setSelectedEmail(user.email)
                setSelectedFacebok(user.facebookLink)
                setSelectedValue(label[0]);

                // setSelectedAmount(user.amount)

            }
            else {

                return null;
            }
        });

    };
    const handleOpen = () => {
        dispatch(actionCreators.openModal(true));
        console.log(open)
    };
    const handleClose = () => {
        dispatch(actionCreators.closeModal());
    };

    const handleButtonClick = () => {
        setAdditionalRows((prevRows) => prevRows + 1);
        setShowAmountField(true);
    };
    const handleDeleteRow = (rowIndex) => {

        setAdditionalRows((prevRows) => prevRows - 1);

        // Update rowData to remove the deleted row
        setRowData((prevData) => {
            const newData = [...prevData];
            if (newData.length > 0) {
                // Remove inputValie property from each object in the array
                newData.forEach(item => delete item.inputValue);
                // Log the modified array
                console.log(hello);
            }
            newData.splice(rowIndex, 1);
            return newData;
        });
    };

    const renderAdditionalRows = () => {
        const rows = [];

        for (let i = 0; i < additionalRows; i++) {
            rows.push(
                <Row key={i} span={12}>
                    <Col span={4}>
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
                        <Col span={6}>
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
                    <Col span={1}>
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





    const buttonStyles = {
        backgroundColor: 'rgb(21, 101, 192)',
        color: '#ffffff',
        borderColor: 'rgb(21, 101, 192)',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',

    };
    const buttonStyles1 = {
        backgroundColor: 'rgb(21, 101, 192)',
        color: '#ffffff',
        fontSize:'1em',
        borderColor: 'rgb(21, 101, 192)',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
        // Add this line for width
    };
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const onChange = (e) => {
        const value = e.target.value;

        setSelectedOption(value);
    };






    return (
        <>
            <Form
                labelCol={{
                    span: 24, // Set span to 24 to have labels on top
                }}
                wrapperCol={{
                    span: 24, // Set span to 24 to have full width
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                style={{
                    maxWidth: 1000,
                    margin: '0', // Center the form on larger screens
                }}
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label={t("TabFrom1_2.message")}>
                            <Input className="my-input" onChange={(e) => {
                                setSelectedAmount(e.target.value);
                            }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label={t("TabFrom1_3.message")}>
                            <Row gutter={8} justify="space-between" align="middle">
                                <Col xs={24} sm={16} md={16} lg={16} xl={16} style={{ marginTop: '0px' }}>
                                    <TreeSelect
                                        readOnly
                                        style={{ width: '100%' }}
                                        dropdownStyle={{ maxHeight: 500, overflow: 'auto' }}
                                        treeData={treeData}
                                        placeholder="Select a value"
                                        onChange={handleTreeSelectChange}
                                    />
                                </Col>
                                <Col className='HA_input_buton_MAIN' xs={24} sm={8} md={8} lg={8} xl={8} style={{ marginTop: '0px' }}>
                                    <Button onClick={handleOpen} style={buttonStyles1} block>
                                        {t("TabFrom1_4.message")}
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label={t("TabFrom1_5.message")}>
                            <Input className="my-input" readOnly value={selectedEmail} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item label={t("TabFrom1_6.message")}>
                            <Input className="my-input" readOnly value={selectedFacebok} />
                        </Form.Item>
                    </Col>
                </Row>
                {/* datepikerowadd */}
                {renderAdditionalRows()}
                <Form.Item>
                    <Button onClick={handleButtonClick} style={buttonStyles}>{t("TabFrom1_8.message")}</Button> {/*+ Add a Installment*/}
                </Form.Item>
                <Form.Item>
                    <Checkbox>{t("TabFrom1_9.message")}</Checkbox> {/*I accept the terms of use*/}
                </Form.Item>
                <Form.Item label={t("TabFrom1_10.message")}> {/*Receive or Pay:*/}
                    <Col span={3}>
                        <Radio.Group onChange={onChange} value={selectedOption}>
                            <Radio value="Receive">{t("TabFrom1_11.message")}</Radio> {/*Receive*/}
                            <Radio value="pay">{t("TabFrom1_12.message")}</Radio> {/*Pay*/}
                        </Radio.Group>
                    </Col>
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleAddDebtCase} style={buttonStyles}>{t("TabFrom1_13.message")}</Button> {/*+ Add Debt Case*/}
                </Form.Item>
            </Form>
        </>
    );
};

export default TabFrom1;
