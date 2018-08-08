const path = require('path');

module.exports = {
  entry: {
    app: [
    
      './src/js/app.js' 
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tmm_bundle_july-4.js',
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
