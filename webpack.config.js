var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: [
    "babel-polyfill",
    './src/server/index.js'
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  },
  externals: nodeModules,
  plugins: [
    // new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install({environment: "node"});',
      raw: false,
      entryOnly: true
    })
  ],
  // devtool: 'source-map',
  // plugins: [
  //   new HotModuleReplacementPlugin()
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
