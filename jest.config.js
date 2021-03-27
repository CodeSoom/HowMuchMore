module.exports = {
  verbose: true,
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup',
  ],
};
