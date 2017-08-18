const path = require('path');
const url = require('url');

let production = process.env.NODE_ENV === 'production';

module.exports = {
  backgroundColor: '#FBFBFB',
  titleBarStyle: 'hidden-inset',
  url: production ? url.format({
    pathname: path.resolve(__dirname, '..', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
  }) : 'http://localhost:8080',
};
