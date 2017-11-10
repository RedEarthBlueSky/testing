// babel-loader /\.js$/, every JavaScript file will be processed by babel during bundling;
// declare jquery an external module, include it by hand so browsers chache the library

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname.join('/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
};
