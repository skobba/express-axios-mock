import { fetchGreenData } from '../bff/api/green';
import nock from 'nock';


describe('green', () => {
  nock('http://localhost:8002').get('/message').reply(200, { message: 'Message from blue mock' })

  it('should fetch data successfully on first attempt', async () => {
    const res = await fetchGreenData();
    expect(res.status).toBe(200);
  });
});

describe('green-retry', () => {
  nock('http://localhost:8002').get('/message').replyWithError('500');
  nock('http://localhost:8002').get('/message').replyWithError('500');
  nock('http://localhost:8002').get('/message').reply(200, { message: 'Message from blue mock' })

  it('should retry three times', async () => {

    const res = await fetchGreenData(); // 200

    expect(res.status).toBe(200);
    expect(res.config['axios-retry'].retryCount).toBe(2);
  });
});