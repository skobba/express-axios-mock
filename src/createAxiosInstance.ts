import axios from 'axios';
import axiosRetry from 'axios-retry';

const createAxiosInstance = () => {
  const axiosInstance = axios.create();

  // Retry configuration
  // axiosRetry(axiosInstance, {
  //   retries: 3, // Number of retries
  //   retryDelay: axiosRetry.exponentialDelay, // Exponential backoff retry delay
  // });

  return axiosInstance;
};

export default createAxiosInstance;
