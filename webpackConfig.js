var DeepMerge = require('deep-merge');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic

var defaultConfig = require('./webpackCore.config');
var argv = require('yargs').argv;

if(argv.prod === true) {
  console.log("Prod!!");
  
}else{
  defaultConfig.devtool = 'eval';
  defaultConfig.debug = true;  
}

function config(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});

var frontendConfig = config({
  entry: path.join(__dirname, 'js/app.js'),
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  }
});
var backendConfig = config({
  entry: path.join(__dirname, 'server.js'),
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },
  node: {
    __dirname: true,
    __filename: true
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false })
  ]
});

module.exports = {
  backend: backendConfig,
  frontend: frontendConfig
};