const gulp = require('gulp');
const html2js = require('gulp-ng-html2js');
const bowerFiles = require('main-bower-files');
const concat = require('gulp-concat');
const filesort = require('gulp-angular-filesort');
const plumber = require('gulp-plumber');
const filter = require('gulp-filter');
const sass = require('gulp-sass');
const haml = require('gulp-haml');
const maps = require('gulp-sourcemaps');
const glob = require('gulp-sass-glob');
var runSequence = require('gulp-run-sequence');

const {paths} = require('./config');

const buildIndex = () =>
  gulp.src(paths.index)
    .pipe(haml())
    .pipe(
      gulp.dest(paths.build)
    );

const buildTemplates = () =>
    gulp.src(paths.templates)
        .pipe(plumber())
        .pipe(haml())
        .pipe(
            html2js({
                moduleName: 'templates',
                declareModule: true
            })
        )
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(paths.build));

const buildVendor = () =>
    gulp.src(bowerFiles())
        .pipe(plumber())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(paths.build));

const buildApp = () =>
    gulp.src(paths.app)
        .pipe(plumber())
        .pipe(maps.init())
        .pipe(filesort())
        .pipe(concat('bundle.js'))
        .pipe(maps.write())
        .pipe(gulp.dest(paths.build));

const buildStyles = () =>
    gulp.src(paths.style)
        .pipe(plumber())
        .pipe(maps.init())
        .pipe(glob())
        .pipe(sass())
        .pipe(maps.write())
        .pipe(gulp.dest(paths.build));

const build = (cb) =>
    runSequence(['build:index', 'build:libs', 'build:templates', 'build:css', 'build:app'], cb);


gulp.task('build:templates', buildTemplates);
gulp.task('build:index', buildIndex);
gulp.task('build:libs', buildVendor);
gulp.task('build:app', buildApp);
gulp.task('build:css', buildStyles);
gulp.task('build', build);
