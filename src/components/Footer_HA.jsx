import React from 'react'
import '../cssFile/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const footer = () => {
  return (
    <footer className="footer">
    {/* <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div> */}
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
    <p>&copy;2023  | All Rights Reserved</p>
  </footer>
  )
}

export default footer
