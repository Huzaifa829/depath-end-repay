import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio,Tabs, theme } from 'antd';
import '../cssFile/Tab3.css'

const { TabPane } = Tabs;

const LoginForm1 = () => {
    const buttonStyles = {
      backgroundColor: 'black',
      color: '#ffffff',
      borderColor: 'black',
      transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    };
  
    const [componentSize, setComponentSize] = useState('default');
  
    const initialValues = {
      name: 'John Doe ',
      email: 'john@example.com',
      facebook: 'jhon ore ',
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
        initialValues={initialValues}
        style={{
          maxWidth: 1000,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name:" name="name">
              <Input className="my-input" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email:" name="email">
              <Input className="my-input" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Facebook" name="facebook">
              <Input className="my-input" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button style={{ marginRight: '8px' }}>Cancel</Button>
          <Button style={buttonStyles}>Save & change</Button>
        </Form.Item>
      </Form>
    );
  };
const LoginForm2 = () => {
    const buttonStyles = {
      backgroundColor: 'black',
      color: '#ffffff',
      borderColor: 'black',
      transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    };
  
    const [componentSize, setComponentSize] = useState('default');
  
    const initialValues = {
        password: 'password ',
    
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
        initialValues={initialValues}
        style={{
          maxWidth: 1000,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Password:" name="password">
              <Input type='password' className="my-input" />
            </Form.Item>
          </Col>
        </Row>
    
        <Form.Item>
          <Button style={{ marginRight: '8px' }}>Cancel</Button>
          <Button style={buttonStyles}>Save & change</Button>
        </Form.Item>
      </Form>
    );
  };
const LoginForm3 = () => {
    const buttonStyles = {
      backgroundColor: 'black',
      color: '#ffffff',
      borderColor: 'black',
      transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    };
  
    const [componentSize, setComponentSize] = useState('default');
  
    const initialValues = {
        Currency: 'USA ',
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
        initialValues={initialValues}
        style={{
          maxWidth: 1000,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Currency:" name="Currency">
              <Input className="my-input" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button style={{ marginRight: '8px' }}>Cancel</Button>
          <Button style={buttonStyles}>Save & change</Button>
        </Form.Item>
      </Form>
    );
  };


const items = [
  {
    label: 'Personal Information',
    key: '1',
    content: <LoginForm1 />,
  },
  {
    label: 'Security Settings',
    key: '2',
    content: <LoginForm2 />,
  },
  {
    label: 'Currency Preferences',
    key: '3',
    content: <LoginForm3 />,
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: colorBgContainer,
        // backgroundColor:"red",

        }}
      />
    </StickyBox>
  );

  return (
    <div className='HA_table_main_add'>
    <div className='HA_table_main_add_child'>
      <p className='HA_table_main_add_child_text'>Profile</p>
    </div>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      {items.map((item) => (
        <TabPane tab={item.label} key={item.key}>
          {item.content}
        </TabPane>
      ))}
    </Tabs>
    </div>
  );
};

export default App;
