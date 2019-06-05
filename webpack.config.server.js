const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    mode: 'production',
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
                "RETHINKDB_PORT": JSON.stringify(process.env.RETHINKDB_PORT)
            }
        }),
    ]
}
