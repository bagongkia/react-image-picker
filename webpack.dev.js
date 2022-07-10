const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require("path");
const webpack = require('webpack')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, "./demo")
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BABEL_ENV': JSON.stringify('development')
        })
    ]
})