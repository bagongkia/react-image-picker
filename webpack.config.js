var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

var isProd = process.env.NODE_ENV === 'production'
var scssDev = ['style-loader', 'css-loader', 'sass-loader']
var scssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: './'
})
var scssConfig = isProd ? scssProd : scssDev

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: scssConfig
      }, 
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: 'babel-loader'
      }, 
      {
        test: /\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: 'file-loader?name=/img/[name][hash].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
}