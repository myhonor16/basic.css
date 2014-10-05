var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	rename = require("gulp-rename"),
	concat = require('gulp-concat'),
	sass = require('gulp-ruby-sass'),
	minify = require('gulp-minify-css');

// Build
gulp.task('build', function () {
	gulp.src('./build/export.scss')
		.pipe(sass({
			style: 'expanded',
			compass: true
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(livereload({
			auto: false
		}));

	gulp.src('./dist/export.css')
		.pipe(minify())
		.pipe(rename('basic.css'))
		.pipe(gulp.dest('./dist/'))

	gulp.src(['./build/normalize.css', './dist/export.css'])
		.pipe(concat('basic.norm.css'))
		.pipe(minify())
		.pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
	livereload.listen();

	gulp.watch('build/**', ['build']);
	gulp.watch('demo/**/*.html').on('change', livereload.changed);
});

gulp.task('default', ['build'], function () {
});