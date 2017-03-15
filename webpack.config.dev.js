// const path = require('path');
// const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
// 	context: __dirname,
//     devtool: 'inline-source-map',
//     entry: [
// 		'react-hot-loader/patch',
//         'webpack-dev-server/client?http://localhost:8002',
//         'webpack/hot/only-dev-server',
//         './src/index.web'
//     ],
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'app.bundle.js',
//         publicPath: '/assets/'
//     },
//     resolve: {
//         extensions: ['', '.scss', '.css', '.js', '.jsx', '.json', '.png', '.jpg'],
//         modulesDirectories: [
//             path.resolve(__dirname, './node_modules'),
//             path.resolve('./src')
//
//         ]
//     },
//     plugins: [
// 		new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         new ExtractTextPlugin('./bundle.css', { allChunks: true })
//     ],
//     module: {
// 		rules: [
// 			{
// 				test: /\.jsx?$/,
// 				exclude: [/native/,/\.rn\.js$/],
// 				use: ['babel-loader'],
// 				include: path.join(__dirname, 'src')
// 			}, {
// 				test: /(\.scss|\.css)$/,
// 				include: [/node_modules\/react-toolbox\//,/src\//],
// 				use: ExtractTextPlugin.extract('style-loader', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
// 			}, {
// 				test: /\.(jpe?g|png|gif|svg)$/i, include: /src\/img/,
// 				use: "file-loader"
// 			}
//
// 		]
//     },
//     postcss: [autoprefixer],
//     sassLoader: {
//       data: '@import "theme/_config.scss";',
//       includePaths: [path.resolve(__dirname, './src')]
//     },
// };
const path = require('path');
const webpack = require('webpack');

const settings = {
	entry: {
		bundle: [
			"react-hot-loader/patch",
			"./src/index.web"
		]
	},
	output: {
        filename: 'app.bundle.js',
        publicPath: '/assets/',
        path: path.join(__dirname, 'dist')
	},
	resolve: {
        extensions: [ '.scss', '.css', '.js', '.jsx', '.json', '.png', '.jpg'],
		modules: [
            path.resolve(__dirname, './node_modules'),
            path.resolve('./src')
		]
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [/native/, /\.rn\.js$/, /joi-browser/],
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
							sourceMap: true,
							importLoaders: 1,
							localIdentName: "[name]--[local]--[hash:base64:8]"
						}
					},
					"postcss-loader" // has separate config, see postcss.config.js nearby
				]
			},
		]
	},
	devServer: {
		contentBase: path.resolve("./"),
		publicPath: "http://localhost:8080/", // full URL is necessary for Hot Module Replacement if additional path will be added.
		compress: true,
		quiet: false,
		hot: true,
		historyApiFallback: true,
		inline: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
	],
};

module.exports = settings;
