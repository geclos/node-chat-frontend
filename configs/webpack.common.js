var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require("mini-css-extract-plugin")

var __DEV__ = !process.argv.includes('--release')
var GLOBALS = {
  __DEV__: __DEV__
}

module.exports = {
  entry: {
    'app': './src/index.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['flow', 'env', 'react'],
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
        exclude: /node_modules/,
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ]
}
