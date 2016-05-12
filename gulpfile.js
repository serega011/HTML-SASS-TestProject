var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCss    = require('gulp-minify-css'),
	browserSync  = require('browser-sync').create(),
    rename       = require("gulp-rename"),
    flatten      = require('gulp-flatten'),
    bourbon      = require('node-bourbon');

/* Next tasks for main_page app*/

gulp.task('sass', function () {
  return gulp.src(['app/sass/*/property.scss','app/sass/*/main.scss'])
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
    .pipe(flatten())
    .pipe(gulp.dest('app/css'))
});

gulp.task('min', function() {
  return gulp.src(['app/css/main.css','app/css/property.css'])
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

/*gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('build'));
});*/


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./app",
            index: "main.html"
        }
    });

    gulp.watch("app/sass/*/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload),['html'];
    gulp.watch("app/css/*.css",['min']);
});

gulp.task('default',['serve']);