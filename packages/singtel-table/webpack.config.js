const path = require('path');

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
    ],
  },
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
