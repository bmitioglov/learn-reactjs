const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge.merge(common, {
  mode: 'development',
  name: 'server',
  target: 'node',
  entry: './src/server/server.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   include: /src/,
      //   use: [
      //     {
      //       loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]-[hash:5]',
      //       },
      //     },
      //   ],
      // },
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(gif|svg|jpg|png)$/, use: 'file-loader'},
      {test: /\.jsx?$/, resolve: { extensions: ['.js', '.jsx'] }, use: 'babel-loader'},
    ],
  },
});
