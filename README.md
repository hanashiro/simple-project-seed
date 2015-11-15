# Simple Project Seed

This is just a simple seed to start projects with modern tools and ITCSS structure.


# Tools
 - Gulp.js
 - WebPack
 - Babel
 - Sass

# Structure
> **public** - directory with static files that won't be process by babel or sass (.html, images). This folder is the distributable.

> **client** - directory with files to process (.scss, .js).

# SCSS Directory
The **client/scss** directory uses the ITCSS structure. It has a "styles.css" files to import other folders content. Don't change this file.

Each directory has a principal file to import other files from the same directory. These principal files are called on "styles.scss". Like in compass, files with a "_" as a name prefix won't be compiled to a css file, so the unique css file will be from the "styles.scss" file, with the content of all files together.

***TLDR*** - Just create files inside the folders and with "_" as prefix name

# Gulp commands
```sh
$ gulp serve
Start a server with livereload, watch files changes and build sass/js. 
```
```sh
$ gulp webpack
Compile js files.
```
```sh
$ gulp sass
Compile sass files.
```
