const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [
		'./src/index.web'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js',
		publicPath: '/assets/'
	},
	resolve: {
		extensions: ['', '.scss', '.css', '.js', '.jsx', '.json','.png','.jpg'],
		modulesDirectories: [
			path.resolve(__dirname, './node_modules'),
			path.resolve('./src')
		]
	},

	postcss: [autoprefixer],
	sassLoader: {
		data: '@import "theme/_config.scss";',
		includePaths: [path.resolve(__dirname, './src')]
	},
	plugins: [
		new ExtractTextPlugin('./bundle.css', { allChunks: true }),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: true,
			compress: {
				drop_console: true
			},
			mangle: {
				except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/native/,/\.rn\.js$/],
				use: ['babel-loader'],
				include: path.join(__dirname, 'src')
			}, {
				test: /(\.scss|\.css)$/,
				include: [/node_modules\/react-toolbox\//,/src\//],
				use: ExtractTextPlugin.extract('style-loader', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
			}, {
				test: /\.(jpe?g|png|gif|svg)$/i, include: /src\/img/,
				use: "file-loader"
			}

		]
	}
};
