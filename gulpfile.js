var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-minify-css'),
	rename = require("gulp-rename"),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	notify = require("gulp-notify"),
	csslint = require('gulp-csslint');

// Build
gulp.task('build', function () {
	gulp.src('./build/export.scss')
		.pipe(plumber())
		.pipe(sass({
			style: 'expanded',
			compass: true,
			sourcemap: false
		}))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(livereload({
			auto: false
		}))
		.pipe(notify("<%= file.relative %> - successful"));

	gulp.src('./dist/export.css')
		.pipe(plumber())
		.pipe(minify())
		.pipe(rename('basic.css'))
		.pipe(gulp.dest('./dist/'));

	gulp.src(['./build/normalize.css', './dist/export.css'])
		.pipe(plumber())
		.pipe(concat('basic.norm.css'))
		.pipe(minify())
		.pipe(gulp.dest('./dist/'));
});

// Test
gulp.task('test', function() {
	gulp.src('./dist/export.css')
		.pipe(csslint({
			"box-sizing": false,
			"known-properties": false,
			"regex-selectors": false,
			"font-sizes": false,
			"unqualified-attributes": false,
			"compatible-vendor-prefixes": false
		}))
		.pipe(csslint.reporter());
});

gulp.task('watch', function() {
	livereload.listen();

	gulp.watch('build/**', ['build','test']);
	gulp.watch('demo/**/*.html').on('change', livereload.changed);
});

gulp.task('default', ['build'], function () {
});