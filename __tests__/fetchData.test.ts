import { fetchData } from '../src/api';

import axiosInstance from '../src/createAxiosInstance'
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axiosInstance);


describe('suite', () => {
  it('should fetch data successfully', async () => {
    mock.onGet('/posts/1').replyOnce(500)
    mock.onGet('/posts/1').replyOnce(500)
    mock.onGet('/posts/1').replyOnce(500)
    mock.onGet('/posts/1').replyOnce(200)

    const res = await fetchData();

    expect(res.status).toBe(200);
  });

  it('should not fetch data successfully because exceeds max retries', async () => {
    mock.onGet('/posts/1').replyOnce(500)
    mock.onGet('/posts/1').replyOnce(500)
    mock.onGet('/posts/1').replyOnce(500)
    mock.onGet('/posts/1').replyOnce(500)
    mock.onGet('/posts/1').replyOnce(200)

    const res = await fetchData();

    expect(res.status).toBe(500);
  });
});
