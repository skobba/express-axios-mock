import { fetchBlueData } from '../proxy/api/blue';
import nock from 'nock';


describe('blue', () => {
  nock('http://localhost:8001').get('/message').reply(200, { message: 'Message from blue mock' })

  it('should fetch data successfully on first attempt', async () => {
    const res = await fetchBlueData();
    expect(res.status).toBe(200);
  });
});

describe('blue-retry', () => {
  nock('http://localhost:8001').get('/message').replyWithError('500');
  nock('http://localhost:8001').get('/message').replyWithError('500');
  nock('http://localhost:8001').get('/message').reply(200, { message: 'Message from blue mock' })

  it('should retry three times', async () => {

    const res = await fetchBlueData(); // 200

    expect(res.status).toBe(200);
    expect(res.config['axios-retry'].retries).toBe(3);
  });
});