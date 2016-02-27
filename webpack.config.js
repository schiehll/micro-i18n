var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    'micro-i18n': [
      './index'
    ]
  },
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
    library: 'i18n',
    libraryTarget: 'umd'
  },
  
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel'
      }
    ]
  }
}
