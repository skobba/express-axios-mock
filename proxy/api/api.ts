import createAxiosInstance from '../createAxiosInstance';
const apiUrl = 'http://localhost:8001';

const axiosInstance = createAxiosInstance();

export const fetchData = async () => {
  const res = await axiosInstance.get(apiUrl);
  return res;
};

