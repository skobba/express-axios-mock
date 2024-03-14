import createAxiosInstance from '../createAxiosInstance';
import { Router, Request, Response  } from 'express';
const baseUrl = 'http://localhost:8002';
const messagePath = '/message';
const postPath = '/post';

const greenRouter = Router();
const axiosInstance = createAxiosInstance(baseUrl);

const fetchGreenMessage = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}${messagePath}`);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

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

const fetchGreenPost = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}${postPath}`);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

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

export {greenRouter, fetchGreenMessage, fetchGreenPost}