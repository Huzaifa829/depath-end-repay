import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../cssFile/HomePage.css'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebtn from '../buttons/Sidebtn';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Tab1 from '../components/Tab1';
import Tab2 from '../components/Tab2';
import Tab3 from '../components/Tab3';
import Tab4 from '../components/Tab4';
import Tab5 from '../components/Tab5';
import Tab6 from '../components/Tab6';
import Tab7 from '../components/Tab7';
import Tab8 from '../components/Tab8';
import Tab9 from '../components/Tab9';
import { Link } from 'react-router-dom';
import FooterHA from '../components/Footer_HA'

const HomePage = () => {
  const btnstyle = {
    backgroundColor: 'black',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '100%',
    marginTop: '15px'
  }
    const [activeTab, setActiveTab] = useState('Tab1'); 
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

  return (
    <>
      <Navbar />
      <div className='HA_main'>
        <div className='HA_main_part1'>
          <div className='HA_side_bar_btn'>
            <MenuIcon color='white' />
            <span className='HA_side_bar_text'>Repay Menu</span>
          </div>
          <div className='HA_side_bar_btn_check' onClick={() => handleTabChange('Tab1')}>
          <Sidebtn  text='Add Debt Cases' icon={<FolderIcon />} />
          </div>
          <div className='HA_side_bar_btn_check' onClick={() => handleTabChange('Tab2')}  >

          <Sidebtn  text='Overview' icon={<BlurCircularIcon />} />
          </div>
          <div className='HA_side_bar_btn_check' onClick={() => handleTabChange('Tab3')}>
          <Sidebtn text='My Adversaries' icon={<PersonIcon />} />
          </div>
          <div className='HA_side_bar_btn_check'  onClick={() => handleTabChange('Tab4')}>
          <Sidebtn text='Requests Sent' icon={<FolderCopyIcon />} />
          </div>
          <div className='HA_side_bar_btn_check'  onClick={() => handleTabChange('Tab5')}>
          <Sidebtn text='Offers Recieved' icon={<FavoriteBorderIcon />} />
          </div>
          <div className='HA_side_bar_btn_check' onClick={() => handleTabChange('Tab6')}>
          <Sidebtn text='Settled Debt Cases' icon={<WidgetsIcon />} />
          </div>
          <div className='HA_side_bar_btn_check'  onClick={() => handleTabChange('Tab7')}>
          <Sidebtn text='Notification Settings' icon={<SettingsIcon />} />
          </div>
          <div className='HA_side_bar_btn_check'  onClick={() => handleTabChange('Tab8')}>
          <Sidebtn text='Profile' icon={<PersonIcon />} />
          </div>
          <div className='HA_side_bar_btn_check'  onClick={() => handleTabChange('Tab9')}>
          <Sidebtn text='Wallet' icon={<AccountBalanceWalletIcon />} />
          </div>
          <Link to="/">
          <Button variant="contained" endIcon={<LogoutIcon />}
            style={btnstyle}
          >
            Logout
          </Button>
          </Link>
        </div>
        <div className='HA_main_part2'>
        {activeTab === 'Tab1' && <Tab1 />}
          {activeTab === 'Tab2' && <Tab2 />}
          {activeTab === 'Tab3' && <Tab3 />}
          {activeTab === 'Tab4' && <Tab4 />}
          {activeTab === 'Tab5' && <Tab5 />}
          {activeTab === 'Tab6' && <Tab6 />}
          {activeTab === 'Tab7' && <Tab7 />}
          {activeTab === 'Tab8' && <Tab8 />}
          {activeTab === 'Tab9' && <Tab9 />}
        </div>
      </div>
    <FooterHA/>
    </>
  )
}

export default HomePage
