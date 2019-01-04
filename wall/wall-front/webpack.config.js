var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const root = path.resolve(__dirname, '');

module.exports = {
    context: __dirname,

    entry: './src/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

    output: {
        path: path.resolve('./base_static_files/bundles/'),
        filename: "[name].js",
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        // new UglifyJsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    //specify that we will be dealing with React code
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }]
            },
	    {
		test: /\.(eot|svg|ttf|woff|woff2)$/,
		loader: 'url-loader?limit=100000'
	    }
        ],
    },

    resolve: {
        modules: [
            path.resolve(root, 'node_modules')
        ]
    },
};
