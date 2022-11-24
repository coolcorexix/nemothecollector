const withTM = require('next-transpile-modules')([
  'react-dnd',
  'dnd-core',
  '@react-dnd/invariant',
  '@react-dnd/asap',
  '@react-dnd/shallowequal',
  'react-dnd-html5-backend',
]);

module.exports = withTM((phase) => {
  const env = require('dotenv').config().parsed;
  return {
    env,
  };
});
