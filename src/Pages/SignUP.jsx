import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import FacebookLogin from 'react-facebook-login';
import { FacebookOutlined } from '@ant-design/icons';
import '../cssFile/LoginPage.css'
import { Link } from 'react-router-dom';

const SignupPage = () => {

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
        name="name"
        rules={[
          {
            required: true,
            message: t("sign_pop5.message"),//Please input your name!
          },
        ]}
      >
        <Input placeholder="Full Name" style={{ width: '30vmax',height:'40px' }} />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: t("sign_pop6.message"),//Please input your username!
          },
        ]}
      >
        <Input placeholder={t("sign_pop.message")} style={{ width: '30vmax',height:'40px' }} />{/*Username*/}
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: t("sign_pop7.message"),//Please input your password!
          },
        ]}
      >
        <Input.Password placeholder={t("sign_pop1.message")} style={{ width: '30vmax',height:'40px' }} />{/*Password*/}
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Checkbox>{t("sign_pop2.message")}</Checkbox>{/*Remember me*/}
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 3,
          span: 18,
        }}
      >
        <Link to="/home">
        <Button style={{width:"100%"}} type="primary" htmlType="submit">
        {t("sign_pop3.message")}
        </Button>{/* Sign up*/}
        </Link>
      </Form.Item>

      {/* Facebook Login Button */}
      <Form.Item
        style={{marginBottom:'50px'}}
        wrapperCol={{
          offset: 3,
          span: 18,
        }}
      >
        <Button style={{width:"100%",backgroundColor:'#4c69ba'}} type="primary" htmlType="submit">
        {t("sign_pop4.message")}
        </Button>{/*Login with Facebook*/}
      </Form.Item>
      {/* <Link to="/home">Go to Home Page</Link> */}
    </Form>
  );
};

export default SignupPage;


