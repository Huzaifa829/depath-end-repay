import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio,Tabs, theme } from 'antd';
import '../cssFile/Tab3.css'
import { useTranslation } from 'react-i18next';

const { TabPane } = Tabs;

const LoginForm1 = () => {
  const [t, i18n] = useTranslation("global")
    const buttonStyles = {
      backgroundColor: 'rgb(21, 101, 192)',
      color: '#ffffff',
      borderColor: 'rgb(21, 101, 192)',
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
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item label={t("Tab8_1.message")} name="name">{/*Name:*/}
              <Input className="my-input" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item label={t("Tab8_2.message")} name="email">{/*Email:*/}
              <Input className="my-input" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item label={t("Tab8_3.message")} name="facebook">{/*Facebook*/}
              <Input className="my-input" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button style={{ marginRight: '8px' }}>{t("Tab8_4.message")}</Button>{/*Cancel*/}
          <Button style={buttonStyles}>{t("Tab8_5.message")}</Button>{/*Save & change*/}
        </Form.Item>
      </Form>
    );
  };
const LoginForm2 = () => {
  const [t, i18n] = useTranslation("global")

    const buttonStyles = {
      backgroundColor: 'rgb(21, 101, 192)',
      color: '#ffffff',
      borderColor: 'rgb(21, 101, 192)',
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
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item label={t("Tab8_6.message")} name="password">{/*Password:*/}
              <Input type='password' className="my-input" />
            </Form.Item>
          </Col>
        </Row>
    
        <Form.Item>
          <Button style={{ marginRight: '8px' }}>{t("Tab8_7.message")}</Button>{/*Cancel*/}
          <Button style={buttonStyles}>{t("Tab8_8.message")}</Button>{/*Save & change*/}
        </Form.Item>
      </Form>
    );
  };
const LoginForm3 = () => {
  const [t, i18n] = useTranslation("global")

    const buttonStyles = {
      backgroundColor: 'rgb(21, 101, 192)',
      color: '#ffffff',
      borderColor: 'rgb(21, 101, 192)',
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
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item label={t("Tab8_9.message")} name="Currency">{/*Currency:*/}
              <Input className="my-input" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button style={{ marginRight: '8px' }}>{t("Tab8_10.message")}</Button>{/*Cancel*/}
          <Button style={buttonStyles}>{t("Tab8_11.message")}</Button>{/*Save & change*/}
        </Form.Item>
      </Form>
    );
  };


const items = [
  {
    label: 'Personal Information',/*Personal Information*/
    key: '1',
    content: <LoginForm1 />,
  },
  {
    label: 'Security Settings',/*Security Settings*/
    key: '2',
    content: <LoginForm2 />,
  },
  {
    label: 'Currency Preferences',/*Currency Preferences*/
    key: '3',
    content: <LoginForm3 />,
  },
];

const App = () => {
  
  const [t, i18n] = useTranslation("global")
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
      <p className='HA_table_main_add_child_text'>{t("Tab8_12.message")}</p>{/*Profile*/}
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
