var gulp = require("gulp");
var ts   = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var config = require("./gulp.config")();

gulp.task("watchFiles", function () {
    gulp.watch('dev/**/*.ts', ['typescript']);
});

gulp.task("typescript", function () {
        
    var sourceTsFiles = [
        config.allTs 
    ];
    return gulp.src('./dev/**/*.ts')
            .pipe(ts())
            .pipe(gulp.dest(config.tsOutputPath));
    // var tsResult = gulp
    //         .src(sourceTsFiles)
    //         .pipe(ts({
    //             noImplicitAny: true,
    //             out: 'output.js'
    //         }));
            
    // return tsResult.js
    //         .pipe(gulp.dest(config.tsOutputPath)); 
            
    // return gulp.src('dev/**/*.ts')
    //     .pipe(ts(tsProject))
    //     .pipe(gulp.dest("app"))
});

// gulp.task("watch", function(){
//     gulp.watch(tsProject.src(), ["typescript"]);
// });

// gulp.task("default", ["watch"]);