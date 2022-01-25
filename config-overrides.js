module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    ...config.resolve.alias,
    '@mui/styled-engine': '@mui/styled-engine-sc',
  };
  return config;
}