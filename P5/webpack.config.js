var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
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
        contentBase: __dirname + '/dist',
        port: 8080,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};