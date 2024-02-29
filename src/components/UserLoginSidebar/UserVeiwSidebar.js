import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import {db,auth} from '../../firebase'; // Import your Firebase config
import img from "../../assets/images/dreamstime_xl_199119493.png"
import '../../cssFile/HomePage.css'

export default function UserMenu() {
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = auth.currentUser;
      // console.log(userId.uid)
      if (userId) {
        try {
          const docRef = doc(db, 'users', userId.uid); // Reference to the user document
          const docSnap = await getDoc(docRef); // Get the document snapshot
          if (docSnap.exists()) {
            setUserData(docSnap.data()); // Set user data in state
          } else {
            console.log('User document not found');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData(); // Call the function when component mounts
  }, []);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar alt={userData?.name || 'Unknown'} src={userData?.avatarUrl || img} sx={{ width: 40, height: 40 }}/>
      <div className='HA_side_bar_text'>
        <Typography variant="subtitle1" noWrap sx={{ fontSize: 20 }}>
          {userData?.name || 'Unknown'}
        </Typography>
        <Typography variant="body2" color="textSecondary" noWrap>
          {userData?.email || 'example@gmail.com'}
        </Typography>
      </div>
    </Stack>
  );
}
