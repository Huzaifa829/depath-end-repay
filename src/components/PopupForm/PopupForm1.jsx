// PopupForm.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

const PopupForm = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFacebookLinkChange = (e) => setFacebookLink(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);

  const handleSubmit = () => {
    const userdata = { name, email, facebookLink, amount, type };
    dispatch(actionCreators.adduser(userdata));
    setName('');
    setEmail('');
    setFacebookLink('');
    setAmount('');
    setType('');
    // Close the popup after submission
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Popup Form</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" value={name} onChange={handleNameChange} fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" value={email} onChange={handleEmailChange} fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12}  sm={6}>
            <TextField label="Facebook Link" value={facebookLink} onChange={handleFacebookLinkChange} fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Amount" value={amount} onChange={handleAmountChange} fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel  id="demo-simple-select-label">Type</InputLabel>
              <Select labelId="demo-simple-select-label" label="Age" value={type} onChange={handleTypeChange}>
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
                <MenuItem value="Money">Money</MenuItem>
                <MenuItem value="Favor">Favor</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Meal">Meal</MenuItem>
                <MenuItem value="Drink">Drink</MenuItem>
                <MenuItem value="Apology">Apology</MenuItem>
                <MenuItem value="Challenge">Challenge</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupForm






// const handleSubmit = () => {
//   const userdata = { name, email, facebookLink };
//   dispatch(actionCreators.adduser(userdata));
//   setName('');
//   setEmail('');
//   setFacebookLink('');
//   // Close the popup after submission
//   onClose();
// };