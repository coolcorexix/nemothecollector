module.exports = (phase) => {
  const env = require('dotenv').config().parsed;
  return {
    env,
  };
};
