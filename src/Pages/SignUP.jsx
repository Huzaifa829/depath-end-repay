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
  const open = useSelector((state) => state.ExtraDetailModalcheck);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [intentionValue, setValue1] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [seekingInputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [monthlyIncomeError, setMonthlyIncomeError] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [otherIncome, setOtherIncome] = useState('');



  const [RiskAppetite, setRiskAppetite] = useState('');
  const [FbUrl, setFbUrl] = useState('');
  const [DetailPhone, setDetailPhone] = useState('');
  const [DetailEmail, setDetailEmail] = useState('');

  const CarousalSlider = useRef(null);

  const [t, i18n] = useTranslation("global");


  const [outerModalVisible, setOuterModalVisible] = useState(false);
  const [innerModalVisible, setInnerModalVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleOuterModalShow = () => {
    setOuterModalVisible(true);
  };

  const handleOuterModalHide = () => {
    setOuterModalVisible(false);
  };

  const handleInnerModalShow = () => {
    setInnerModalVisible(true);
  };

  const handleInnerModalHide = () => {
    setInnerModalVisible(false);
  };

  const handleCarouselChange = (index) => {
    setCarouselIndex(index);
  };

  const handleNextSlide = () => {
    setCarouselIndex(carouselIndex + 1);
  };


  const CaurosalFinsh = async () => {
    setLoading1(true);
    const user = auth.currentUser;

    try {
      // Gather all the data you want to save
      const userData = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        password,
        monthlyIncome,
        otherIncome,
        RiskAppetite,
        FbUrl,
        DetailPhone,
        DetailEmail,
        intentionValue,
        seekingInputValue,
        // Add more data as needed
      };

      // Update the Firestore document with the user's UID
      await setDoc(doc(db, "users", auth.currentUser.uid), userData);

      Swal.fire({
        title: 'Congratulations!',
        text: 'You have successfully signed up.',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000 // Automatically close after 2 seconds
      });
      // Optionally, you can clear the form fields or reset the state here
      // ...

      setTimeout(() => {
        setInnerModalVisible(false);
        navigate('/home');
      }, 2000); // Delay navigation by 1 second
      setTimeout(() => {
        dispatch(actionCreators.openModal(true));
      }, 3000);
    } catch (error) {
      console.error("Error updating Firestore document:", error);
      // Handle error if needed
    }
  };
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

  // const handleContinue = (slideNumber) => {
  //   CarousalSlider.current.goTo(slideNumber, false); // Move to the specified slide
  // };
  // useLayoutEffect(() => {
  //   if (CarousalSlider.current) {
  //     CarousalSlider.current.goTo(1, false); // Start from slide 1 initially
  //   }
  // }, []);
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

  const handleChange = (e) => {
    setValue1(e.target.value);
    if (e.target.value === 'seeking') {
      setShowInput(true);
      setSuggestions(['Home Renovation', 'Education Expenses', 'Medical Emergencies', 'Business Startup']); // Add your suggestions here
    } else {
      setShowInput(false);
      setError('');
    }
  };

  const handleSearch = (value) => {
    setInputValue(value);
    setError('');
  };
  const handleNextButtonClick = () => {
    if (!intentionValue) {
      setError('Please select your intention.');
      return;
    }

    if (showInput && !seekingInputValue.trim()) {
      setError('Please enter the reason for seeking a loan.');
      return;
    }

    // Proceed to the next slide
    CarousalSlider.current.next();
  };
  const monthlyIncomeNextbtn = () => {
    if (!monthlyIncome.trim()) {
      setMonthlyIncomeError('Please provide your monthly income.');
      return;
    }
    CarousalSlider.current.next();
  }
  const MonthlyIncomeChecking = (e) => {
    setMonthlyIncome(e.target.value)
    setMonthlyIncomeError('');
  }
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidFacebookUrl = (url) => {
    // Regular expression for validating Facebook URL
    const facebookUrlRegex = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    return facebookUrlRegex.test(url);
  };
  const isValidDetailPhone = (url) => {
    // Regular expression for validating Facebook URL
    const PhoneUrlRegex = /^(\+\d{1,3})?\d{9,15}$/;
    return PhoneUrlRegex.test(url);
  };
  const extraAlldetailAdd = () => {
    console.log('working')

    if (!RiskAppetite.trim()) {
      message.error('Please select your risk appetite.');
      return;
    }
    if (!FbUrl.trim()) {
      message.error('Please enter your Facebook URL.');
      return;
    } else if (!isValidFacebookUrl(FbUrl)) {
      message.error('Please enter a valid Facebook URL.');
      return;
    }
    if (!DetailPhone.trim()) {
      message.error('Please enter your phone number.');
      return;
    } else if (!isValidDetailPhone(DetailPhone)) {
      message.error('Please enter a valid phone number.');
      return;
    }
    if (!DetailEmail.trim()) {
      message.error('Please enter your Email.');
      return;
    } else if (!isValidEmail(DetailEmail)) {
      message.error('Please enter a valid Email.');
      return;
    }
    CaurosalFinsh()

  }
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


      {/* <Modal
        title="Additional Information for Personalized Financial Assistance"
        visible={open}
        onCancel={handleInnerModalHide}
        footer={null}
        maskClosable={false}
        closeIcon={null}
      >

        <Spin size='large' spinning={loading1}>
          <Carousel
            dots={false} draggable={false} swipe={false}
            ref={CarousalSlider}
            initialSlide={0}

          >
            <div>
              <h3>Slide 1: Financial Goals</h3>
              <p>Please specify your financial goals:</p>
              <Form>
                <Form.Item>
                  <p>What is your intention?</p>
                  <Radio.Group onChange={handleChange} value={intentionValue}>
                    <Radio value="seeking">I am seeking a loan</Radio>
                    <Radio value="offering">I am offering a loan</Radio>
                  </Radio.Group>
                </Form.Item>
                {showInput && (
                  <Form.Item>
                    <p>For why you are seeking loan</p>
                    <AutoComplete
                      value={seekingInputValue}
                      onChange={handleSearch}
                      placeholder="Enter the reason or select from suggestions below"
                    >
                      {suggestions.map((suggestion) => (
                        <AutoComplete.Option key={suggestion} value={suggestion}>
                          {suggestion}
                        </AutoComplete.Option>
                      ))}
                    </AutoComplete>
                  </Form.Item>
                )}
                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}


              </Form>

              <div className="HA_MAINbutton-container">
              <Button className="next-button" onClick={handleNextButtonClick}>
                Next
              </Button>
              </div>
            </div>
            <div>
              <h3>Slide 2: Income Details</h3>
              <p>Please provide details about your income:</p>
              <Form>
                <Form.Item
                  name="monthlyIncome"
                >
                  <p>Monthly Income</p>
                  <Input
                    placeholder="Monthly income"
                    value={monthlyIncome}
                    onChange={MonthlyIncomeChecking}
                    type="number"
                  />
                </Form.Item>
                {monthlyIncomeError && <div style={{ color: 'red', marginBottom: '10px' }}>{monthlyIncomeError}</div>}
                <Form.Item
                  name="otherIncome"

                >
                  <p>Other Income (Optional)</p>
                  <Input
                    placeholder="Other income"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(e.target.value)}
                    type="number"
                  />
                </Form.Item>
              </Form>
              <div className="HA_MAINbutton-container">
              <Button className="prev-button" onClick={() => CarousalSlider.current.prev()}>
                back
              </Button>
              <Button className="next-button" onClick={monthlyIncomeNextbtn}>
                Next
              </Button>
              </div>
            </div>
            <div>
              <h3>Slide 3: Additional Details</h3>
              <p>Please provide additional details:</p>
              <Form>
                <Form.Item
                  name="riskAppetite"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your risk appetite.',
                    },
                  ]}
                >
                  <p>Risk Appetite</p>
                  <Select
                    placeholder="Select your risk appetite"
                    value={RiskAppetite} // Use 'riskAppetite' instead of 'RiskAppetite'
                    onChange={(value) => setRiskAppetite(value)} // Use 'value' instead of 'e.target.value'
                  >
                    <Option value="low">Low</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="high">High</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="facebookUrl"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your Facebook URL.',
                    },
                  ]}

                >
                  <p>Facebook URL</p>
                  <Input
                    placeholder="Enter your Facebook URL"
                    value={FbUrl}
                    onChange={(e) => setFbUrl(e.target.value)}

                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your phone number.',
                    },
                  ]}
                >
                  <p>Phone</p>
                  <Input
                    placeholder="Enter your phone number"
                    onChange={(e) => setDetailPhone(e.target.value)}
                    value={DetailPhone}
                    type="tel"
                  />
                </Form.Item>
                <Form.Item
                  name="secondaryEmail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not a valid email address.',
                    },
                  ]}
                >
                  <p>Secondary Email</p>
                  <Input
                    placeholder="Enter your secondary email"
                    onChange={(e) => setDetailEmail(e.target.value)}
                    value={DetailEmail}
                    type="email"
                  />
                </Form.Item>
              </Form>
              <div className="HA_MAINbutton_container">
              <Button className="prev-button" onClick={() => CarousalSlider.current.prev()}>
                Back
              </Button>
              <Button className="next-button" onClick={extraAlldetailAdd}>
                Compeleted
              </Button>
              </div>
            </div>
          </Carousel>
        </Spin>
      </Modal> */}

    </div>
  );
};

export default SignupPage;
