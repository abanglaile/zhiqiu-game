const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const path = require("path")

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
}
