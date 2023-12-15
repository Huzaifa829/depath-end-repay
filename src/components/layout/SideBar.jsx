import React from 'react'
import '../../cssFile/SideBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebtn from '../../buttons/Sidebtn';
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
const SideBar = () => {
    const btnstyle = {
        backgroundColor: 'black',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%',
        marginTop: '15px'
    }
    return (
        <>
            <div className='HA_side_bar_btn'>
                <MenuIcon color='white' />
                <span className='HA_side_bar_text'>Repay Menu</span>
            </div>
            <Sidebtn text='Add Debt Cases' icon={<FolderIcon />} />
            <Sidebtn text='Overview' icon={<BlurCircularIcon />} />
            <Sidebtn text='My Adversaries' icon={<PersonIcon />} />
            <Sidebtn text='Requests Sent' icon={<FolderCopyIcon />} />
            <Sidebtn text='Offers Recieved' icon={<FavoriteBorderIcon />} />
            <Sidebtn text='Settled Debt Cases' icon={<WidgetsIcon />} />
            <Sidebtn text='Notification Settings' icon={<SettingsIcon />} />
            <Sidebtn text='Profile' icon={<PersonIcon />} />
            <Sidebtn text='Wallet' icon={<AccountBalanceWalletIcon />} />
            <Button variant="contained" endIcon={<LogoutIcon />}
                style={btnstyle }
            >
                Logout
            </Button>
        </>
    )
}

export default SideBar
