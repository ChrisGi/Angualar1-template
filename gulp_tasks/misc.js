const argv = require('yargs').argv;
const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  var destination = argv.NODE_ENV === 'production' ? conf.paths.dist : conf.paths.tmp;
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{css,js,html}')
  ])
  .pipe(fileFilter)
  .pipe(gulp.dest(destination));
}
