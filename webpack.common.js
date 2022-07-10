const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: './src/demo.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        esModule: false
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Image Picker Demo',
            minify: false,
            hash: true,
            template: './src/demo.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}