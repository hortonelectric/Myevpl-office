const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
    devtool: 'inline-source-map',
    entry: [
		'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8002', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.web'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.jsx', '.json', '.png', '.jpg'],
        modulesDirectories: [
            path.resolve(__dirname, './node_modules'),
            path.resolve('./src')

        ]
    },
    plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('./bundle.css', { allChunks: true })
    ],
    module: {
        preLoaders: [
            { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
        ],
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: [/native/,/\.rn\.js$/],
              loaders: ['babel'],
              include: path.join(__dirname, 'src')
            }, {
                test: /(\.scss|\.css)$/,
                include: [/node_modules\/react-toolbox\//, /src\//],
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                include: /src\/img/,
                loaders: [
                  'file-loader'
                ]
            }
        ]
    },
    postcss: [autoprefixer],
    sassLoader: {
      data: '@import "theme/_config.scss";',
      includePaths: [path.resolve(__dirname, './src')]
    },
};
