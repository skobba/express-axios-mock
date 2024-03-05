import createAxiosInstance from './createAxiosInstance';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const axiosInstance = createAxiosInstance();

export const fetchData = async () => {
  const res = await axiosInstance.get(apiUrl);
  return res;
};

