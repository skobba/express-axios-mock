import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Message = () => {
    const [blueData, setBlueData] = useState(null as any);
    const [greenData, setGreenData] = useState(null as any);
    let intervalId: NodeJS.Timeout;
    
    function startCounter(backend: string): void {
      let count: number = 0;
      console.log(count);
      intervalId = setInterval(() => {
          count++;
          if (backend === "blue") {
            setBlueData(count);
          } else if (backend === "green") {
            setGreenData(count);
          }
      }, 1000);
    }
    
    function stopCounter(): void {
        clearInterval(intervalId);
    }
    const fetchBlueData = async () => {
      startCounter("blue");
      try {
        const response = await fetch('http://localhost:8000/api/blue/message');

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
        setBlueData("Error fetching data from BFF");
        console.error('Error fetching data: ', error.message);
      } finally {
        stopCounter();
      }
    };

    const fetchGreenData = async () => {
      startCounter("green");

      try {
        const response = await fetch('http://localhost:8000/api/green/message');

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
        setGreenData("Error fetching data from BFF");
        console.error('Error fetching data: ', error.message);
      } finally {
        stopCounter();
      }
    };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>

          <Box
            height={150}
            my={4}
            display="column"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
              >
                <Button variant="contained" color="primary" onClick={fetchBlueData}>
                  Fetch blue message
                </Button>
                <pre>{JSON.stringify(blueData, null, 2)}</pre>
          </Box>
        </Grid>
        <Grid item xs={6}>

        <Box
            height={150}
            my={4}
            display="column"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
              >
                <Button variant="contained" color="success" onClick={fetchGreenData}>
                  Fetch green message
                </Button>
                <pre>{JSON.stringify(greenData, null, 2)}</pre>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
