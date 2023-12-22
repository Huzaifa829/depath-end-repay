// landing page



import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import SignupPage from './SignUP';
import HomepageTabFrom1 from '../components/layout/HomePagetab1';
import { Link } from 'react-router-dom';


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

    const [activeTab, setActiveTab] = useState('Tab1');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const [HATab1, eTab1] = useState('HA1');
    const TabChange = (tab) => {
        eTab1(tab);
    };
    const [t, i18n] = useTranslation("global")
    return (
        <>
            <Navbar />

            {HATab1 === 'HA1' && <div id='hA_main_banner_id' className='hA_main_banner'>
                <div className='HA_main_bn_1'>
                    <div className='HA_main_bn_1_text_div'>
                        <p className='HA_main_bn_1_text_child_heading'>
                            {t("text.message")} <span className='HA_main_bn_1_text_span'>{t("text1.message")}</span>
                        </p>
                        <p className='HA_main_bn_1_text_child_para'>
                            {t("text2.message")}
                        </p>
                        <div className='HA_main_bn_1_btn'>
                            <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => TabChange('HA2')} sx={buttonStyles}>
                            {t("text3.message")}
                            </Button>
                            <Button variant="contained" endIcon={<LoginIcon />} sx={buttonStyles1} onClick={openLoginForm}>
                            {t("text4.message")}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='HA_main_bn_2'>
                    <img className='HA_main_bn_2_image' src={img1} alt="" />
                </div>
            </div>}
            {HATab1 === 'HA2' &&
                <div style={{ width: '100%', display: "flex", justifyContent: 'center', paddingTop: '25px' }} >
                    <div style={{ width: "90%" }} id="google_translate_element">
                        <HomepageTabFrom1 openLoginForm={openLoginForm} />
                    </div>
                </div>
            }

            <Dialog open={isLoginFormOpen} onClose={closeLoginForm} aria-labelledby="login-form-dialog">

                {activeTab === 'Tab1' && <DialogTitle className='HA_check_text' id="login-form-dialog">{t("text5.message")}</DialogTitle>}

                {activeTab === 'Tab2' && <DialogTitle className='HA_check_text' id="login-form-dialog">{t("text6.message")}</DialogTitle>}
                <DialogContent>

                    {activeTab === 'Tab1' && <Popupform />}
                    {activeTab === 'Tab2' && <SignupPage />}
                    {activeTab === 'Tab1' &&
                        <div className='HA_login_border'>
                            <p className='HA_create_acount' onClick={() => handleTabChange('Tab2')}> <span className='HA_create_acount_span'>{t("text7.message")}</span> {t("text8.message")} </p>
                            <Link to="/home">
                                <Button style={{ backgroundColor: 'black', color: "white", fontWeight: "500", padding: "5px 15px", lineHeight: "2", fontSize: "10px" }} >
                                {t("text9.message")}
                                </Button>
                            </Link>
                        </div>
                    }
                    {activeTab === 'Tab2' &&
                        <div className='HA_login_border'>

                            <p className='HA_create_acount' onClick={() => handleTabChange('Tab1')}>{t("text10.message")}</p>
                        </div>

                    }
                </DialogContent>
            </Dialog>
            <Footer />
        </>
    );
};

export default LoginPage;