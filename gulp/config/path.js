
const src = "./src";
const dest = "./dest";

export const path = {
    src: {
        html: `${src}/*.html`,
        sass: `${src}/scss/**/*.{scss,sass}`,
        fonts: `${src}/fonts/**/*.{ttf,woff,woff2}`,
        img: `${src}/img/**/*.{jpg,jpeg,svg,ico,png,webp}`,
    },
    dest: {
        html: `${dest}/`,
        sass: `${dest}/css/`,
        fonts: `${dest}/fonts/`,
        img: `${dest}/img/`,
        // destAll: `${dest}/**/*.*`,
    },
    watch: {
        html: `${src}/*.html`,
        sass: `${src}/**/*.{sass,scss}`,

    },
    clearDest: `${dest}/**/*.*`,
    srcFolder: src,
}