const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
    output: {
        path: path.join(process.cwd(), '/dist'),
        filename: '[name].bundle.[chunkhash].js'
    },
    devtool: "eval",
    plugins: [
        // Minify JS
        new UglifyJsPlugin({
            test: /\.js$/,
            exclude: /node_modules/,
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
});