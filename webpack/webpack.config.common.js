const path = require('path');
const webpack = require('webpack');
const reactLoadableTransformer = require('react-loadable-ts-transformer');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  
  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  
  module: {
    rules: [
    ],
  },
  
};
