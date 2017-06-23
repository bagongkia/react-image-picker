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
var entry = isProd ? './src/react-image-picker.js' : './src/index.js'

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './index.js',
    library: 'ReactImagePicker',
    libraryTarget: 'umd'
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
    contentBase: path.join(__dirname, 'dist')
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
      filename: 'index.css',
      disable: !isProd,
      allChunks: true
    })
  ]
}