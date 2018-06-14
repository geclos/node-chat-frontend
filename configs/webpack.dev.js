var path = require('path')
var webpackMerge = require('webpack-merge')
var commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist')
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/hapi/*': {
        target: 'ws://localhost:3000',
        ws: true
      }
    }
  }
})
