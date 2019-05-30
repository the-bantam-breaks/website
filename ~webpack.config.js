require('babel-polyfill');
var path = require('path');
var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/index.js"
    ],
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000,
        hot: true
    },
    target: "node",
    // entry: {
    //     main: './src/index.js'
    //     // test: glob.sync('./test/**/*.test.js'),
    // },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ],
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
