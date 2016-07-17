const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	// 入口文件
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/index.js') // 定义入口文件
	],
	// 出口，定义打包输出的文件；包括路径，文件名，还可能有运行时的访问路径（publicPath）参数
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	// 定义能够被打包的文件，文件后缀名
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: "source-map", //便于调试。
	// webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader
	module: {
		loaders: [{
			test: /\.js|jsx$/, // 检测哪些文件需要此loader，是一个正则表达式，用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
			exclude: /(node_modules|bower_components)/,
			loaders: ['babel'] // 加载模块 "babel" 是 "babel-loader" 的缩写
		}, {
			// 处理样式文件
			test: /(\.css|\.scss)$/,
			loaders: ["style", "css?sourceMap", "sass?sourceMap"]
		}, {
			// 处理图片文件
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'url?name=img/[hash:8].[name].[ext]',
				'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
			]
		}]
	},
	// 定义一些额外的插件
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new OpenBrowserPlugin({
			url: 'http://localhost:8080/'
		})
	]
};
module.exports = config;