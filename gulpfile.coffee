gulp = require 'gulp'
coffee = require 'gulp-coffee'
sourcemaps = require 'gulp-sourcemaps'
logger = require 'gulp-size'

watching = no
gulp.task 'default', ->
  coffeeFiles = ["#{__dirname}/src/**/*.coffee"]
  unless watching
    watching = yes
    gulp.watch coffeeFiles, gulp.series 'default'
  gulp.src coffeeFiles, since: gulp.lastRun 'default'
    .pipe sourcemaps.init()
      .pipe coffee()
    .pipe sourcemaps.write()
    .pipe gulp.dest "#{__dirname}/dist"
    .pipe logger title: 'Coffee', showFiles: yes
