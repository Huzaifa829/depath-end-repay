import React from 'react';
import { Paper, Typography, IconButton, Avatar, Grid } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import '../../cssFile/Newsthicker.css'

const NewsTicker = ({ news,isVisible  }) => {
  const { id, name, category, imageUrl } = news;

  return (
    <div style={{position:'absolute'}}>
    <Paper
      elevation={3}
      className={`news-ticker ${isVisible ? 'visible' : 'hidden'}`}
      style={{
        backgroundColor: '#faf9f9',
        padding: '10px',
        margin:'10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '345px', // Set your desired width here
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar sx={{ width: 60, height: 60 }} alt={name} src={imageUrl} />
        </Grid>
        <Grid item>
          <Typography style={{fontWeight:700,fontSize:'1.3rem'}} variant="subtitle1">{name}</Typography>
          <Typography variant="caption">{`ID: ${id}`}</Typography>
        </Grid>
        <Grid item  marginLeft={3}>
          <Typography style={{fontWeight:600,fontSize:'1rem'}} variant="caption">{category}</Typography>
          </Grid>

      </Grid>
      <IconButton>
        <ShareIcon />
      </IconButton>
    </Paper>
    </div>
 
  );
};

export default NewsTicker;
