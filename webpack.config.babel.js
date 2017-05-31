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
    inline: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.less'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig],
}
