/**
 * Created by jige on 2017/12/15.
 */
const path = require('path');                   // 导入路径包
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry:{
        main: "./src/js/index.js",
      add: "./src/js/add.js",
      reducer: "./src/js/reduce.js",
    },                        // 入口文件
    output: {                                   // 输出文件dist下的main.js
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', 'css']
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },
        {                                        // babel 配置
            test: /\.js$/,
            exclude: /node_modules/,            // 排除资源文件
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0', 'react'] //从右到左顺序执行
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html', //生成 html 文件的文件名。默认为 index.html.
            chunks: 'index.js',
        }),
        new ExtractTextPlugin('style.css'), //提取内联样式表到style.css文件
			new webpack.optimize.CommonsChunkPlugin({
				name:'common', // 注意不要.js后缀
				chunks:['main','add','reducer']
			}),
    ]
}
