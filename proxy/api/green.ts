import createAxiosInstance from '../createAxiosInstance';
import { Router, Request, Response  } from 'express';
const apiUrl = 'http://localhost:8002/message';

const greenRouter = Router();
const axiosInstance = createAxiosInstance();

const fetchGreenData = async () => {
  try {
    const res = await axiosInstance.get(apiUrl);
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
    console.log('something was catched at fetchBlueData(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      res.status(503).send({error: 'Service Unavailable'});
    }
  } 
});

export {greenRouter, fetchGreenData}