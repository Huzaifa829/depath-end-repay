// login popup page

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Form, Input } from 'antd';
import FacebookLogin from 'react-facebook-login';
import { FacebookOutlined } from '@ant-design/icons';
import '../cssFile/LoginPage.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {

   const asdasdasd= {
    borderRadius:'20px',
   }
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const responseFacebook = (response) => {
    console.log(response);
    // Handle Facebook login response here, e.g., send data to server or update state
  };

  const [t, i18n] = useTranslation("global")
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: t("loginpop6.message"), //Please input your username!
          },
        ]}
      >
        <Input className='my-input' placeholder={t("loginpop1.message")} style={{ width: '30vmax' }} /> {/*Username*/}
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: t("loginpop7.message"), //Please input your password!
          },
        ]}
      >
        <Input.Password className='my-input'   placeholder={t("loginpop2.message")} style={{ width: '30vmax' }} /> {/*Password*/}
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Checkbox>{t("loginpop3.message")}</Checkbox> {/*Remember me*/}
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 3,
          span: 18,
        }}
      >
         <Link to="/home">
        <Button style={{width:"100%"}} type="primary" htmlType="submit">
        {t("loginpop4.message")} {/*Login*/}
        </Button>
        </Link>
      </Form.Item>
      <Form.Item
      style={{marginBottom:'50px'}}
        wrapperCol={{
          offset: 3,
          span: 18,
        }}
      >
        <Button style={{width:"100%",backgroundColor:'#4c69ba'}} type="primary" htmlType="submit">
        {t("loginpop5.message")} {/*Login with Facebook*/}
        </Button>
      </Form.Item>

      {/* Facebook Login Button */}
    
      {/* <Link to="/home">Go to Home Page</Link> */}
    </Form>
  );
};

export default LoginPage;