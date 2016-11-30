const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './main',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}