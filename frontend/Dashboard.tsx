import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Dashboard = () => {

    // State to store the fetched data
    const [data, setData] = useState(null);

    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('http://localhost:8000/api');
        // Parse the JSON response
        const jsonData = await response.json();
        // Update the state with the fetched data
        setData(jsonData);
      } catch (error: any) {
        console.error('Error fetching data: ', error.message);
      }
    };

  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div>
      <Typography variant="h4" gutterBottom align="center">
        Backend-for-Frontend (BFF) pattern
      </Typography>

    <Grid container spacing={2}>
      {/* First Column */}
      <Grid item xs={6}>
        <Typography variant="body1" align="left">
          Demo with three express servers and one react frontend in an BFF pattern.
        </Typography>
      </Grid>
      
      {/* Second Column */}
      <Grid item xs={6}>
        <img src="/bff-pattern.svg" alt="SVG icon" />
      </Grid>
    </Grid>

    <Button variant="contained" color="primary" onClick={fetchData}>
      Fetch data
    </Button>
    
      <Box
            height={150}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
          >
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Box>
    </div>
  </Container>
  );
};

export default Dashboard;
