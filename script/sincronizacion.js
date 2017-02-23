"use strict";
// The path to the .bat file
var myBatFilePath = "D:\\Dropbox (Consultoría)\\LaunchProgram\\3.Week MVP\\RepositorioLaura\\primero23.bat";

const spawn = require('child_process').spawn;
const bat = spawn('cmd.exe', ['/c', myBatFilePath]);

const ipc = require('electron').ipcRenderer

const selectDirBtn = document.getElementById('demo-button')

selectDirBtn.addEventListener('click', function (event) {
console.log('test btn 1');
setInterval(function(){ executeBad(); }, 10000);  
})

const selectDirBtn2 = document.getElementById('demo-button2')

selectDirBtn2.addEventListener('click', function (event) {

setTimeout(executeComand, 60000);
  
})


function executeComand()
{
console.log('test btn 2ler8ttastas tas');
}

function executeBad() {
  alert('execute');
  var  repositorio= 'git@github.com:lauramartinezing/GitSync.git'
var folder= document.getElementById('selected-file')

// Handle normal output
bat.stdout.on('data', (data) => {
    // As said before, convert the Uint8Array to a readable string.
    var str = String.fromCharCode.apply(null, data);
    console.info(str);
});

// Handle error output
bat.stderr.on('data', (data) => {
    // As said before, convert the Uint8Array to a readable string.
    var str = String.fromCharCode.apply(null, data);
    console.error(str);
});

// Handle on exit event
bat.on('exit', (code) => {
    var preText = `Child exited with code ${code} : `;

    switch(code){
        case 0:
            console.info(preText+"Something unknown happened executing the batch.");
            break;
        case 1:
            console.info(preText+"The file already exists");
            break;
        case 2:
            console.info(preText+"The file doesn't exists and now is created");
            break;
        case 3:
            console.info(preText+"An error ocurred while creating the file");
            break;
    }
});
  // body...
}
