var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./app/main",
  
  output: { 
      path: __dirname,
      filename: "./dist/bundle.js"
  } ,
  
  //delete this entry if you do not want source maps for debugging 
  devtool: 'source-map',
  
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  
  module: {
      loaders: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
          }
      ]
  },
  
   plugins: [
     new webpack.optimize.UglifyJsPlugin(),
     
     new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]

};