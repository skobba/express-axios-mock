import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import {fetchData} from './api/api';
import path from 'path';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../frontend', 'dist')));

app.get('/api', async (req: Request, res: Response) => {
  const resApi = await fetchData();
  res.send(resApi.data);
});

app.listen(port, () => {
  console.log(`Proxy at http://localhost:${port}`);
});

