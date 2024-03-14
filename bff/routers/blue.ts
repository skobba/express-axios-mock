import { Router, Request, Response  } from 'express';
import { fetchBlueMessage, fetchBluePost } from '../api/blue'

const blueRouter = Router();


blueRouter.get('/api/blue/message', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchBlueMessage();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchBlueMessage(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      const retryCount = error.config['axios-retry'].retryCount;
      res.status(503).send({error: 'Blue Service Unavailable', retryCount});
    }
  } 
});

blueRouter.get('/api/blue/post', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchBluePost();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchBluePost(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      const retryCount = error.config['axios-retry'].retryCount;
      res.status(503).send({error: 'Blue Service Unavailable', retryCount});
    }
  } 
});


export {blueRouter};