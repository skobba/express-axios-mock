import { fetchBlueData } from '../bff/api/blue';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('blue', () => {
  it('should fetch data successfully on first attempt', async () => {
    let axiosMock = new MockAdapter(axios);

    axiosMock.onGet('http://localhost:8001/message').reply(200);

    const res = await fetchBlueData();

    expect(res.status).toBe(200);
  });
});
