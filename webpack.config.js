const Dotenv = require('dotenv-webpack');
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const browserConfig = {
  mode: 'development',
  entry: './src/browser/index.js',
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
  mode: 'development',
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
            "RETHINKDB_HOST": JSON.stringify(process.env.RETHINKDB_HOST),
            "RETHINKDB_PORT": JSON.stringify(process.env.RETHINKDB_PORT)
        }
    })
  ]
}

module.exports = [browserConfig, serverConfig]
