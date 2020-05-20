const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: "/public/"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 80,
        publicPath: "https://mastermind.test/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};