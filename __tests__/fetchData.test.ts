import { fetchData } from '../proxy/api/blue';

describe('suite', () => {
  it('should fetch data successfully on first attempt', async () => {
    
    const res1 = await fetchData(); // 404
    const res2 = await fetchData(); // 404
    const res = await fetchData(); // 200

    expect(res.status).toBe(200);

  });
});
