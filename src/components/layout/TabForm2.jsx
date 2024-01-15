
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




    const treeData = users.map((row, index) => ({
        title: row.name,
        value: row.email,
    }));



    // const [selectedAmount, setSelectedAmount] = useState('');
    // const treeData = users.map((row, index) => {
    //     if (row.type === "Favor") {
    //       return {
    //         title: row.name,
    //         value: row.email,
    //       };
    //     }
    //     return null;
    //   }).filter(item => item !== null);

    const handleTreeSelectChange = (value) => {
        setSelectedValue(value);
        console.log('Selected Value:', value);
        console.log('USERS:', users);

        users.map((user) => {
            if (value == user.email) {

                console.log('confirm', user)
                setSelectedEmail(user.email)
                setSelectedFacebok(user.facebookLink)
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

    const buttonStyles = {
        backgroundColor: 'rgb(21, 101, 192)',
        color: '#ffffff',
        borderColor: 'rgb(21, 101, 192)',
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
                margin: '0', // Center the form on larger screens
            }}
        >
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label={t("TabFrom2_1.message")}>
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label={t("TabFrom2_2.message")}>
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
                                    <Button onClick={handleOpen} style={buttonStyles} block>
                                        {t("TabFrom1_4.message")}
                                    </Button>
                                </Col>
                            </Row>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label={t("TabFrom2_4.message")}>
                        <Input className="my-input" readOnly value={selectedEmail} />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label={t("TabFrom2_5.message")}>
                        <Input className="my-input" readOnly value={selectedFacebok} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label={t("TabFrom2_6.message")}>
                        <DatePicker className="my-input" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label={t("TabFrom2_7.message")}>
                        <Input.TextArea rows={4} className="my-input" />
                    </Form.Item>
                </Col>
            <Form.Item>
                <Button style={buttonStyles} block>
                    {t("TabFrom2_8.message")}
                </Button>
            </Form.Item>
            </Row>
            <Form.Item>
                <Checkbox onChange={onChange}>{t("TabFrom2_9.message")}</Checkbox>
            </Form.Item>
            <Form.Item label={t("TabFrom2_10.message")}>
                <Col span={24}>
                    <Radio.Group onChange={onChange} value={undefined}>
                        <Radio value="receive">{t("TabFrom2_11.message")}</Radio>
                        <Radio value="pay">{t("TabFrom2_12.message")}</Radio>
                    </Radio.Group>
                </Col>
            </Form.Item>
            <Form.Item>
                <Button style={buttonStyles} >
                    {t("TabFrom2_13.message")}
                </Button>
            </Form.Item>
        </Form>

    );
};

export default TabFrom2;

