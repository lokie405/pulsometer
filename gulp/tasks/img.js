
export const img = () => {
    return app.gulp.src(app.path.src.img)
        .pipe(app.plugins.imagemin())
        .pipe(app.gulp.dest(app.path.dest.img));
    // app.plugins.del(app.path.dest.img)
    // return app.gulp.src(app.path.src.img, {base: './src/img/'})
    //     .pipe(app.gulp.dest(app.path.dest.img));
}