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
            
            plugins: [ 
                //new webpack.optimize.UglifyJsPlugin({minimize: true}) //uncomment if you want to uglify the output file
            ],
            
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                        //    presets: ['es2015'] //uncomment if you want es2015 to ES5
                      }
                 }
                ]
            }
        
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        console.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
