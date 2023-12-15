import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../cssFile/landingPage.css';
import img1 from '../assets/images/new image 1 (2).png';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginIcon from '@mui/icons-material/Login';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Popupform from './loginPage';
import Footer from '../components/Footer_HA';

const LoginPage = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  const buttonStyles = {
    backgroundColor: '#FF10F0',
    padding: '15px 30px',
    fontSize: '1rem',
    margin: '10px 10px 0px 0px',
    '@media screen and (max-width: 780px)': {
      padding: '10px 15px',
    fontSize: '1rem',
    },
  };

  const buttonStyles1 = {
    padding: '15px 30px',
    fontSize: '1rem',
    margin: '10px 10px 0px 0px',
    '@media screen and (max-width: 780px)': {
      padding: '10px 15px',
      fontSize: '1rem',
    },
  };

  return (
    <>
      <Navbar />
      <div className='hA_main_banner'>
        <div className='HA_main_bn_1'>
          <div className='HA_main_bn_1_text_div'>
            <p className='HA_main_bn_1_text_child_heading'>
              Do Good, And <span className='HA_main_bn_1_text_span'>Will Come</span>
            </p>
            <p className='HA_main_bn_1_text_child_para'>
              Organize and send notifications to friends that owe you a beer, a favor, money, or an apology and settle it in a fun, fast, and effective way. Improve your relations and social networks in just 3 easy steps for free. Start now - it only takes 5 minutes. Login and see who owes you a beer
            </p>
            <div className='HA_main_bn_1_btn'>
              <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={buttonStyles}>
                Get Started
              </Button>
              <Button variant="contained" endIcon={<LoginIcon />} sx={buttonStyles1} onClick={openLoginForm}>
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className='HA_main_bn_2'>
          <img className='HA_main_bn_2_image' src={img1} alt="" />
        </div>
      </div>

    
      <Dialog open={isLoginFormOpen} onClose={closeLoginForm} aria-labelledby="login-form-dialog">
        <DialogTitle className='HA_check_text' id="login-form-dialog">Login</DialogTitle>
        <DialogContent>

         <Popupform/>

          <Button onClick={closeLoginForm}>Close</Button>
        </DialogContent>
      </Dialog>
      <Footer/>
    </>
  );
};

export default LoginPage;
