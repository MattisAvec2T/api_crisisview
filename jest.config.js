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
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage',
};