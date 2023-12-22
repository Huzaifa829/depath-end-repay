
// TabFrom1

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio } from 'antd';
import '../../cssFile/TabFrom.css'

const TabFrom1 = () => {

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
                    <Form.Item label={t("TabFrom1_2.message")}> {/*Amount*/}
                        <Input className="my-input"  />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("TabFrom1_3.message")}> {/*Select Adversary Name:*/}
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
                                <Button style={buttonStyles}>{t("TabFrom1_4.message")}</Button> {/*Add New Adversary*/}
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label={t("TabFrom1_5.message")}> {/*Adversary Email:*/}
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("TabFrom1_6.message")}> {/*Adversary Facebook Id or Facebook Link:*/}
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
            </Row>
            <Col span={12}>
                <Form.Item label={t("TabFrom1_7.message")}> {/*DatePicker*/}
                    <DatePicker className="my-input" />
                </Form.Item>
            </Col>
            <Form.Item>
                <Button style={buttonStyles}>{t("TabFrom1_8.message")}</Button> {/*+ Add a Installment*/}
            </Form.Item>
            <Form.Item>
                <Checkbox onChange={onChange}>{t("TabFrom1_9.message")}</Checkbox> {/*I accept the terms of use*/}
            </Form.Item>
                <Form.Item label={t("TabFrom1_10.message")}> {/*Receive or Pay:*/}
                        <Col span={3}>
                            <Radio.Group onChange={onChange} value={undefined}>
                                <Radio value={t("TabFrom1_11.message")}>Receive</Radio> {/*Receive*/}
                                <Radio value="pay">{t("TabFrom1_12.message")}</Radio> {/*Pay*/}
                            </Radio.Group>
                        </Col>
                </Form.Item>
                <Form.Item>
                <Button style={buttonStyles}>{t("TabFrom1_13.message")}</Button> {/*+ Add Debt Case*/}
            </Form.Item>
        </Form>
    );
};

export default TabFrom1;
