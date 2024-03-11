import createAxiosInstance from '../createAxiosInstance';
import { Router, Request, Response  } from 'express';
const apiUrl = 'http://localhost:8001/message';

const blueRouter = Router();
const axiosInstance = createAxiosInstance();

const fetchBlueData = async () => {
  try {
    const res = await axiosInstance.get(apiUrl);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

blueRouter.get('/api/blue', async (req: Request, res: Response) => {
  try {
    const resApi = await fetchBlueData();
    res.send(resApi.data);
  } catch (error) {
    console.log('something was catched at fetchBlueData(): ', error.code);//, error.data);

    if (error.code === 'ECONNREFUSED')
    {
      res.status(503).send({error: 'Service Unavailable'});
    }
  } 
});

export {blueRouter, fetchBlueData};