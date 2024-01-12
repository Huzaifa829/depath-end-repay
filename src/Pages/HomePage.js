import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import img1 from '../assets/images/logoMain.png';
import Navbar from '../components/Navbar';
import '../cssFile/HomePage.css'
import Sidebtn from '../buttons/Sidebtn';
import FooterHA from '../components/Footer_HA';
import PopupForm from '../components/PopupForm/PopupForm1';
import { actionCreators } from '../state/index';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
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
import Navbar2 from '../components/Navbar2_home';
import UserMenu from '../components/UserLoginSidebar/UserVeiwSidebar';




const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Tab1');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [t, i18n] = useTranslation("global")
  const renderSidebtn = (tab, text, icon) => (
    <div className={`HA_side_bar_btn_check ${activeTab === tab ? 'selected' : ''}`} onClick={() => handleTabChange(tab)}>
      <Sidebtn text={text} icon={icon} selected={activeTab === tab} />
    </div>
  );
  const dispatch = useDispatch();
  const open = useSelector((state) => state.amount);
  const open1 = useSelector((state) => state.SideBAr);
  console.log(open1.isDrawerOpen,'asdjkaskdhjk')
  // const { openModal, closeModal } = bindActionCreators(actionCreators, dispatch);



  const handleClose = () => {
    dispatch(actionCreators.closeModal());
  };
  const handleIconClick = () => {

  };
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'left' ? 'auto' : 250 }}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List>
        <div style={{padding:'10px'}}>
      <img className="navabr_logo" src={img1} alt="" />
      </div>
        {renderSidebtn('Tab1', t("HA_text2.message"), <FolderIcon />)}{/*Add Debt Cases*/}
        {renderSidebtn('Tab2', t("HA_text3.message"), <BlurCircularIcon />)}{/*Overview*/}
        {renderSidebtn('Tab3', t("HA_text4.message"), <PersonIcon />)}{/*My Adversaries*/}
        {renderSidebtn('Tab4', t("HA_text5.message"), <FolderCopyIcon />)}{/*Requests Sent*/}
        {renderSidebtn('Tab5', t("HA_text6.message"), <FavoriteBorderIcon />)}{/*Offers Received*/}
        {renderSidebtn('Tab6', t("HA_text7.message"), <WidgetsIcon />)}{/*Settled Debt Cases*/}
        {renderSidebtn('Tab7', t("HA_text8.message"), <SettingsIcon />)}{/*Notification Settings*/}
        {renderSidebtn('Tab8', t("HA_text9.message"), <PersonIcon />)}{/*Profile*/}
        {renderSidebtn('Tab9', t("HA_text10.message"), <AccountBalanceWalletIcon />)}{/*Wallet*/}
        <Link to="/">
          <ListItemButton>
            <Button variant="contained" endIcon={<LogoutIcon />} style={btnstyle}>
              {t("HA_text1.message")}
            </Button>
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
  


  const handleDrawerOpen = () => {
    dispatch(actionCreators.toggleDrawer(true));
  };

  const handleDrawerClose = () => {
    dispatch(actionCreators.toggleDrawer(false));
  };





  const btnstyle = {
    backgroundColor: 'black',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '100%',
    marginTop: '15px'
  }


  return (
    <>
      <PopupForm open={open} onClose={handleClose} />
      <Navbar />
      <div className='HA_main'>
        {/* <div style={{position:"absolute", left:'10px',zIndex:'0'}}> */}
        <div className='HA_dawer_main_HA'>

          <Button onClick={handleDrawerOpen}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor="left"
            open={open1.isDrawerOpen}
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
          >
            {list('left')}
          </SwipeableDrawer>

          {/* The rest of your components */}
          {/* ... */}
        </div>
        <div className='HA_main_part1'>
          <div className='HA_side_bar_btn'>
            {/* <MenuIcon color='white' onClick={handleIconClick} />
            <span style={{ display: "Block", width: "200px" }} className='HA_side_bar_text'>{t("HA_text.message")}</span> */}
            <UserMenu/>
          </div>
          {renderSidebtn('Tab1', t("HA_text2.message"), <FolderIcon />)}{/*Add Debt Cases*/}

          {renderSidebtn('Tab2', t("HA_text3.message"), <BlurCircularIcon />)}{/*Overview*/}
          {renderSidebtn('Tab3', t("HA_text4.message"), <PersonIcon />)}{/*My Adversaries*/}
          {renderSidebtn('Tab4', t("HA_text5.message"), <FolderCopyIcon />)}{/*Requests Sent*/}
          {renderSidebtn('Tab5', t("HA_text6.message"), <FavoriteBorderIcon />)}{/*Offers Recieved*/}
          {renderSidebtn('Tab6', t("HA_text7.message"), <WidgetsIcon />)}{/*Settled Debt Cases*/}
          {renderSidebtn('Tab7', t("HA_text8.message"), <SettingsIcon />)}{/*Notification Settings*/}
          {renderSidebtn('Tab8', t("HA_text9.message"), <PersonIcon />)}{/*Profile*/}
          {renderSidebtn('Tab9', t("HA_text10.message"), <AccountBalanceWalletIcon />)}{/*Wallet*/}
          <Link to="/">
            <Button variant="contained" endIcon={<LogoutIcon />}
              style={btnstyle}
            >
              {t("HA_text1.message")}{/*sss*/}
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
      <FooterHA />
    </>
  )
}

export default HomePage
