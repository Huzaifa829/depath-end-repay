import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword, FacebookAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { Routes, Route, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [t, i18n] = useTranslation("global");

  const onFinish = async (values) => {
    try {
      setLoading(true); // Set loading to true when signup process starts
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: fullName
      });
      // Show success message
      await message.success(t("signup_success_message"));
      // Clear input fields
      setFullName('');
      setEmail('');
      setPassword('');
      navigate('/home');
    } catch (error) {
      // Show error message
      message.error(error.message);
    } finally {
      setLoading(false); // Set loading to false when signup process ends
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleFacebookSignup = async () => {
    setLoading(true); // Set loading state to true during signup process
    try {
      // Sign in with Facebook popup
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      const user = result.user;
      
      // Show success message
      message.success("Signup with Facebook successful");
  
      // Navigate to the home page after successful signup
      navigate('/home');
    } catch (error) {
      // Handle signup errors
      console.error('Facebook signup error:', error);
      // Show error message
      message.error(error.message);
    } finally {
      setLoading(false); // Set loading state to false after signup process completes
    }
  };
  return (
    <Spin spinning={loading}> 
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
        <Input placeholder="Full Name" style={{ width: '30vmax', height: '40px' }} onChange={(e) => setFullName(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: t("sign_pop6.message"),//Please input your email!
          },
        ]}
      >
        <Input placeholder={t("sign_pop.message")} style={{ width: '30vmax', height: '40px' }} onChange={(e) => setEmail(e.target.value)} />
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
        <Input.Password placeholder={t("sign_pop1.message")} style={{ width: '30vmax', height: '40px' }} onChange={(e) => setPassword(e.target.value)} />
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
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          {t("sign_pop3.message")}
        </Button>{/* Sign up*/}
      </Form.Item>
      {/* Facebook Login Button */}
      <Form.Item
        style={{ marginBottom: '50px' }}
        wrapperCol={{
          offset: 3,
          span: 18,
        }}
      >
        <Button style={{ width: "100%", backgroundColor: '#4c69ba' }} type="primary" onClick={handleFacebookSignup}>
          {t("sign_pop4.message")}
        </Button>{/*Login with Facebook*/}
      </Form.Item>
      {/* <Link to="/home">Go to Home Page</Link> */}
    </Form>
    </Spin>
  );
};

export default SignupPage;
