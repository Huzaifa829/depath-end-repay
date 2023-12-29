
// TabFrom1

import React, { useState } from 'react';
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


    const handleAddDebtCase = () => {

        console.log('Row Data:', rowData);

        const allData = {
            name: selectedValue,
            amount: selectedAmount,
            email: selectedEmail,
            fblink: selectedFacebok,
            check: selectedOption,
            type: 'money',
            PaymentOptions: "Full",
            rowData: rowData
        }
        dispatch(actionCreators.addAdversaries(allData));
        dispatch(actionCreators.SentAdversaries(allData));
        dispatch(actionCreators.RecivedAdversaries(allData));
        console.log("adverseris_data", addAdversaries)

        Swal.fire({
            title: 'Success!',
            text: 'The data has been added successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
        });






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
        backgroundColor: 'black',
        color: '#ffffff',
        borderColor: 'black',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
        
    };
    const buttonStyles1= {
        backgroundColor: 'black',
        color: '#ffffff',
      
        borderColor: 'black',
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
                }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={t("TabFrom1_2.message")}> {/*Amount*/}
                            <Input className="my-input" onChange={(e) => {
                                const text = e.target.value;
                                setSelectedAmount(text);
                            }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={t("TabFrom1_3.message")}> {/*Select Adversary Name:*/}
                            <Row gutter={8}>
                                <Col span={16}>

                                    <TreeSelect
                                        readOnly
                                        style={{ width: '100%' }}
                                        dropdownStyle={{ maxHeight: 500, overflow: 'auto' }}
                                        treeData={treeData}
                                        placeholder="Select a value"
                                        onChange={handleTreeSelectChange}

                                    />
                                </Col>
                                <Col span={6}>
                                    <Button onClick={handleOpen} style={buttonStyles1}>{t("TabFrom1_4.message")}</Button> {/*Add New Adversary*/}
                                </Col>
                            </Row>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={t("TabFrom1_5.message")}> {/*Adversary Email:*/}
                            <Input className="my-input" readOnly value={selectedEmail} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={t("TabFrom1_6.message")}> {/*Adversary Facebook Id or Facebook Link:*/}
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
