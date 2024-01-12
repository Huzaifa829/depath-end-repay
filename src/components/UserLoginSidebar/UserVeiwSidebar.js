import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import img from "../../assets/images/dreamstime_xl_199119493.png"
import '../../cssFile/HomePage.css'

export default function UserMenu() {
//   const { name, email, avatarUrl } = user;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar alt="xyz" src={img} sx={{ width: 40, height: 40 }}/>
      <div  className='HA_side_bar_text'>
        <Typography variant="subtitle1" noWrap sx={{ fontSize: 20 }}>
          Unknown
        </Typography>
        <Typography variant="body2" color="textSecondary" noWrap>
          Example@gmail.com
        </Typography>
      </div>
    </Stack>
  );
}
