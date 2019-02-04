const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");

const path = require("path");
const webpack = require("webpack");

const inputSourceFolder = "src";
const outputDebugFolder = "build-debug";
const outputReleaseFolder = "build-release";

const moduleRules = {
	rules: [{
		test: /\.js$/,
		use: [
			"babel-loader",
			"eslint-loader"
		],
	}, {
		test: /\.less$/,
		use: [
			"style-loader",
			"css-loader",
			"less-loader",
		],
	}, {
		test: /\.html$/,
		use: [
			"raw-loader",
		],
	}, {
		test: /manifest\.json/,
		use: [
			"raw-loader",
		],
	}],
};

const watchOptions = {
	aggregateTimeout: 300,
	poll: 1000,
};

const generateHtmlFiles = (folder, isProduction = false) => {
	const minifyHtml = (options) => {
		return Object.assign(options, {
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
			},
		});
	};
	const options = {
		template: `${folder}/${folder}.html`,
		filename: `${folder}/index.html`,
		inject: "head",
		chunks: [folder],
	};
	return new HtmlWebpackPlugin(isProduction ? minifyHtml(options) : options);
};

const copyAssetFiles = (folder, output, isProduction = false) => {
	return new CopyWebpackPlugin([{
		from: `${folder}/assets/`,
		to: path.resolve(__dirname, `${output}/${folder}/assets`),
	}]);
};

const copyManifestJson = (output, isProduction = false) => {
	return new CopyWebpackPlugin([{
		from: "manifest.json",
		to: path.resolve(__dirname, `${output}`),
	}]);
};

const generateEnvironmentVariables = (isProduction = false) => {
	return new webpack.EnvironmentPlugin({
		NODE_ENV: isProduction ? "production" : "development",
		DEBUG: isProduction ? "false" : "true",
	});
};

const lintStyleFiles = (isProduction = false) => {
	return new StyleLintWebpackPlugin({
		configFile: ".stylelintrc",
		context: inputSourceFolder,
		files: "**/*.less",
		syntax: "less",
	});
};

module.exports = [{
	name: "debug",
	mode: "development",
	context: path.resolve(__dirname, inputSourceFolder),
	entry: {
		"toolbar": "./toolbar/toolbar.js",
		"background": "./background/background.js",
	},
	output: {
		path: path.resolve(__dirname, outputDebugFolder),
		filename: "[name]/bundle.js",
	},
	module: moduleRules,
	plugins: [
		generateHtmlFiles("toolbar"),
		copyAssetFiles("toolbar", outputDebugFolder),
		copyManifestJson(outputDebugFolder),
		generateEnvironmentVariables(false),
		lintStyleFiles(),
	],
	devtool: "inline-source-map",
	watch: false,
	watchOptions: watchOptions,
}, {
	name: "release",
	mode: "production",
	context: path.resolve(__dirname, inputSourceFolder),
	entry: {
		"toolbar": "./toolbar/toolbar.js",
		"background": "./background/background.js",
	},
	output: {
		path: path.resolve(__dirname, outputReleaseFolder),
		filename: "[name]/bundle.js",
	},
	module: moduleRules,
	plugins: [
		generateHtmlFiles("toolbar", true),
		copyAssetFiles("toolbar", outputReleaseFolder, true),
		copyManifestJson(outputReleaseFolder, true),
		generateEnvironmentVariables(true),
		lintStyleFiles(true),
	],
}];
