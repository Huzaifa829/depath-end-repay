
// TabFrom2

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio } from 'antd';
import '../../cssFile/TabFrom.css'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index'


const TabFrom2 = () => {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.amount);
    const users = useSelector((state) => state.UserData);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedEmail, setSelectedEmail] = useState('');
    const [selectedFacebok, setSelectedFacebok] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');

    const treeData = users.map((row, index) => {
        // Add a condition to check if the type is "Money"
        if (row.type === "Favor") {
          return {
            title: row.name,
            value: row.email,
          };
        }
        // If the type is not "Money", return null or an empty object
        return null;
      }).filter(item => item !== null);

    const handleTreeSelectChange = (value) => {
        setSelectedValue(value);
        console.log('Selected Value:', value);
        console.log('USERS:', users);

        users.map((user) => {
            if (value == user.email) {

                console.log('confirm', user)
                setSelectedEmail(user.email)
                setSelectedFacebok(user.facebookLink)
                setSelectedAmount(user.amount)

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
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const [t, i18n] = useTranslation("global")
    return (
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
                    <Form.Item label= {t("TabFrom2_1.message")}> {/*Favor Amount:*/}
                        <Input className="my-input"  readOnly  value={selectedAmount}  />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("TabFrom2_2.message")}> {/*Select Adversary Name:*/}
                        <Row gutter={8}>
                            <Col span={16}>
                            <TreeSelect
                                        readOnly
                                        style={{ width: '100%' }}
                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                        treeData={treeData}
                                        placeholder="Select a value"
                                        onChange={handleTreeSelectChange}
                                    />
                            </Col>
                            <Col span={6}>
                            <Button onClick={handleOpen} style={buttonStyles}>{t("TabFrom1_4.message")}</Button> {/*Add New Adversary*/}
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label={t("TabFrom2_4.message")}> {/*Adversary Email:*/}
                        <Input className="my-input" readOnly value={selectedEmail} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("TabFrom2_5.message")}> {/*Adversary Facebook Id or Facebook Link:*/}
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
            <Col span={12}>
                <Form.Item label={t("TabFrom2_6.message")}> {/*DatePicker*/}
                    <DatePicker className="my-input" />
                </Form.Item>
            </Col>
            <Col span={12}>
                    {/* New Col for Description Input */}
                    <Form.Item label={t("TabFrom2_7.message")}> {/*Description*/}
                        <Input.TextArea rows={4} className="my-input" />
                    </Form.Item>
                </Col>
            </Row>
          
            <Form.Item>
                <Button style={buttonStyles}>{t("TabFrom2_8.message")}</Button> {/*+ Add a Installment*/}
            </Form.Item>
            <Form.Item>
                <Checkbox onChange={onChange}>{t("TabFrom2_9.message")}</Checkbox> {/*I accept the terms of use*/}
            </Form.Item>
                <Form.Item label={t("TabFrom2_10.message")}> {/*Receive or Pay:*/}
                        <Col span={3}>
                            <Radio.Group onChange={onChange} value={undefined}>
                                <Radio value="receive">{t("TabFrom2_11.message")}</Radio> {/*Receive*/}
                                <Radio value="pay">{t("TabFrom2_12.message")}</Radio> {/*Pay*/}
                            </Radio.Group>
                        </Col>
                </Form.Item>
                <Form.Item>
                <Button style={buttonStyles}>{t("TabFrom2_13.message")}</Button> {/*+ Add Debt Case*/}
            </Form.Item>
        </Form>
    );
};

export default TabFrom2;

