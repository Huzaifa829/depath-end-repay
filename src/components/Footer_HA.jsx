import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../cssFile/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItem, ListItemIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AboutModal from './PopupForm/AboutModal';
import PrivacyPolicyModal from './PopupForm/PrivacyPolicayodal';
import ContactModal from './PopupForm/ContactModal';

const Footer = () => {
  const [t, i18n] = useTranslation('global');
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const handleOpenModal2 = () => {
    setModalVisible2(true);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  const handleOpenModal1 = () => {
    setModalVisible1(true);
  };

  const handleCloseModal1 = () => {
    setModalVisible1(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 10);
    }
  };

  return (
    <div className={`footer ${isExpanded ? 'HA_footer_main' : ''}`}>
      <div className={`footer-content ${isExpanded ? 'expanded' : ''}`}>
        <AboutModal visible={modalVisible} onClose={handleCloseModal} />
        <PrivacyPolicyModal visible={modalVisible1} onClose={handleCloseModal1} />
        <ContactModal visible={modalVisible2} onClose={handleCloseModal2} />
        {isExpanded ? (
          <ul className={`HA_footer_div_ul ${isExpanded ? 'fade-transition' : 'fade-transition hidden'}`}>
            <ListItem style={{ cursor: 'pointer' }} onClick={handleOpenModal}>
              <ListItemIcon>
                <InfoIcon  style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">{t('footer1.message')}</Typography>
            </ListItem>
            <ListItem style={{ cursor: 'pointer' }} onClick={handleOpenModal1}>
              <ListItemIcon>
                <PolicyIcon style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">{t('footer2.message')}</Typography>
            </ListItem>
            <ListItem  style={{ cursor: 'pointer' }} onClick={handleOpenModal2}>
              <ListItemIcon>
                <PermContactCalendarIcon style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">{t('footer3.message')}</Typography>
            </ListItem>
          </ul>
        ) : (
          <>
            <ul className={`social-icon ${isExpanded ? 'fade-transition hidden' : 'fade-transition'}`}>
              <li className="social-icon__item">
                <div  onClick={handleOpenModal} className="social-icon__link">
                  <InfoIcon style={{ fontSize: 30 }} />
                </div>
              </li>
              <li className="social-icon__item">
                <div onClick={handleOpenModal1} className="social-icon__link">
                  <PolicyIcon style={{ fontSize: 30 ,color: 'black'}} />
                </div>
              </li>
              <li className="social-icon__item">
                <div  onClick={handleOpenModal2} className="social-icon__link" >
                  <PermContactCalendarIcon style={{ fontSize: 30 }} />
                </div>
              </li>
            </ul>
            <KeyboardArrowUpIcon
              className="HA_Footer_top_open_icon"
              style={{ fontSize: 24, color: 'black' }}
              onClick={toggleExpansion}
            />
          </>
        )}
      </div>

      <div className="footer-content">
        {isExpanded ? (
          <ul className={`HA_footer_div_ul ${isExpanded ? 'fade-transition' : 'fade-transition hidden'}`}>
            <ListItem>
              <ListItemIcon>
                <FacebookIcon style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">Facebook.com/repay</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TwitterIcon style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">Twitter.com/repay</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">Linkin.com/repay</Typography>
            </ListItem>
          </ul>
        ) : (
          <>
            <ul className={`social-icon ${isExpanded ? 'fade-transition hidden' : 'fade-transition'}`}>
              <li className="social-icon__item">
                <div className="social-icon__link" >
                  <FacebookIcon style={{ fontSize: 30 }} />
                </div>
              </li>
              <li className="social-icon__item">
                <div className="social-icon__link" >
                  <TwitterIcon style={{ fontSize: 30 }} />
                </div>
              </li>
              <li className="social-icon__item">
                <div className="social-icon__link" >
                  <LinkedInIcon style={{ fontSize: 30 }} />
                </div>
              </li>
            </ul>
          </>
        )}

        {isExpanded ? (
          <ExpandMoreIcon
            className="HA_Footer_top_open_icon"
            style={{ fontSize: 24, color: 'black' }}
            onClick={toggleExpansion}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Footer;
