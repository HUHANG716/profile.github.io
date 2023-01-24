
import { Box, TextField, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import { Button } from '@mui/material';
import React from 'react';
import './index.scss'
const ContactMe = () => {
    return (
        <Box className="container">
            <Typography variant='h2' sx={{display:{xs:'none',md:'block'}}}>Come and contact me!</Typography>
            <Typography variant='h4' sx={{display:{xs:'block',md:'none'}}}>Come and contact me!</Typography>
            <TextField sx={{width:0.75,mt:3}} id="outlined-basic" label="Email" variant="outlined" />
            <TextField sx={{width:0.75,mt:3}} id="filled-basic" label="Mobile" variant="outlined" />
            <Button variant="contained" size='large' sx={{mt:3}}>Confirm</Button>
            
          
        </Box>
    );
};

export default ContactMe;