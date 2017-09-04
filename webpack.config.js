const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const config = {
	context: path.resolve('./src'),
	entry: {
		app: 'index.js',
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve('dist'),
		publicPath: './',
		filename: '[name].js'
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			path.resolve('src'),
			path.resolve('node_modules')
		]
	},

	module: {
		rules: [{
			test: /\.js$ || \.jsx$/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react']
				}
			}]
		}]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),

		// new cleanWebpackPlugin(['dist']),

		new webpack.HotModuleReplacementPlugin()
	],

	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve('./'),
		port: 8080,
		hot: true,
	}
};

module.exports = config;
