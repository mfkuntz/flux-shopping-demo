var gulp = require('gulp');
var nodemon = require('nodemon');
var webpack = require('webpack');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

var webpackConfig = require('./webpackConfig');



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


gulp.task('css', function(){

  var sass = require('gulp-sass');

  gulp.src('./css/**/*.scss', {base: '.'})
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function(path){
        path.dirname = ""
    }))
    .pipe(concat('master.css'))
    .pipe(gulp.dest('./static/css'));
});




gulp.task('build', ['css'], function(){
  webpack(webpackConfig.frontend)
  .run(function(err, status){
    if (err){
      console.log(err);
    }
    // console.log(status);
  });

  webpack(webpackConfig.backend)
  .run(function(err, status){
    if (err){
      console.log(err);
    }
    // console.log(status);
  });
})

gulp.task('frontend-watch', function() {
	// console.log(frontendConfig);
  	webpack(webpackConfig.frontend).watch(100, function(err, stats) {
	    onBuild()(err, stats);
	    nodemon.restart();
  	});
});

gulp.task('backend-watch', function() {
	// console.log(backendConfig);
	webpack(webpackConfig.backend).watch(100, function(err, stats) {
	    onBuild()(err, stats);
	    nodemon.restart();
  	});
});

gulp.task('run', ['css', 'backend-watch', 'frontend-watch'], function() {
  var path = require('path');
  
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