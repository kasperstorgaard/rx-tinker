const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      use: ['html-loader']
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { modules: true }
        }
      ]
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}