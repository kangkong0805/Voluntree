const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://15.164.96.226:3001',
            changeOrigin: true,
        })
    );
};