import express, { Express, Request, Response , Application } from 'express';

const app: Application = express();
const port = process.env.PORT || 8002;

app.get('/message', async (req: Request, res: Response) => {
  res.send({message: "Message from green"});
});

app.get('/post', async (req: Request, res: Response) => {
  res.send({message: "Post from green"});
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

