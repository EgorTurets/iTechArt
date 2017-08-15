var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        // "../../client/index.js?http://localhost:8080/",
        'webpack/hot/only-dev-server',
        './js/App.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: ['react-hot-loader', 'babel-loader']
        }]
    },
    resolve: {
        extensions: [/*"",*/ ".js", ".jsx"]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname,
        port: 8080,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};