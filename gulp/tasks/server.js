
export const server = () => {
    return app.plugins.browserSync.init({
        server: {
            baseDir: app.path.dest.html,
        }
    }).stream();
}
