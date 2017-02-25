const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [{
      test: /\.tag$/,
      exclude: /node_modules/,
      use: {
        loader: 'riot-tag-loader',
        options: {
          query: {
            type: 'es6', // transpile the riot tags using babel
            hot: true,
            debug: true
          }
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}