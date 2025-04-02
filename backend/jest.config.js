const config = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/config/',
    '/migrations/'
  ],
  // globalSetup: './src/tests/setup/global.setup.js',
  setupFilesAfterEnv: ['./src/tests/setup/jest.setup.js'],
  globalTeardown: './src/tests/setup/global.teardown.js',
  testTimeout: 10000,
  moduleFileExtensions: ['js'],
  transform: {}
}

module.exports = config
