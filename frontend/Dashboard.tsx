import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
    const [blueData, setBlueData] = useState(null as any);
    const [greenData, setGreenData] = useState(null as any);

    const fetchBlueData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/blue');

        if (!response.ok) {
          const statusCode = response.status;
          const json =  await response.json();
          console.error('HTTP error. Status code:', statusCode);
          setBlueData(json);
          return;
        } else {
          const jsonData = await response.json();
          setBlueData(jsonData);
          return;
        }

      } catch (error: any) {
        console.error('Error fetching data: ', error.message);
      }
    };

    const fetchGreenData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/green');

        if (!response.ok) {
          const statusCode = response.status;
          const json =  await response.json();
          console.error('HTTP error. Status code:', statusCode);
          setGreenData(json);
          return;
        } else {
          const jsonData = await response.json();
          setGreenData(jsonData);
          return;
        }

      } catch (error: any) {

        console.log('error.response.data: ', error.response.data)
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
      <Grid item xs={6}>
        <Typography variant="body1" align="left">
          Demo with three express servers and one react frontend in an BFF pattern.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src="/bff-pattern.svg" alt="SVG icon" />
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={fetchBlueData}>
          Fetch blue data
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
              <pre>{JSON.stringify(blueData, null, 2)}</pre>
        </Box>
      </Grid>
      <Grid item xs={6}>
      <Button variant="contained" color="success" onClick={fetchGreenData}>
        Fetch green data
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
              <pre>{JSON.stringify(greenData, null, 2)}</pre>
        </Box>
      </Grid>
    </Grid>





    </div>
  </Container>
  );
};

export default Dashboard;
