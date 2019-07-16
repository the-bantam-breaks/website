const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  mode: 'development',
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
            "ENV_AWS_REGION": JSON.stringify(process.env.ENV_AWS_REGION),
            "ENV_AWS_ACCESS_KEY_ID": JSON.stringify(process.env.ENV_AWS_ACCESS_KEY_ID),
            "ENV_AWS_SECRET_ACCESS_KEY": JSON.stringify(process.env.ENV_AWS_SECRET_ACCESS_KEY),
            "ENV_INSTAGRAM_USER_ID": JSON.stringify(process.env.ENV_INSTAGRAM_USER_ID),
            "ENV_INSTAGRAM_TOKEN": JSON.stringify(process.env.ENV_INSTAGRAM_TOKEN),
            "ENV_BOOOKING_SLACK_WEBHOOK_URL": JSON.stringify(process.env.ENV_BOOOKING_SLACK_WEBHOOK_URL),
            "ENV_BOOOKING_MAIL_ACCOUNT": JSON.stringify(process.env.ENV_BOOOKING_MAIL_ACCOUNT),
            "ENV_BOOOKING_MAIL_PASSWORD": JSON.stringify(process.env.ENV_BOOOKING_MAIL_PASWORD),
            "ENV_PG_USER": JSON.stringify(process.env.ENV_PG_USER),
            "ENV_PG_HOST": JSON.stringify(process.env.ENV_PG_HOST),
            "ENV_PG_PASSWORD": JSON.stringify(process.env.ENV_PG_PASSWORD),
            "ENV_PG_DATABASE": JSON.stringify(process.env.ENV_PG_DATABASE),
            "ENV_PG_PORT": JSON.stringify(process.env.ENV_PG_PORT)
        }
    })
  ]
}

module.exports = [browserConfig, serverConfig]
