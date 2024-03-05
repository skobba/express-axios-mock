module.exports = {
    "roots": [
      "<rootDir>/"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "moduleDirectories": ["node_modules", "__mocks__"],
    "moduleNameMapper": {
      "^axios$": "<rootDir>/__mocks__/axios.mock.ts"
    }
  }
