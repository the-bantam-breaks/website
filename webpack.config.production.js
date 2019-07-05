const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  mode: 'production',
  entry: './src/browser/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

const serverConfig = {
  mode: 'production',
  entry: [
      '@babel/polyfill',
      './src/server/index.js'
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new Dotenv({
        path: './.env'
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    new webpack.DefinePlugin({
        "process.env": {
            "BUILD_TARGET": JSON.stringify('server'),
            "ENV_INSTAGRAM_USER_ID": JSON.stringify(process.env.ENV_INSTAGRAM_USER_ID),
            "ENV_INSTAGRAM_TOKEN": JSON.stringify(process.env.ENV_INSTAGRAM_TOKEN)
        }
    })
  ]
}

module.exports = [browserConfig, serverConfig]
