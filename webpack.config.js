/*Here we are exporting object from this file. It has simple properties
And more complicated, some properties are objects, and there is 
One (module) which is and object, which contains an array(loaders) which has
Another object where we can find another nested properties: test, exclude etc.

path -  directory where will be stored final output file- called bundle.js


publicPath - for webpack dev server about generating url?(something like that)


test - we are testing code if it is JSX or JS

exclude -  we do not work with node modules or bower

loader  - babel

What are presets? We are giving two keys in presets array here. What is it?


in package.json  -  "start": "webpack-dev-server" script which automatically runs webpack cos tam cos tam
*/


module.exports = {
	entry: "./src/js/main.js",
	output: {
		path: './dist',
		filename: "bundle.js",
		publicPath: '/'
	},
	devServer: {
		inline: true,
		contentBase: './dist',
	},
	module: {
		loaders: [

			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};