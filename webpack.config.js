const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'development' ? false : true;

module.exports = {
    // mode: 'production',  //生产模式
    // mode: 'development',    //开发模式
    mode: isProd ? 'production' : 'development',
    entry: {
        index: './src/js/index.js',
        strict: './src/js/strict.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test:/\.css$/,    //表示匹配规则，是一个正则表达式
                use:[
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                ]
            },
            {
                test:/\.less$/,    //表示匹配规则，是一个正则表达式
                use:[
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|svg)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            esModule: false,  //file-loader和 html-withimg-loader 冲突了 设为false即可
                            name: "img/[name].[ext]",
                            limit: isProd ? 8192 : 100, //
                            publicPath: "./"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
                title:'Development',
                filename: "index.html",
                template: './src/index.html',
                chunks: ['index'],
            }),
        new HtmlWebpackPlugin(
            {
                title:'Development',
                filename: "strict.html",
                template: './src/strict.html',
                chunks: ['strict'],
            }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    devtool: isProd ? false : 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        // contentBase: path.join(__dirname, 'dist'),
        compress: isProd,
        port: 8080,
    },
};