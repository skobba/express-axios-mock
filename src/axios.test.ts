import { fetchData } from './api';

describe('suite', () => {
  it('should fetch data successfully on first attempt', async () => {
    const res = await fetchData();

    expect(res.status).toBe(200);

  });
});
