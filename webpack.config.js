// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
const path = require('path');
const srcPath = path.join(__dirname, '/../src');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.module.loaders.push(
    {
    test: /\.(js|jsx)$/,
    include: srcPath,
    loader: 'eslint-loader'
    }, {
      test: /\.(scss|sass)$/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    }
  );
  return webpackConfig;
};
