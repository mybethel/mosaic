module.exports = {
  plugins: [
    require('postcss-discard-comments')({ removeAll: true }),
    require('postcss-cssnext')(),
  ],
};
