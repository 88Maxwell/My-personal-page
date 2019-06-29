const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        src: path.join(process.cwd(), "/src/js/index.js")
    },

    module: {
        rules: [
            //JS/JSX LOADER
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

            //SASS/CSS LOADER
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.(jpe?g|jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    // Images larger than 10 KB won’t be inlined
                    limit: 10 * 1024
                }
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: "image-webpack-loader",
                // Specify enforce: 'pre' to apply the loader
                // before url-loader/svg-url-loader
                // and not duplicate it in rules with them
                enforce: "pre"
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].bundle.[chunkhash].css"),
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), "/src/index.html")
        }),
        new webpack.EnvironmentPlugin(["NODE_ENV"])
    ],

    resolve: {
        extensions: [".js"]
    }
};
