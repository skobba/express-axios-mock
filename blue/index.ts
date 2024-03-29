import express, { Express, Request, Response , Application } from 'express';

const app: Application = express();
const port = process.env.PORT || 8001;

app.get('/message', async (req: Request, res: Response) => {
  res.send({message: "Message from blue"});
});

app.get('/post', async (req: Request, res: Response) => {
  res.send({message: "Post from blue"});
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

