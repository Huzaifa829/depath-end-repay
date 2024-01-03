import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import '../../cssFile/Tab1.css';
import { Button, Flex } from 'antd';
import { CSSTransition } from 'react-transition-group';
import TabFrom1 from './TabForm1';
import TabFrom2 from './TabForm2';
import TabFrom3 from './Tabform3';
import TabFrom4 from './TabForm4';
import TabFrom5 from './TabForm5';
import TabFrom6 from './TabForm6';
import TabFrom7 from './TabForm7';
import HomeTabFrom1 from './HomeTabForm1';

const HomePageTab1 = ({openLoginForm}) => {
    const buttonStyles = {
        backgroundColor: '#dadada',
        borderColor: 'black',
        color: 'black',
        fontWeight: '500',
    };
    const selectedButtonStyles = {
        backgroundColor: '#b1b1b1',
        borderColor: 'black',
        color: 'white',
        fontWeight: '500',
    };

    const [activeForm, setActiveForm] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    const handleButtonClick = (formNumber) => {
        setActiveForm(formNumber);
    };
    const [t, i18n] = useTranslation("global")
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600); // Adjust the width as needed
        };

        // Initial check on mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className='HA_tab1_main'>
                <p className='HA_tab1_heading'>{t("HomePageTab1_1.message")}</p>{/*Add Debt Case*/}
                <p className='HA_tab1_heading_text'>{t("HomePageTab1_2.message")}</p>{/*In case of any transaction, 10% of the Repay coins will be deducted!*/}
            </div>
            <div className={isMobile ? 'HA_tab1_btn_main_mobile' : 'HA_tab1_btn_main'}>
                {isMobile ? (
                    <Slider {...sliderSettings}>
                        {[1, 2, 3, 4, 5, 6, 7].map((formNumber) => (
                            <Button
                                key={formNumber}
                                style={activeForm === formNumber ? selectedButtonStyles : buttonStyles}
                                onClick={() => handleButtonClick(formNumber)}
                            >
                                {t(`HomePageTab1_${formNumber + 2}.message`)}
                            </Button>
                        ))}
                    </Slider>
                ) : (
                    <Flex gap="small" wrap="wrap">
                        {[1, 2, 3, 4, 5, 6, 7].map((formNumber) => (
                            <Button
                                key={formNumber}
                                style={activeForm === formNumber ? selectedButtonStyles : buttonStyles}
                                onClick={() => handleButtonClick(formNumber)}
                            >
                                {t(`HomePageTab1_${formNumber + 2}.message`)}
                            </Button>
                        ))}
                    </Flex>
                )}
            </div>
            <div className='HA_tab1_form_main'>
                <CSSTransition
                    in={activeForm === 1}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div><HomeTabFrom1 openLoginForm={openLoginForm} /></div>
                </CSSTransition>
                <CSSTransition
                    in={activeForm === 2}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div><TabFrom2 /></div>
                </CSSTransition>
                <CSSTransition
                    in={activeForm === 3}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div><TabFrom3 /></div>
                </CSSTransition>
                <CSSTransition
                    in={activeForm === 4}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div><TabFrom4 /></div>
                </CSSTransition>
                <CSSTransition
                    in={activeForm === 5}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div><TabFrom5 /></div>
                </CSSTransition>
                <CSSTransition
                    in={activeForm === 6}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div><TabFrom6 /></div>
                </CSSTransition>
                <CSSTransition
                    in={activeForm === 7}
                    timeout={500}
                    classNames="slide"
                    unmountOnExit
                >
                    <div><TabFrom7 /></div>
                </CSSTransition>
            </div>
        </>
    );
};

export default HomePageTab1;
    