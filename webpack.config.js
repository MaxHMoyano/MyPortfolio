const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
    open: 'chrome',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
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
      Routes: path.resolve(__dirname, 'src/routes/'),
      Theme: path.resolve(__dirname, 'src/theme/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
};
