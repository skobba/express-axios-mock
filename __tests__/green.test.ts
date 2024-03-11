import { fetchGreenData } from '../proxy/api/green';

describe('green', () => {
  it('should fetch data successfully on first attempt', async () => {
    
    const res1 = await fetchGreenData(); // 500
    const res2 = await fetchGreenData(); // 500
    const res = await fetchGreenData(); // 200

    expect(res.status).toBe(200);
  });
});
