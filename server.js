const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
	historyApiFallback: true,
	hot: true,
	inline: true,
	progress: true,
	contentBase: './app',
	stats: {
		colors: true
	}
});

config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

server.listen(8080, "localhost", function(err) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:8080...');
});