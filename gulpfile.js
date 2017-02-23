var gulp = require('gulp');
var winInstaller = require('electron-windows-installer');
 
gulp.task('default', function(done) {
  winInstaller({
    appDirectory: './',
    outputDirectory: './installer'
  }).then(done).catch(done);
});