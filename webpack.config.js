var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');


// Webpack Config
var webpackConfig = {
    entry: {
        'main': './src/app/main.ts'
    },

    output: {
        path: './dist'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true)
    ],

    module: {
        loaders: [
            // .ts files for TypeScript
            { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
            { test: /\.less$/, loaders: ['to-string-loader', 'css-loader', 'less-loader'] },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    }

};


// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,
    output: {
        path: './dist',
        publicPath: 'dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].js.map'
    },

    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },      
    },

    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    }
};

module.exports = webpackMerge(defaultConfig, webpackConfig);
