var gulp = require("gulp"),
    webpack = require("webpack");
    
    
gulp.task("webpack", function(callback) {
    webpack({
        
            entry: "./client/scripts/app.js",
            
            output: {
                path: "./public/js",
                filename: "scripts.js" 
            },
            
            devtool: 'source-map',
            
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel' 
                }
            ]
        
        
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        console.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
