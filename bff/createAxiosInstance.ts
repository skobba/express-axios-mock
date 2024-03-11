import axios from 'axios';
import axiosRetry from 'axios-retry';

const createAxiosInstance = (baseUrl) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    //timeout: 1000,
  });

  // Retry configuration
  axiosRetry(axiosInstance, {
    retries: 5,
    retryDelay: (retryCount) => {
      // Custom retry delay logic
      return 1000; // (in milliseconds)
    },
    onRetry: (retryCount, error, requestConfig) => {
      console.log(`url: ${requestConfig.url} retry count: ${retryCount}`);
    },
  });

  return axiosInstance;
};

export default createAxiosInstance;
