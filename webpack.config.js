const path = require('path');

module.exports = {
  entry: {
    app: [
    
      './src/js/index.js' 
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tmm_bundle.js',
  }  
  /*,
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    }]
  }*/
}
