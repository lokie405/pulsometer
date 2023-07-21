
export const clearImg = () => {
    return app.plugins.deleteAsync(app.path.dest.img);
}