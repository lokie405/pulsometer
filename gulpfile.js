import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins,
}

const task = './gulp/tasks';
import { html } from "./gulp/tasks/html.js";
import { sass } from "./gulp/tasks/sass.js";
import { clearDest } from "./gulp/tasks/clearDest.js";
import { clearImg } from "./gulp/tasks/clearImg.js";
import { server } from "./gulp/tasks/server.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { img } from "./gulp/tasks/img.js";

function watch() {
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.sass, sass);
    gulp.watch(app.path.src.img, gulp.series(clearImg, img));
    console.log("WATCH START");
}

gulp.task("default", gulp.series(clearDest, gulp.parallel(html, fonts, img, sass, server, watch)));

