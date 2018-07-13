/**
 * Created by Ольга on 28.02.2017.
 */
'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    svgSprite = require('gulp-svg-sprite'),
    pngSprite = require('gulp.spritesmith'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sourceMaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

var path = {
    build: {
        html: 'build/new',
        portfolio: 'build/new/portfolio/',
        js: 'build/new/js/',
        jsFile: 'main.js',
        jsInit: 'init.js',
        css: 'build/new/css/',
        cssMapDir: "/map/",
        img: 'build/new/images/',
        svg: 'build/new/images/svg/sprite.svg',
        fonts: 'build/new/fonts/'
    },
    src: {
        html: 'src/*.html',
        portfolio: 'src/portfolio/*.html',
        js: 'src/js/*.js',
        jsTmp: 'src/jsTmp/',
        style: 'src/styles/*.scss',
        img: 'src/images/**/*.*',
        png: 'src/png-icon/*.*',
        svg: 'src/svg-icon/**/*.svg',
        svgImages: 'src/svg-images/**/*.svg',
        fonts: 'src/fonts/**/*{ttf,woff,woff2,svg,eot}'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/styles/**/*.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: {build:'./build', tmp: './src/jsTmp'}


};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: "olga_yuzich"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean.build, cb);
    rimraf(path.clean.tmp, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html )
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
    gulp.src(path.src.portfolio )
        .pipe(rigger())
        .pipe(gulp.dest(path.build.portfolio))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('js:tmp', function(){
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.src.jsTmp))
});

gulp.task('js:build', function () {
    return browserify(path.src.jsTmp+'main.js')
        .bundle()
        .pipe(source(path.build.jsFile))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('js-init:build', function () {
    return browserify(path.src.jsTmp+'init.js')
        .bundle()
        .pipe(source(path.build.jsInit))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('js-mini:build', function(){
    gulp.src(path.build.js+'*.js')
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', function() {
    gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourceMaps.init({ loadMaps : true }))
        .pipe(autoprefixer("last 2 version", "> 1%", "Explorer >= 8", {
            cascade: true
        }))
        .pipe(cssmin())
        .pipe(sourceMaps.write(path.build.cssMapDir))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('svgSprite:build', function () {
    return gulp.src(path.src.svg)
    // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../sprite.svg',
                    render: {
                        scss: {
                            dest:'../../../../src/styles/_sprite.scss',
                            template: 'src/styles/templates/_sprite_template.scss'
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('build/images/'));
});

gulp.task('pngSprite:build', function() {
    var spriteData =
        gulp.src(path.src.png) // путь, откуда берем картинки для спрайта
            .pipe(pngSprite({
                imgName: '../images/sprite.png',
                cssName: '_spritePng.scss'
            }));

    spriteData.img.pipe(gulp.dest('src/images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('src/styles/')); // путь, куда сохраняем стили
});

gulp.task('svgImages:build', function () {
    return gulp.src(path.src.svgImages)
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../svg-images.svg'
                }
            }
        }))
        .pipe(gulp.dest('build/images/'));
});

gulp.task('build', [
    'html:build',
    'fonts:build',
    'js:tmp',
    'js:build',
    'js-init:build',
    'js-mini:build',
    'style:build',
    'fonts:build',
    'image:build',
    'svgSprite:build',
    'pngSprite:build',
    'svgImages:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:tmp');
        gulp.start('js:build');
        gulp.start('js-init:build');
        gulp.start('js-mini:build');
    });

    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    })
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('svgSprite:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('svgImages:build');
    });
});


gulp.task('default', ['build', 'webserver', 'watch']);
