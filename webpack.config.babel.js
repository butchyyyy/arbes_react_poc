import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'index.tsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: ['babel-loader', 'ts-loader'], exclude: '/node_modules/' },
    ],
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    HtmlWebpackPluginConfig],
}
