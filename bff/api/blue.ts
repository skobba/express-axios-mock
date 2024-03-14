import createAxiosInstance from '../createAxiosInstance';
import { Router, Request, Response  } from 'express';
const baseUrl = 'http://localhost:8001';
const messagePath = '/message';
const postPath = '/post';

const blueRouter = Router();
const axiosInstance = createAxiosInstance(baseUrl);

const fetchBlueMessage = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}${messagePath}`);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

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

const fetchBluePost = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}${postPath}`);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

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


export {blueRouter, fetchBlueMessage, fetchBluePost};