
# Mocking
This approach (1) is mocking axios "axios.mock.ts", but it might be better to mock the actual function call "fetchData()" in "api.ts".

If I mock axios, I also have to mock axios-retries. But then there is no point testing the retries, because they are then mocked...

What is possible to mock in this app:
1. __axios module__ (Do I have to mock axios-retries also?)
2. __createAxiosInstance()__ (Do I have to mock axios-retries also?)
3. __fetchData()__ (How can this be done?)

The 3. approach looks like the only way to acually test the setup of axios-retries in createAxiosInstance().

# Structure
```
.
├── README.md
├── __mocks__
│   └── axios.mock.ts           <-- Setup to succeed on 3 request
├── __tests__
│   └── fetchData.test.test.ts  <-- Since axios-retry is commented out 
├── jest.config.js                  this test just run 3 request in a
├── package-lock.json               row to simulate the retries.
├── package.json
├── src
│   ├── api.ts
│   ├── createAxiosInstance.ts  <-- Setup axios (commented out axis-retry)
│   └── index.ts
└── tsconfig.json
```
