var gulp = require("gulp");
var clean = require("gulp-clean");
var minify = require("gulp-minify");
var concat = require("gulp-concat");

var files = [
    'scripts/lib/google-analytics/google-analytics.js',
    'scripts/app/app.config.js',
    'scripts/app/app.filters.js',
    'scripts/app/app.components.js',
    'scripts/app/app.views.js',
    'scripts/app/app.routes.js',
    'scripts/app/app.js',
    'scripts/app/**/*.js'
];

gulp.task("default", function() {
  gulp.src(files)
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest('scripts/'));
});