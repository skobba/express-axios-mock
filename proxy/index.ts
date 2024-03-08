import express, { Express, Request, Response , Application } from 'express';
import {fetchData} from './api/api';
import path from 'path';

const app: Application = express();
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../frontend', 'dist')));

app.get('/api', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchData();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchData(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      res.status(503).send({error: 'Service Unavailable'});
    }
  } 
});

app.listen(port, () => {
  console.log(`Proxy at http://localhost:${port}`);
});

