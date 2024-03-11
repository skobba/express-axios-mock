import createAxiosInstance from '../createAxiosInstance';
import { Router, Request, Response  } from 'express';
const apiUrl = 'http://localhost:8002';

const greenRouter = Router();
const axiosInstance = createAxiosInstance();

// Add a request interceptor
const requestInterceptor = axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('Intercepted GET request:', config.url);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export const fetchGreenData = async () => {
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

export {greenRouter}