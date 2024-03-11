import createAxiosInstance from '../createAxiosInstance';
import { Router, Request, Response  } from 'express';
const baseUrl = 'http://localhost:8002';
const path = '/message';

const greenRouter = Router();
const axiosInstance = createAxiosInstance(baseUrl);

const fetchGreenData = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}${path}`);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

greenRouter.get('/api/green', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchGreenData();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchGreenData(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      const retryCount = error.config['axios-retry'].retryCount;
      console.log(`Green Service Unavailable after ${retryCount} retries`)
      res.status(503).send({error: 'Green Service Unavailable', retryCount: retryCount});
    }
  } 
});

export {greenRouter, fetchGreenData}