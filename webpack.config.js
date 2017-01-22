var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');

var config =
    {
        devtool: 'eval-source-map',
        cache: false,
        context: path.join(__dirname,"src"),
        entry:
        {
            consumerApp: "./index"
        },
        output: 
        {
            path: path.join(__dirname, "Server", "js"),
            filename: '[name].js',
            sourceMapFilename: '[file].map'
        },
        resolve:
        {
            modulesDirectories: ['node_modules']
        },
        module:
        {
            loaders:
            [
                { 
                    test: /\.js$/, 
                    exclude: /node_modules/, 
                    loader: 'babel'
                },
                {
                    test: /(\.jsx|\.js)$/,
                    loader: "eslint-loader",
                    exclude: /node_modules/
                }
            ]
        }
}

module.exports = config;