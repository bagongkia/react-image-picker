var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
    filename: 'react-image-picker.js'
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
        use: 'file-loader?name=/images/[name][hash].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8888
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Image Picker Demo',
      minify: {
          collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'react-image-picker.css',
      disable: !isProd,
      allChunks: true
    })
  ]
}