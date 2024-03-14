import express, { Express, Request, Response , Application } from 'express';
import {blueRouter} from './routers/blue';
import {greenRouter} from './routers/green';
import path from 'path';

const app: Application = express();
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../frontend', 'dist')));

app.use('/', blueRouter);
app.use('/', greenRouter);

app.listen(port, () => {
  console.log(`Proxy at http://localhost:${port}`);
});
