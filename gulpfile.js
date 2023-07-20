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
import { clearDest } from "./gulp/tasks/clearDest.js";
import { server } from "./gulp/tasks/server.js";

function watch() {
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.sass, sass);
    console.log("WATCH START");
}

gulp.task("default", gulp.series(clearDest, gulp.parallel(html, sass, server, watch)))

