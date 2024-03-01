import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import {fetchData} from './api';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
  const resApi = await fetchData();
  res.send(resApi.data);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

