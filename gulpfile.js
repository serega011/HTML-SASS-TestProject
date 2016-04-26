var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifyCss    = require('gulp-minify-css'),
		browserSync = require('browser-sync').create(),
        rename = require("gulp-rename"),
        bourbon = require('node-bourbon');

/* Next tasks for main_page app*/

gulp.task('sass', function () {
  return gulp.src('app/main_page/sass/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('app/main_page/css'))
    .pipe(browserSync.stream());
});

gulp.task('min', function() {
  return gulp.src('app/main_page/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min', prefix : ''}))

    .pipe(gulp.dest('build/main_page/css'));
});


gulp.task('main_page', ['sass'], function() {

    browserSync.init({
        server: "./app/main_page"
    });

    gulp.watch("app/main_page/sass/*.scss", ['sass']);
    gulp.watch("app/main_page/*.html").on('change', browserSync.reload);
    gulp.watch("app/main_page/css/*.css",['min']);
});

/*Next tasks for property app*/

gulp.task('sass1', function () {
  return gulp.src('app/property/sass/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('app/property/css'))
    .pipe(browserSync.stream());
});

gulp.task('min1', function() {
  return gulp.src('app/property/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min', prefix : ''}))

    .pipe(gulp.dest('build/property/css'));
});


gulp.task('property', ['sass1'], function() {

    browserSync.init({
        server: "./app/property"
    });

    gulp.watch("app/property/sass/*.scss", ['sass1']);
    gulp.watch("app/property/*.html").on('change', browserSync.reload);
    gulp.watch("app/property/css/*.css",['min']);
});

gulp.task('default',['serve1']);