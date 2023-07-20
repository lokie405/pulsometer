

{   //--- CSS (SASS, SCSS)
//     // install
//     $ npm i -D gulp-sass
//     $ npm i -D sass
//     // init 
//     const sass = require('gulp-sass')(require('sass'));
//     /*or*/ 
//     import dartSass from 'sass';
//     import gulpSass from 'gulp-sass';
//     const sass = gulpSass(dartSass);
//     // use
//     .pipe(sass({
//         outputStyle: "compressed",
//         }).on('error', sass.logError));
 }

 {  //--- AUTOPREFIXER
//     // install 
//     $ npm install --save-dev gulp-autoprefixer

//     // init
//     const autoprefixer = require('gulp-autoprefixer');
//     /*or*/ 
//     import autoprefixer from "gulp-autoprefixer";

//     // use
//     .pipe(app.plugins.autoprefixer({
//         grid: true,
//         overrideBrowserlist: ["last 3 version"],
//         cascade: true
//     }))
 }

 {  //--- BROWSER SYNC
    // // install
    // $ npm i -D browser-sync

    // // init
    // const browserSync = require('browser-sync').create();
    // /*or*/ 
    // import browserSync from "browser-sync";
    // browserSync.create();

    // // use
    // gulp.task('browser-sync', function() {
    //     browserSync.init({
    //         server: {
    //             baseDir: "./"
    //         }
    //     });
    // });
 }