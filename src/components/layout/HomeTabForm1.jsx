//HomeTabFrom1

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio } from 'antd';
import '../../cssFile/TabFrom.css'

const HomeTabFrom1 = ({ openLoginForm }) => {

    const buttonStyles = {
        backgroundColor: 'rgb(21, 101, 192)',
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
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item label={t("HomeTabFrom2.message")}>  {/*Amount*/}
                        <Input className="my-input"  />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item label={t("HomeTabFrom3.message")}> {/*Enter Adversary Name:*/}
                            <Input className="my-input" />
                        
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item label={t("HomeTabFrom4.message")}> {/*Adversary Email:*/}
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item label={t("HomeTabFrom5.message")}> {/*Adversary Facebook Id or Facebook Link:*/}
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
            </Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item label={t("HomeTabFrom6.message")}> {/*DatePicker*/}
                    <DatePicker className="my-input" />
                </Form.Item>
            </Col>
            <Form.Item>
                <Button style={buttonStyles}>{t("HomeTabFrom7.message")}</Button> {/*+ Add a Installment*/}
            </Form.Item>
            <Form.Item>
                <Checkbox onChange={onChange}>{t("HomeTabFrom8.message")}</Checkbox> {/*I accept the terms of use*/}
            </Form.Item>
                <Form.Item label={t("HomeTabFrom9.message")}>  {/*Receive or Pay:*/}
                        <Col span={3}>
                            <Radio.Group onChange={onChange} value={undefined}>
                                <Radio value="receive">{t("HomeTabFrom10.message")}</Radio> {/*Receive*/}
                                <Radio value="pay">{t("HomeTabFrom11.message")}</Radio> {/*Pay*/}
                            </Radio.Group>
                        </Col>
                </Form.Item>
                <Form.Item>
                <Button style={buttonStyles} onClick={openLoginForm}>
                {t("HomeTabFrom12.message")} {/*+ Add Debt Case */}
        </Button>
            </Form.Item>
        </Form>
    );
};

export default HomeTabFrom1;