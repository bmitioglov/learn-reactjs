const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge.merge(common, {
  name: 'client',
  target: 'web',
  
  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client/client.js',
  ].filter(Boolean),
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {test: /\.(js)$/, use: 'babel-loader'},
      // {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(gif|svg|jpg|png)$/, use: 'file-loader'},
      {test: /\.jsx?$/, resolve: { extensions: ['.js', '.jsx'] }, use: 'babel-loader'},
    ],
  },
  
  plugins: [
    !isDevMod &&
    new CleanWebpackPlugin('./public', {
      root: path.resolve(__dirname, '../'),
    }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    /**
     * This plugin extract CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
     */
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ].filter(Boolean),
});
