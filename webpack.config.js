var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
  entry: "./app/main",
  
  output: { 
      path: path.resolve('dist/'),//__dirname,
      filename: "bundle.js" //./dist/bundle.js"
  } ,
  
    
  //
  /*
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
  */
  
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
     
     //why do we need this? we can just do a webpack -p 
     //new webpack.optimize.UglifyJsPlugin(),
     
     new HtmlWebpackPlugin({
      filename:'index.html',
      template: 'index-template.html'
    })
  ]

};