const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin');


//const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['ts', 'js'] }) ];

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
              test: /\.[tj]s$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(woff(2)?|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
