// login popup page

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import FacebookLogin from 'react-facebook-login';
import { FacebookOutlined } from '@ant-design/icons';
import '../cssFile/LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, updateProfile, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index'

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const asdasdasd = {
    borderRadius: '20px',
  }
  const onFinish = async (values) => {
    try {
      setLoading(true); // Set loading to true when sign-in process starts
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential
      console.log(user.uid);

      // Optionally, you can perform additional actions after successful sign-in
      // For example, navigating to another page, setting user data in state, etc.
      const querySnapshot = await getDocs(collection(db, "users"));
      const userExists = querySnapshot.docs.some(doc => doc.id === userCredential.user.uid);

      if (!userExists) {
        dispatch(actionCreators.ExtraDetailModalOpen(true));
        console.log('working')
      } else {
        navigate('/home');
      }
    } catch (error) {
      // Show error message
      console.error(error.message);
    
      if (error.code === 'auth/user-not-found') {
        // Handle case when user email is not found
        message.error('User with this email does not exist.');
      } else if (error.code === 'auth/wrong-password') {
        // Handle case when password is incorrect
        message.error('Incorrect password');
      } else if(error.code ==='auth/invalid-credential'){
        // Handle other errors
        message.error('Sign up first');

      }
    }
     finally {
      setLoading(false); // Set loading to false when sign-in process ends
    }
  };
  const handleFacebookLogin = async () => {
    setLoading(true); // Set loading state to true during login process
    try {
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      const user = result.user;

      // Optionally, you can refresh the token if needed
      // const tokenResult = await user.getIdTokenResult(true);

      // Show success message
      const querySnapshot = await getDocs(collection(db, "users"));
      const userExists = querySnapshot.docs.some(doc => doc.id === user.uid);

      if (!userExists) {
        dispatch(actionCreators.ExtraDetailModalOpen(true));
        console.log('working')
      } else {
        navigate('/home');
      }
    } catch (error) {
      // Handle Facebook login errors
      console.error('Facebook login error:', error);
      // Show error message
      message.error(error.message);
    } finally {
      setLoading(false); // Set loading state to false after login process completes
    }
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
          <Checkbox>{t("loginpop3.message")}</Checkbox> {/*Remember me*/}
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 18,
          }}
        >
          {/* <Link to="/home"> */}
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            {t("loginpop4.message")} {/*Login*/}
          </Button>
          {/* </Link> */}
        </Form.Item>
        <Form.Item
          style={{ marginBottom: '50px' }}
          wrapperCol={{
            offset: 3,
            span: 18,
          }}
        >
          <Button style={{ width: "100%", backgroundColor: '#4c69ba' }} type="primary" onClick={handleFacebookLogin}>
            {t("loginpop5.message")} {/*Login with Facebook*/}
          </Button>
        </Form.Item>

        {/* Facebook Login Button */}

        {/* <Link to="/home">Go to Home Page</Link> */}
      </Form>
    </Spin>
  );
};

export default LoginPage;