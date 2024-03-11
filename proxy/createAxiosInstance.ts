import axios from 'axios';
import axiosRetry from 'axios-retry';

const createAxiosInstance = (baseUrl) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    //timeout: 1000,
  });

  // Retry configuration
  // axiosRetry(axiosInstance, {
  //   retries: 3, // Number of retries
  //   retryDelay: axiosRetry.exponentialDelay,
  //   // onRetry: (retryCount, error, requestConfig) => {
  //   //   console.log(`url: ${requestConfig.url} retry count: ${retryCount}`);
  //   // },
  // });

  return axiosInstance;
};

export default createAxiosInstance;
