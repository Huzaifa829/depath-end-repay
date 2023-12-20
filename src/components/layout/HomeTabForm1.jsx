import React, { useState } from 'react';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio } from 'antd';
import '../../cssFile/TabFrom.css'

const HomeTabFrom1 = ({ openLoginForm }) => {

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
                    <Form.Item label="Amount">
                        <Input className="my-input"  />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Enter Adversary Name:">
                            <Input className="my-input" />
                        
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Adversary Email:">
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Adversary Facebook Id or Facebook Link:">
                        <Input className="my-input" />
                    </Form.Item>
                </Col>
            </Row>
            <Col span={12}>
                <Form.Item label="DatePicker">
                    <DatePicker className="my-input" />
                </Form.Item>
            </Col>
            <Form.Item>
                <Button style={buttonStyles}>+ Add a Installment</Button>
            </Form.Item>
            <Form.Item>
                <Checkbox onChange={onChange}>I accept the terms of use</Checkbox>
            </Form.Item>
                <Form.Item label="Receive or Pay:">
                        <Col span={3}>
                            <Radio.Group onChange={onChange} value={undefined}>
                                <Radio value="receive">Receive</Radio>
                                <Radio value="pay">Pay</Radio>
                            </Radio.Group>
                        </Col>
                </Form.Item>
                <Form.Item>
                <Button style={buttonStyles} onClick={openLoginForm}>
          + Add Debt Case
        </Button>
            </Form.Item>
        </Form>
    );
};

export default HomeTabFrom1;
