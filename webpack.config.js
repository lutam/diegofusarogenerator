const path = require('path');
const webpack = require('webpack');


const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');


const devServerPlugins = [
  new HotModuleReplacementPlugin(),
];

module.exports = (env, argv) => {

  const isDevServer = process.argv && process.argv[1] && process.argv[1].indexOf('webpack-dev-server') !== -1;

  return {
  	entry: './src/js/entry.js',
  	output: {
  		filename: 'script.js',
  		path: path.resolve(__dirname, 'public')
  	},
  	module: {
        		rules: [
       			{
       				test: /\.s?css$/,
            			use: [
  	    				'style-loader',
              				'css-loader',
              				'postcss-loader',
              				'sass-loader',
    				].filter(Boolean),
          		}
      		]
  	},
  	optimization: {
      		minimizer: [new UglifyJsPlugin()],
  	},
    plugins: [
      ...(isDevServer ? devServerPlugins : []),
      new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
    ],
    devServer: {
        contentBase: false,
        hot: true,
        host: '127.0.0.1',
        port: 9004,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        disableHostCheck: true,
      },
    }
};
