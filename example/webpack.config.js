'use strict';

var path = require('path');

module.exports = {
  entry: './example/webpack.js',
  output: {
    path: path.resolve('./example'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  }
};
