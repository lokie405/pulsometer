
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import { deleteAsync } from "del";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import browserSync from "browser-sync";
// const browserSync = require("browser-sync").create();

browserSync.create();

export const plugins = {
    plumber: plumber,
    notify: notify,
    del: deleteAsync,
    sass: gulpSass(dartSass),
    autoprefixer: autoprefixer,
    browserSync: browserSync,
}