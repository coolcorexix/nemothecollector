module.exports = (phase) => {
  const env = require('dotenv').config().parsed;
  console.log(env);
  return {
    env,
  };
};
