import paths from './paths.js'
import webpack from 'webpack'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    entry: ['@babel/polyfill', paths.src + '/index.js'],
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                resolve: {
                    fullySpecified: false
                }
            },
            { test: /\.(png|svg|jpg|gif)&/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new HtmlWebpackPlugin({
            template: paths.public + '/index.html',
            favicon: paths.public + '/favicon.ico',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: 'assets'
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': paths.src
        },
        extensions: ['.js', '.jsx', '.json']
    }
}
