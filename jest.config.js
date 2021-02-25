const config = require('kcd-scripts/jest');

module.exports = {
  ...config,
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 90,
      statements: 90,
    },
  },
};
