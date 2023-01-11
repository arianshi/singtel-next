const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.tsx'],
  },
  entry: './index',
  output: {
    filename: 'lib/index.js',
    library: ['shared-components'],
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.svg/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
  },
};
