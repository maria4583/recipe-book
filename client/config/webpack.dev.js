import { merge } from 'webpack-merge'
import common from './webpack.common.js'

import DashboardPlugin from 'webpack-dashboard/plugin/index.js'

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8000'
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/
            }
        ]
    },
    plugins: [
        new DashboardPlugin(),
    ]
})
