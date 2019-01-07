//require('babel-loader');
const path = require('path');  

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './public/src/js/app.js' 
    ],
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'tmm_bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    }]
  }
}
 