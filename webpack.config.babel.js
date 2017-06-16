var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'index.tsx',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: ['babel-loader', 'ts-loader'], exclude: '/node_modules/' },
      { test: /\.(less|css)$/, use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            sourceMap: true,
          }
        },
        'less-loader'
      ]}
    ],
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    proxy: {
      '/api/**': {
        target: 'http://localhost:4010',
        pathRewrite: {'^/api' : ''},
        secure: false,
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.less'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig,
  ],
}
