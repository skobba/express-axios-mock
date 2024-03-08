import createAxiosInstance from '../createAxiosInstance';
const apiUrl = 'http://localhost:8001';

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

export const fetchData = async () => {
  const res = await axiosInstance.get(apiUrl);
  return res;
};

