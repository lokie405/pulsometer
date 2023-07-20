
const src = "./src";
const dest = "./dest";

export const path = {
    src: {
        html: `${src}/*.html`,
        sass: `${src}/scss/**/*.{scss,sass}`,
    },
    dest: {
        html: `${dest}/`,
        sass: `${dest}/css/`,
        destAll: `${dest}/**/*.*`,
    },
    watch: {
        html: `${src}/*.html`,
        sass: `${src}/**/*.{sass,scss}`,

    },
    clearDest: dest,
    srcFolder: src,
}