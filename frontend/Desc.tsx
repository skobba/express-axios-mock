import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Message = () => {

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center">
        Backend-for-Frontend (BFF) pattern
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1" align="left">
            Demo with three express servers and one react frontend in an BFF pattern.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src="/bff-pattern.svg" alt="SVG icon" />
        </Grid>
      </Grid>
    </div>

  );
};

export default Message;
