import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
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
            message: 'Please input your name!',
          },
        ]}
      >
        <Input placeholder="Full Name" style={{ width: '30vmax' }} />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Username" style={{ width: '30vmax' }} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Password" style={{ width: '30vmax' }} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 3,
          span: 18,
        }}
      >
        <Link to="/home">
        <Button style={{width:"100%"}} type="primary" htmlType="submit">
          Sign up
        </Button>
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
        Login with Facebook
        </Button>
      </Form.Item>
      {/* <Link to="/home">Go to Home Page</Link> */}
    </Form>
  );
};

export default SignupPage;


