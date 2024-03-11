import express, { Express, Request, Response , Application } from 'express';
import {fetchBlueData} from './api/blue';
import {fetchGreenData} from './api/green';
import path from 'path';

const app: Application = express();
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../frontend', 'dist')));

app.get('/api/blue', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchBlueData();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchBlueData(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      res.status(503).send({error: 'Service Unavailable'});
    }
  } 
});

app.get('/api/green', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchGreenData();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchGreenData(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      res.status(503).send({error: 'Service Unavailable'});
    }
  } 
});


app.listen(port, () => {
  console.log(`Proxy at http://localhost:${port}`);
});

