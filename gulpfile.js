var gulp = require('gulp')
var webserver = require('gulp-webserver')
var shell = require('gulp-shell')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var stylus = require('gulp-stylus')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('html', function () {
    return gulp.src(['./src/**/*.html', '!./src/**/*.tag.html'])
        .pipe(gulp.dest('./dest'))
})

gulp.task('css', function () {
    return gulp.src(['./src/**/*.styl'])
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(concat('style.css'))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('./dest'))
})

gulp.task('assets', function () {
    gulp.src(['./src/assets/**/*'])
        .pipe(gulp.dest('./dest/assets/'))
})

gulp.task('rollup', shell.task(['rollup -c']))

gulp.task('server', function () {
    gulp.src(['./dest', './node_modules'])
        .pipe(webserver({
            livereload: true,
            open: true
        }))
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html', './src/**/*.tag', './src/**/*.js', './src/**/*.styl'], ['html', 'css', 'rollup'])
})

gulp.task('default', ['html', 'css', 'assets', 'rollup', 'server', 'watch'])