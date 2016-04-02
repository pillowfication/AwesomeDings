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
      {test: /\.scss$/, loader: 'style!css!sass'},
    ]
  }
};
