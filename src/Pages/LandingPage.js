// landing page



import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import '../cssFile/landingPage.css';
import img1 from '../assets/images/pricing.png';
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar2 from '../components/Navbar2_home';
import NewsTicker from '../components/Newsthicker/Newsthicker';


const LoginPage = () => {
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [visibleNewsIndex, setVisibleNewsIndex] = useState(0);
    const newsData = [
        {
            id: '1',
            name: 'Alex',
            category: 'Technology',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLLQRG2yePVQWraO8uYbNLTw7IOMwBibjgA&usqp=CAU',
        },
        {
            id: '2',
            name: 'John',
            category: 'Money',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5ZCN4ruLo5kZEi3-fGSiANvNqSHf6O89lQ&usqp=CAU',
        },
        {
            id: '3',
            name: 'Kelvin',
            category: 'Favor',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2o_VKgKABU_o67F5eXyocVcyhbQgaCg8KA&usqp=CAU',
        },
        {
            id: '4',
            name: 'Alexsa',
            category: 'Deink',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyyFhmNpq9_WIcgHDsKHXzl-CJuUV1XquFw&usqp=CAU',
        },
    ];

    useEffect(() => {
        // Set up a timer to switch to the next news item every 5 seconds
        const timer = setInterval(() => {
            setVisibleNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
        }, 5000);

        // Clear the timer on component unmount
        return () => clearInterval(timer);
    }, [newsData.length]);

    const openLoginForm = () => {
        setIsLoginFormOpen(true);
        handleTabChange('Tab1')
    };
    const openLoginFormSignUp = () => {
        setIsLoginFormOpen(true);
        handleTabChange('Tab2')
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
        backgroundColor: "white",
        color: 'black',
        border: '1px solid black',
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
            <Navbar2 />

            {HATab1 === 'HA1' && <div id='hA_main_banner_id' className='hA_main_banner'>
                <div className='HA_main_bn_1'>
                    <div className='HA_main_bn_1_text_div'>
                        <p className='HA_main_bn_1_text_child_heading'>
                            <span style={{ fontSize: "4rem", color: 'rgb(16 167 255)' }}>Unknown </span>{t("text.message")} <span className='HA_main_bn_1_text_span'>{t("text1.message")}</span>
                        </p>
                        <p className='HA_main_bn_1_text_child_para'>
                            {t("text2.message")}
                        </p>
                        <div className='HA_main_bn_1_btn'>
                            <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={openLoginFormSignUp} sx={buttonStyles}>
                                {t("text3.message")}
                            </Button>
                            <Button variant="contained" endIcon={<LoginIcon />} sx={buttonStyles1} onClick={openLoginForm}>
                                {t("text4.message")}
                            </Button>
                        </div>
                        <div className='HA_landing_news_thicker' >
                            {newsData.map((item, index) => (
                                <NewsTicker
                                    key={item.id}
                                    news={item}
                                    isVisible={index === visibleNewsIndex}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='HA_main_bn_2'>
                    <img className='HA_main_bn_2_image' src={img1} alt="" />
                </div>
            </div>}
            {HATab1 === 'HA2' && (
                <div className='HA_landinf_page_demo'>
                    <ArrowBackIcon onClick={() => TabChange('HA1')} style={{ fontSize: '2rem', cursor: 'pointer' }} />
                    <div style={{ width: "90%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div id="google_translate_element" style={{ width: "90%" }}>
                            <HomepageTabFrom1 openLoginForm={openLoginForm} />
                        </div>
                    </div>
                </div>
            )}

            <Dialog open={isLoginFormOpen} onClose={closeLoginForm} aria-labelledby="login-form-dialog">

                {activeTab === 'Tab1' && <DialogTitle className='HA_check_text' id="login-form-dialog">{t("text5.message")}</DialogTitle>}{/*Login */}

                {activeTab === 'Tab2' && <DialogTitle className='HA_check_text' id="login-form-dialog">{t("text6.message")}</DialogTitle>}{/*SignUp */}
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