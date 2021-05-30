const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.tsx?$/,
      //   loader: 'babel-loader',
      // },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      Models: path.resolve(__dirname, 'src/models/'),
      Components: path.resolve(__dirname, 'src/components/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
};
