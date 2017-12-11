const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


gulp.task("default", function () {
  return gulp.src("src/*.js")
    .pipe(babel({
      presets: ["env","react"],
      // minified: true
    }))
    .pipe(uglify({
      // 类型：Boolean 默认：true 是否修改变量名
      mangle: true,
      // 类型：Boolean 默认：true 是否完全压缩
      compress: true
    }))
    .pipe(gulp.dest("lib"));
});

