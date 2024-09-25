var path = require("path")

module.exports = {
	mode: "production",
	entry: "./src/IMBot.jsx",
	output: {
		path: path.resolve("build"),
		filename: "index.js",
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react"]
				}
			},
			{
				test: /\.svg$/,
				use: 'svg-loader'
			},
			{
				test: /\.(scss|sass)$/, // Include both .scss and .sass files
				use: [
					'style-loader', // Adds CSS to the DOM (optional for development)
					'css-loader', // Translates CSS into CommonJS
					'sass-loader' // Compiles SCSS into CSS
				]
			}
		]
	},
	externals: {
		react: "react"
	}
};