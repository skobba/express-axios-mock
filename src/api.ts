import axiosInstance from './createAxiosInstance';

const apiUrl = '/posts/1';

export const fetchData = async () =>
    await axiosInstance.get(apiUrl)
        .then(response => response)
        .catch((error) => error.response)
