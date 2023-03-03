import gulp from 'gulp';
import clean_css from 'gulp-clean-css';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';

const {src, dest, series} = gulp;

function optimizeCSS() {
    return src('resources/styles/*.css')
        .pipe(clean_css())
        .pipe(dest('public/styles'));
}

function optimizeJS() {
    return src('resources/scripts/*.js')
        .pipe(terser())
        .pipe(dest('public/scripts'));
}

function optimizePNG() {
    return src('resources/images/*.png')
        .pipe(imagemin())
        .pipe(dest('public/images'));
}

export default series(optimizeCSS, optimizeJS, optimizePNG);
