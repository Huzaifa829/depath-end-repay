
// TabFrom7

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio } from 'antd';
import '../../cssFile/TabFrom.css'

const TabFrom7 = () => {

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
                    <Form.Item label={t("TabFrom7_1.message")}> {/*Challenge Amount:*/}
                        <Input className="my-input"  />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("TabFrom7_2.message")}> {/*Select Adversary Name:*/}
                        <Row gutter={8}>
                            <Col span={16}>
                                <TreeSelect
                                    treeData={[
                                        {
                                            title: 'Light',
                                            value: 'light',
                                            children: [
                                                {
                                                    title: 'Bamboo',
                                                    value: 'bamboo',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Col>
                            <Col span={6}>
                                <Button style={buttonStyles}>{t("TabFrom7_3.message")}</Button> {/*Add New Adversary*/}
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label={t("TabFrom7_4.message")}> {/*Adversary Email:*/}
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("TabFrom7_5.message")}> {/*Adversary Facebook Id or Facebook Link:*/}
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
            <Col span={12}>
                <Form.Item label={t("TabFrom7_6.message")}> {/*DatePicker*/}
                    <DatePicker className="my-input" />
                </Form.Item>
            </Col>
            <Col span={12}>
                    {/* New Col for Description Input */}
                    <Form.Item label={t("TabFrom7_7.message")}> {/*Description*/}
                        <Input.TextArea rows={4} className="my-input" />
                    </Form.Item>
                </Col>
            </Row>
          
            <Form.Item>
                <Button style={buttonStyles}>{t("TabFrom7_8.message")}</Button> {/*+ Add a Installment*/}
            </Form.Item>
            <Form.Item>
                <Checkbox onChange={onChange}>{t("TabFrom7_9.message")}</Checkbox> {/*I accept the terms of use*/}
            </Form.Item>
                <Form.Item label={t("TabFrom7_10.message")}> {/*Receive or Pay:*/}
                        <Col span={3}>
                            <Radio.Group onChange={onChange} value={undefined}>
                                <Radio value="receive">{t("TabFrom7_11.message")}</Radio> {/*Receive*/}
                                <Radio value="pay">{t("TabFrom7_12.message")}</Radio> {/*Pay*/}
                            </Radio.Group>
                        </Col>
                </Form.Item>
                <Form.Item>
                <Button style={buttonStyles}>{t("TabFrom7_13.message")}</Button> {/*+ Add Debt Case*/}
            </Form.Item>
        </Form>
    );
};

export default TabFrom7;

