var gulp = require('gulp');
var nodemon = require('nodemon');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var DeepMerge = require('deep-merge');

var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic

var defaultConfig = require('./webpack.config');
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

function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('build', function(){
  webpack(frontendConfig)
  .run(function(err, status){
    if (err){
      console.log(err);
    }
    // console.log(status);
  });

  webpack(backendConfig)
  .run(function(err, status){
    if (err){
      console.log(err);
    }
    // console.log(status);
  });
})

gulp.task('frontend-watch', function() {
	// console.log(frontendConfig);
  	webpack(frontendConfig).watch(100, function(err, stats) {
	    onBuild()(err, stats);
	    nodemon.restart();
  	});
});

gulp.task('backend-watch', function() {
	// console.log(backendConfig);
	webpack(backendConfig).watch(100, function(err, stats) {
	    onBuild()(err, stats);
	    nodemon.restart();
  	});
});

gulp.task('run', ['backend-watch', 'frontend-watch'], function() {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!');
  });
});