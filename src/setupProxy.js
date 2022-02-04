const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.metaweather.com/',
      // target: 'http://10.10.1.250:2128/',
      changeOrigin: true,
    })
  );
};