const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    devtool: 'cheap-eval-source-map',

    output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].js'
    }

});
