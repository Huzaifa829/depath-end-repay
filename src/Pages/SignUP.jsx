import React, { useLayoutEffect, useRef, useState } from 'react';
import { Button, Checkbox, Form, Input, message, Spin, Modal, Row, Col, Carousel, Radio, AutoComplete, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword, FacebookAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { Routes, Route, useNavigate } from 'react-router-dom';
import FacebookOutlined from '@ant-design/icons/FacebookOutlined';
import { Title } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index'
import Swal from 'sweetalert2';
import '../cssFile/LoginPage.css';

const { Option } = Select;

const SignupPage = () => {
  const dispatch = useDispatch();
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
      const querySnapshot = await getDocs(collection(db, "users"));
      const userExists = querySnapshot.docs.some(doc => doc.id === userCredential.user.uid);

      if (!userExists) {
        dispatch(actionCreators.ExtraDetailModalOpen(true));
        message.success(t("signup_success_message"));
      } else {
        navigate('/home');
      }

    } catch (error) {
      // Check error code
      switch (error.code) {
        case 'auth/email-already-in-use':
          message.error('Email is already in use. Please choose another email.');
          break;
        case 'auth/weak-password':
          message.error('Password is too weak. Please choose a stronger password.');
          break;
        default:
          message.error(error.message);
      }
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

      // Proceed with signup only if the user confirms
      
        // Sign in with Facebook popup
        const result = await signInWithPopup(auth, new FacebookAuthProvider());
        const user = result.user;
        const { displayName, email, photoURL } = user;

        // Save user data to your database or state as needed
        // Example: Save to Firebase Firestore

        const querySnapshot = await getDocs(collection(db, "users"));
        const userExists = querySnapshot.docs.some(doc => doc.id === user.uid);
  
        if (!userExists) {
          const shouldProceed = await showConfirmationModal();
          if (shouldProceed) {
          dispatch(actionCreators.ExtraDetailModalOpen(true));
          message.success(t("signup_success_message"));
        }
        } else {
          // Show success message if user already exists
          navigate('/home');
        message.success("Signup with Facebook successful");

        }

        // Show success message
        // Navigate to the home page after successful signup
       
      
    } catch (error) {
      // Handle signup errors
      console.error('Facebook signup error:', error);
      // Show error message
      message.error(error.message);
    } finally {
      setLoading(false); // Set loading state to false after signup process completes
    }
  };

  const showConfirmationModal = () => {
    return new Promise((resolve, reject) => {
      const modal = Modal.confirm({
        icon: null,
        content: (
          <>
            <Row align="middle">
              <Col>
                <FacebookOutlined style={{ fontSize: '24px', color: '#3b5998' }} />
              </Col>
              <Col style={{ marginLeft: '10px' }}>
                <p>Sign in with Facebook</p>
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <h2 style={{ textAlign: 'center' }}>Sign in to Facebook</h2>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p style={{ textAlign: 'left' }}>
                  By continuing, Facebook will share your name, email address, language preference and profile picture with Repaye. See Repaye privacy policy and Terms of Service.
                </p>
              </Col>
            </Row>
          </>
        ),
        onOk() {
          resolve(true); // Resolve with true if user confirms
        },
        onCancel() {
          resolve(false); // Resolve with false if user clicks "Cancel"
          modal.destroy(); // Destroy the modal instance
        },
        footer: (
          <Row justify="center">
            <Col>
              <Button onClick={() => { resolve(false); modal.destroy(); }}>Cancel</Button>
            </Col>
            <Col style={{ marginLeft: '10px' }}>
              <Button onClick={() => { resolve(true); modal.destroy(); }}>Continue</Button>
            </Col>
          </Row>
        ),
      });
    });
  };



  return (
    <div style={{ display: 'flex' }}>
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
            <Input placeholder="Email" style={{ width: '30vmax', height: '40px' }} onChange={(e) => setEmail(e.target.value)} />
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




    </div>
  );
};

export default SignupPage;
