const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: [path.resolve(__dirname, 'src/index.js')],
  externals: {
    gon: 'gon'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'application.js',
    chunkFilename: '[name].js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /node_modules/,
          name: 'vendor'
        }
      }
    }
  }
  // plugins: [
  // new webpack.ProvidePlugin({
  //   $: 'jquery',
  //   jQuery: 'jquery',
  //   'window.jQuery': 'jquery',
  // }),
  // ],
};
