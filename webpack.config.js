require('babel-loader');
require('@babel/preset-env')
require('core-js/stable');
require('regenerator-runtime/runtime');
// require('html-loader');
// require('css-loader');
// require('style-loader');
// require('webpack');
// require('webpack-cli');
// require('webpack-dev-server');
// require('webpack-merge');
// require('path');
// require('html-webpack-plugin');
const path = require('path');  

module.exports = {
  entry: {
    app: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      './index.js'   
    ],
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'tmm_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
            ]
          }
        }
      },
      // Angular rules + templates+styles  
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}; 