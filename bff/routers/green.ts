import { Router, Request, Response  } from 'express';
import { fetchGreenMessage, fetchGreenPost } from '../api/green'
const greenRouter = Router();

greenRouter.get('/api/green/message', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchGreenMessage();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchGreenMessage(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      const retryCount = error.config['axios-retry'].retryCount;
      console.log(`Green Service Unavailable after ${retryCount} retries`)
      res.status(503).send({error: 'Green Service Unavailable', retryCount: retryCount});
    }
  } 
});

greenRouter.get('/api/green/post', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchGreenPost();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchGreenPost(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      const retryCount = error.config['axios-retry'].retryCount;
      console.log(`Green Service Unavailable after ${retryCount} retries`)
      res.status(503).send({error: 'Green Service Unavailable', retryCount: retryCount});
    }
  } 
});

export {greenRouter}