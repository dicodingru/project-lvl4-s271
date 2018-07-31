const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    application: [path.resolve(__dirname, 'src/index.js')],
    vendor: [path.resolve(__dirname, 'src/vendor.js')],
  },
  externals: {
    gon: 'gon',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // plugins: [
  // new webpack.ProvidePlugin({
  //   $: 'jquery',
  //   jQuery: 'jquery',
  //   'window.jQuery': 'jquery',
  // }),
  // ],
};
