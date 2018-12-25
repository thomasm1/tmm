require('babel-loader');
const path = require('path');  

module.exports = {
  entry: {
    app: [ 
      './public/src/js/app.js' 
    ],
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'tmm_bundle.js',
  }
/*  ,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
  */
};