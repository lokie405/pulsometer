import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins,
}

import { html } from "./gulp/tasks/html.js";
import { sass } from "./gulp/tasks/sass.js";
import { css } from "./gulp/tasks/css.js";
import { js } from "./gulp/tasks/js.js";
import { clearDest } from "./gulp/tasks/clearDest.js";
import { clearImg } from "./gulp/tasks/clearImg.js";
import { server } from "./gulp/tasks/server.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { img } from "./gulp/tasks/img.js";

function watch() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.sass, sass);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.src.img, gulp.series(clearImg, img));
    console.log("WATCH START");
}

gulp.task("default", gulp.series(clearDest, gulp.parallel(html, fonts, img, sass, css, js), gulp.parallel(server, watch)));

