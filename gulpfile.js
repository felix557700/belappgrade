var gulp = require('gulp')
var webserver = require('gulp-webserver')
var execSync = require('child_process').execSync;
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var stylus = require('gulp-stylus')
var sourcemaps = require('gulp-sourcemaps')
var util = require('gulp-util')
var cssnano = require('gulp-cssnano')
var del = require('del')
var runsequence = require('run-sequence')


// for production: gulp build --env=production
var env = util.env.env || 'development'

gulp.task('clean', function () {
    return del('./dest')
})

gulp.task('html', function () {
    return gulp.src(['./src/**/*.html', '!./src/**/*.tag.html'])
        .pipe(gulp.dest('./dest'))
})

gulp.task('css', function () {
    return gulp.src(['./src/**/*.styl'])
        .pipe(env === 'production' ? util.noop() : sourcemaps.init())
        .pipe(stylus())
        .pipe(env === 'production' ? util.noop() : sourcemaps.write())
        .pipe(concat('style.css'))
        .pipe(autoprefixer('last 3 versions'))

        .pipe(env === 'production' ? cssnano() : util.noop())

        .pipe(gulp.dest('./dest'))
})

gulp.task('assets', function () {
    gulp.src(['./src/assets/**/*'])
        .pipe(gulp.dest('./dest/assets/'))
})

gulp.task('rollup', function () {
    if (env === 'production')
        execSync('npm run rollup:production')
    else
        execSync('npm run rollup')
})

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

gulp.task('build', function () {
    runsequence('clean', ['html', 'css', 'assets', 'rollup'])
})

gulp.task('default', function () {
    runsequence('clean', ['html', 'css', 'assets', 'rollup'], 'server', 'watch')
})