const path = require('path')

module.exports = {
  entry: './example/webpack.js',
  output: {
    path: path.resolve('./example'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  }
}
