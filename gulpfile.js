const {src , dest , watch, series}=require("gulp")
const sass =require("gulp-sass")(require("sass"))
function buildSass(){
    return src ("*.scss")
    .pipe(sass())
    .pipe(dest("css"))
}
function watchTask(){
    watch(["*.scss"], buildSass)
}
exports.default=series(buildSass,watchTask)