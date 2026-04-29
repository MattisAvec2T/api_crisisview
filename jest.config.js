export default {
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {},
  coverageProvider: 'v8',
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage',
};