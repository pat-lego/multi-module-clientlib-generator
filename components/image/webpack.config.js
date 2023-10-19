const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    stats: 'verbose',
    entry: {
        site: "./main.js"
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /.js$/,
                use: TerserPlugin.loader
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new MiniCssExtractPlugin(),
        new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    keep_fnames: true,
                },
                mangle: true,
                keep_fnames: true
            }
        })
    ],
};