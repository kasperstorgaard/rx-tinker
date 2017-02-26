const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      exclude: /node_modules/,
      use: {
        loader: 'vue-loader'
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    }]
  }
}