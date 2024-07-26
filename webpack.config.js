const TerserPlugin = require('terser-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const path = require('path');

module.exports = {
    entry           : {
        'levdwire'      : path.resolve(__dirname, 'src/index.umd.ts'),
        'levdwire.min'  : path.resolve(__dirname, 'src/index.umd.ts')
    },
    devtool         : 'inline-source-map',
    output          : {
        filename        : '[name].js',
        libraryTarget   : 'umd',
        library         : 'levdwire',
        umdNamedDefine  : true,
        path            : path.resolve(__dirname, 'dist/'),
    },
    module          : {
        rules      : [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve         : {
        extensions : ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins         : [
        new SourceMapDevToolPlugin({ filename: '[file].map' }),
    ],
    optimization    : {
        minimize  : true,
        minimizer : [
            new TerserPlugin({
                include: /\.min\.(css|js)$/,
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    target          : ['web', 'es5'],
    devServer       : {
        static      : {
            directory : path.join(__dirname, 'dist'),
        },
        compress    : true,
        port        : 9000,
    },
    performance     : {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};
