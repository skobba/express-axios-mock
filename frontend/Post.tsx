import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Post = () => {
    const [bluePost, setBluePost] = useState(null as any);
    const [greenPost, setGreenPost] = useState(null as any);
    let intervalId: NodeJS.Timeout;
    
    function startCounter(backend: string): void {
      let count: number = 0;
      console.log(count);
      intervalId = setInterval(() => {
          count++;
          if (backend === "blue") {
            setBluePost(count);
          } else if (backend === "green") {
            setGreenPost(count);
          }
      }, 1000);
    }
    
    function stopCounter(): void {
        clearInterval(intervalId);
    }
    const fetchBlueData = async () => {
      startCounter("blue");
      try {
        const response = await fetch('http://localhost:8000/api/blue/post');

        if (!response.ok) {
          const statusCode = response.status;
          const json =  await response.json();
          console.error('HTTP error. Status code:', statusCode);
          setBluePost(json);
          return;
        } else {
          const jsonData = await response.json();
          setBluePost(jsonData);
          return;
        }

      } catch (error: any) {
        setBluePost("Error fetching data from BFF");
        console.error('Error fetching data: ', error.message);
      } finally {
        stopCounter();
      }
    };

    const fetchGreenData = async () => {
      startCounter("green");

      try {
        const response = await fetch('http://localhost:8000/api/green/post');

        if (!response.ok) {
          const statusCode = response.status;
          const json =  await response.json();
          console.error('HTTP error. Status code:', statusCode);
          setGreenPost(json);
          return;
        } else {
          const jsonData = await response.json();
          setGreenPost(jsonData);
          return;
        }

      } catch (error: any) {
        setGreenPost("Error fetching data from BFF");
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
                  Fetch blue post
                </Button>
                <pre>{JSON.stringify(bluePost, null, 2)}</pre>
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
                  Fetch green post
                </Button>
                <pre>{JSON.stringify(greenPost, null, 2)}</pre>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Post;
