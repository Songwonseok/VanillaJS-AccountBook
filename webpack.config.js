const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: ['./client/src/scss/app.scss','./client/src/js/app.js'],
    },
    output: {
        path: path.resolve(__dirname, 'server/public/dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        alias: {
            '@models': path.resolve(__dirname, 'client/src/js/models'),
            '@views': path.resolve(__dirname, 'client/src/js/views'),
            '@utils': path.resolve(__dirname, 'client/src/js/utils'),
            '@interface': path.resolve(__dirname, 'client/src/js/interface')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },plugins: [
        new CleanWebpackPlugin(),
    ]
    
}