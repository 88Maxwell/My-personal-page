const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const path = require("path");

module.exports = merge(baseConfig, {
    devtool: "eval-source-map",

    devServer: {
        stats: "errors-only",
        contentBase: path.join(process.cwd(), "/src"),
        open: true,
        port: "3000",
        proxy: {
            "*": "http://localhost:5000"
        }
    }
});
