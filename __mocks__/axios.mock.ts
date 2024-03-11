const axiosMock: any = jest.createMockFromModule('axios');

axiosMock.create = jest.fn(() => axiosMock);

// Succeed every GET requests
//axiosMock.get = jest.fn(() => Promise.resolve({ status: 200, data: {} }));

// Succeed on third GET requests
axiosMock.get = jest.fn()
.mockImplementationOnce(() => Promise.resolve({ status: 500, data: {}}))
.mockImplementationOnce(() => Promise.resolve({ status: 500, data: {}}))
.mockImplementationOnce(() => Promise.resolve({ status: 200, data: {}}))

// Succseed on every POST request
axiosMock.post = jest.fn(() => Promise.resolve({ status: 200}));

export default axiosMock;