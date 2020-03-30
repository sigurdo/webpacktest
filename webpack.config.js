const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        // new GenerateSW()
        new InjectManifest({
            swSrc: './src/sw.js',
            swDest: 'service-worker.js'
        })
    ]
}