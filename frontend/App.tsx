
import React from 'react'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Desc from './Desc';
import Message from './Message';
import Post from './Post';
import Container from '@mui/material/Container';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ display: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Desc />
        <Message />
        <Post />
      </Container>
    </ThemeProvider>
  )
}
