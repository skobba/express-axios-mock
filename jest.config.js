const TEST = process.env.TEST || 'unit';
const SCOPE = process.env.SCOPE || 'all';
process.env.TZ = 'Europe/Oslo';

module.exports = {
    displayName: 'tests',
    testEnvironment: 'node',
    resetMocks: true,
    setupFiles: [],
    setupFilesAfterEnv: [],
    moduleNameMapper: {},
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 50,
        lines: 75,
        statements: 50
      }
    },
    globals: {
      __DEV__: true,
      'window': {}
    },
    roots: ["<rootDir>/"],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleDirectories: ["node_modules", "__mocks__"],
    moduleNameMapper: {},
    moduleFileExtensions: [
      'js',
      'jsx',
      'ts',
      'tsx',
      'json'
    ],
    testEnvironmentOptions: {
      url: 'http://localhost',
      resultsDir: './allure-results'
    },
    modulePaths: [
      'src'
    ],
    testTimeout: 40000,
  }
