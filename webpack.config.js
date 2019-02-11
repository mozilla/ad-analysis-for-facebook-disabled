const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");

const path = require("path");
const webpack = require("webpack");

const inputSourceFolder = "src";
const outputDebugFolder = "build-debug";
const outputReleaseFolder = "build-release";

const getModuleRules = () => {
	return {
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
};

const getWatchOptions = () => {
	return {
		aggregateTimeout: 300,
		poll: 1000,
	};
};

const generateHtmlFiles = (folder, isProduction = false) => {
	const baseOptions = {
		template: `${folder}/${folder}.html`,
		filename: `${folder}/index.html`,
		inject: "head",
		chunks: [folder],
	};
	const minifyOptions = {
		collapseWhitespace: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
	};
	const options = {};
	if (isProduction) {
		Object.assign(options, baseOptions, minifyOptions);
	} else {
		Object.assign(options, baseOptions);
	}
	return new HtmlWebpackPlugin(options);
};

const copyAssetFiles = (folder, output, isProduction = false) => {
	const patterns = [{
		from: `${folder}/assets/`,
		to: path.resolve(__dirname, `${output}/${folder}/assets`),
	}];
	return new CopyWebpackPlugin(patterns);
};

const copyManifestJson = (output, isProduction = false) => {
	const patterns = [{
		from: "manifest.json",
		to: path.resolve(__dirname, `${output}`),
	}];
	return new CopyWebpackPlugin(patterns);
};

const generateEnvironmentVariables = (isProduction = false) => {
	const options = {
		NODE_ENV: isProduction ? "production" : "development",
		DEBUG: isProduction ? "false" : "true",
	};
	return new webpack.EnvironmentPlugin(options);
};

const lintStyleFiles = (isProduction = false) => {
	const options = {
		configFile: ".stylelintrc",
		context: inputSourceFolder,
		files: "**/*.less",
		syntax: "less",
	};
	return new StyleLintWebpackPlugin(options);
};

const getAliases = () => {
	return {
		background: path.resolve(__dirname, inputSourceFolder, "background"),
		common: path.resolve(__dirname, inputSourceFolder, "common"),
		toolbar: path.resolve(__dirname, inputSourceFolder, "toolbar"),
	};
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
	module: getModuleRules(),
	plugins: [
		generateHtmlFiles("toolbar"),
		copyAssetFiles("toolbar", outputDebugFolder),
		copyManifestJson(outputDebugFolder),
		generateEnvironmentVariables(false),
		lintStyleFiles(),
	],
	resolve: {
		alias: getAliases(),
	},
	devtool: "inline-source-map",
	watch: false,
	watchOptions: getWatchOptions(),
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
	module: getModuleRules(),
	plugins: [
		generateHtmlFiles("toolbar", true),
		copyAssetFiles("toolbar", outputReleaseFolder, true),
		copyManifestJson(outputReleaseFolder, true),
		generateEnvironmentVariables(true),
		lintStyleFiles(true),
	],
	resolve: {
		alias: getAliases(),
	},
}];
