import { fetchGreenData } from '../bff/api/green';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('green', () => {
  it('should fetch data successfully on first attempt', async () => {
    let axiosMock = new MockAdapter(axios);

    axiosMock.onGet('http://localhost:8002/message').reply(200);

    const res = await fetchGreenData();

    expect(res.status).toBe(200);
  });
});
