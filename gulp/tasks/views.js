/**
 * views.js
 * @name - 'views'
 * @task - Copies views to destination
 */

const gulp = require('gulp');
const config = require('../config').views;

gulp.task('views', () =>
  gulp.src(config.index)
    .pipe(gulp.dest(config.dest))
);
