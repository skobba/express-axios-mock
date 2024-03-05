import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})

// Retry configuration
axiosRetry(axiosInstance, {
  retries: 3, // Number of retries
  retryDelay: axiosRetry.exponentialDelay, // Exponential backoff retry delay
});

export default axiosInstance
