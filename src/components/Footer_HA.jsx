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

const Footer = () => {
  const [t, i18n] = useTranslation('global');
  const [isExpanded, setIsExpanded] = useState(false);

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
        {isExpanded ? (
          <ul className={`HA_footer_div_ul ${isExpanded ? 'fade-transition' : 'fade-transition hidden'}`}>
            <ListItem>
              <ListItemIcon>
                <InfoIcon style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">{t('footer1.message')}</Typography>
            </ListItem>
            <Link to="/privacy-policy">
            <ListItem>
              <ListItemIcon>
                <PolicyIcon style={{ color: 'black' }} fontSize="large" />
              </ListItemIcon>
              <Typography variant="body2">{t('footer2.message')}</Typography>
            </ListItem>
            </Link>
            <ListItem>
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
                <a className="social-icon__link" href="#">
                  <InfoIcon style={{ fontSize: 30 }} />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                <Link to="/privacy-policy">
                  <PolicyIcon style={{ fontSize: 30 }} />
                  </Link>
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                  <PermContactCalendarIcon style={{ fontSize: 30 }} />
                </a>
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
                <a className="social-icon__link" href="#">
                  <FacebookIcon style={{ fontSize: 30 }} />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                  <TwitterIcon style={{ fontSize: 30 }} />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link" href="#">
                  <LinkedInIcon style={{ fontSize: 30 }} />
                </a>
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
