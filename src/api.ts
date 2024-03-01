import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const axiosInstance = axios.create();

export const fetchData = async () => {
  const res = await axiosInstance.get(apiUrl);
  return res;
};

