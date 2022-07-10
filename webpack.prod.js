const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'development',
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, 'demo')
    },
    module: {
        rules: [
        ]
    },
    plugins: [
    ]
})