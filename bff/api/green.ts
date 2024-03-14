import createAxiosInstance from '../createAxiosInstance';
const baseUrl = 'http://localhost:8002';
const messagePath = '/message';
const postPath = '/post';

const axiosInstance = createAxiosInstance(baseUrl);

const fetchGreenMessage = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}${messagePath}`);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

const fetchGreenPost = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}${postPath}`);
    return res;
  } catch (error) {
    console.log('something was catched axiosInstance.get(): ', error.code);

    // Rethrow the error
    throw error;
  } 
};

export { fetchGreenMessage, fetchGreenPost}