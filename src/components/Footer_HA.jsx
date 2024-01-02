// footer

import React from 'react'
import { useTranslation } from 'react-i18next';
import '../cssFile/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleTranslate from './LagnuageWegit/LangWeg';

const Footer = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className="footer">
  <div className='HA_footer_div'>
    <ul className='HA_footer_div_ul'>
      <li>{t("footer1.message")}</li> {/*about*/}
      <li>{t("footer2.message")}</li> {/*Privacy & polic*/}
      <li>{t("footer3.message")}</li> {/*Contact*/}
    </ul>
  </div>
  <div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <FacebookIcon/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <TwitterIcon/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <LinkedInIcon/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <InstagramIcon/>
        </a></li>
    </ul>
    <p>&copy;2023  | All Rights Reserved</p> {/*2023  | All Rights Reserved*/}
    </div>
    
  </div>
  )
}

export default Footer