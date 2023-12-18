import React, { useState } from 'react';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio, Select } from 'antd';
import '../cssFile/Tab3.css'
const Tab7 = () => {
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
  return (
    <div className='HA_table_main_add'>
      <div className='HA_table_main_add_child'>
        <p className='HA_table_main_add_child_text'>Notification Settings</p>
      </div>
      <Form
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
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
            <Form.Item label="Notification Frequency:">
              <Select placeholder="Weekly">
                <Select.Option value="demo">Weekly</Select.Option>
                  <Select.Option value="demo">Daily</Select.Option>
                  <Select.Option value="demo">Monthly</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          <Col span={12}>
            <Form.Item label="Notification Channel:">
              <Select placeholder="Email">
                <Select.Option value="demo">Email</Select.Option>
                <Select.Option value="demo">Facebook</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>


        <Form.Item>
          <Button style={buttonStyles}>Save Settings</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Tab7;