const Dotenv = require('dotenv-webpack');
const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: [
        '@babel/polyfill',
        'webpack/hot/poll?1000',
        './src/server'
    ],
    output: {
        path: path.join(__dirname, '.build'),
        filename: 'server.js'
    },
    watch: true,
    target: 'node',
    devtool: 'source-map',
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    module: {
        rules: [{
            test: /\.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new Dotenv({
            path: './.env'
        }),
        new StartServerPlugin({
            name: 'server.js',
            // nodeArgs: ['--inspect'], // allow debugging
            args: []
        }),
        // new StartServerPlugin('server.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server'),
                "RETHINKDB_HOST": JSON.stringify(process.env.RETHINKDB_HOST),
                "RETHINKDB_PORT": JSON.stringify(process.env.RETHINKDB_PORT),
                "ENV_INSTAGRAM_USER_ID": JSON.stringify(process.env.ENV_INSTAGRAM_USER_ID),
                "ENV_INSTAGRAM_TOKEN": JSON.stringify(process.env.ENV_INSTAGRAM_TOKEN)
            }
        }),
    ]
}
