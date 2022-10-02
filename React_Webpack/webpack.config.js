const path = require('path');
const outputPath = path.join(__dirname, '/dist');
const MiniCssExtractCSSPlugin = require('mini-css-extract-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {

    mode: 'development',

    entry: "./src/index.js",

    output: {
        path: outputPath,
        filename: 'index.bundle.js',
        publicPath: "auto"
    },

    devServer: {
        static: outputPath
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractCSSPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new MiniCssExtractCSSPlugin(),
        new ModuleFederationPlugin({
            remotes: {
                angular1:"angularMfe1@http://localhost:4100/remoteEntry.js",
                angular2:"angularMfe2@http://localhost:4200/remoteEntry.js",
            },
            exposes: {
            },
            shared: {

            }
        }),
    ]

}
