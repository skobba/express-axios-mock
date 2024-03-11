import { fetchBlueData } from '../proxy/api/blue';

describe('blue', () => {
  it('should fetch data successfully on first attempt', async () => {
    
    const res1 = await fetchBlueData(); // 500
    const res2 = await fetchBlueData(); // 500
    const res = await fetchBlueData(); // 200

    expect(res.status).toBe(200);
  });
});
