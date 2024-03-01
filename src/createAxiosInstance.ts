import axios from 'axios';
import axiosRetry  from 'axios-retry';

export const createAxiosInstance = () => {
  const client = axios.create();

  axiosRetry(axios, {
    retries: 3,
    retryDelay: (...arg) => axiosRetry.exponentialDelay(...arg, 1000),
    onRetry: (retryCount, error, requestConfig) => {
      console.log(`retry count: `, retryCount);
    },
  });
  
  return client;
};
