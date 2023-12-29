import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import { Progress } from 'antd';
// import 'antd/dist/antd.css';


const ProgresBarRound = ({ percentage }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
    <div style={{ position: 'relative' }}>
      <CircularProgress variant="determinate" value={percentage} />
      <Typography
        variant="p"
        component="div"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize:'10px'
        }}
      >
        {`${Math.round(percentage)}%`}
      </Typography>
    </div>
  </Box>
  )
}

export default ProgresBarRound
