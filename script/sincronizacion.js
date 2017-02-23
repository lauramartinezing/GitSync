"use strict";
// The path to the .bat file


const ipc = require('electron').ipcRenderer
    //const selectDirBtn = document.getElementById('demo-button')
const selectDirBtn2 = document.getElementById('demo-button2')
var exec = require('child_process').exec;
const remote = require('electron').remote;


//selectDirBtn.addEventListener('click', function(event) {

//  executeBad();
//setInterval(function() {
//  executeBad();
//}, 60000);
//})

selectDirBtn2.addEventListener('click', function(event) {
    console.log(remote.getGlobal('selectedDirectory').path);
    executeComand();
    setInterval(function() {
        executeComand();;
    }, 60000)
});


ipc.on('selected-directory', function(event, path) {
    console.log('creacion de rama');
    executeComandCreateBranch();
});
//comandos de sincronizacion de cambios
function executeComandCreateBranch() {


    execute('git init', function(output) {
        console.log(output);
    });
    execute('git branch', function(output) {
        console.log(output);

        if (false) {
            execute('git remote add gitsync git@github.com:lauramartinezing/GitSync.git', function(output) {
                console.log(output);
                execute('git checkout -b usuariocmder2', function(output) {
                    console.log(output);
                    execute('git add .', function(output) {
                        console.log(output);
                        execute('git commit -m "autosave"', function(output) {
                            console.log(output);
                            execute('git push -u gitsync usuariocmder2', function(output) {
                                console.log(output);
                            });
                        });
                    });
                });

            });
        }
    });









}


//comandos de sincronizacion de cambios
function executeComand() {
    execute('git --version', function(output) {
        console.log(output);
    });

    // execute('git log', function(output) {
    //     console.log(output);
    //});
    execute('git branch', function(output) {
        console.log(output);
    });

    execute('git add .', function(output) {
        console.log(output);
    });

    execute('git commit -m autosave', function(output) {
        console.log(output);
    });

    execute('git push', function(output) {
        console.log(output);
    });
}

function execute(command, callback) {

    exec(command, {
        cwd: remote.getGlobal('selectedDirectory').path[0]
    }, function(error, stdout, stderr) {
        callback(stdout);
    });
};

// call the function



function executeBad() {
    alert('execute');

    var myBatFilePath = remote.getGlobal('selectedDirectory').path[0];

    const spawn = require('child_process').spawn;
    const bat = spawn('cmd.exe', ['/c', myBatFilePath]);

    var repositorio = 'git@github.com:lauramartinezing/GitSync.git'
    var folder = document.getElementById('selected-file')

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

        switch (code) {
            case 0:
                console.info(preText + "Something unknown happened executing the batch.");
                break;
            case 1:
                console.info(preText + "The file already exists");
                break;
            case 2:
                console.info(preText + "The file doesn't exists and now is created");
                break;
            case 3:
                console.info(preText + "An error ocurred while creating the file");
                break;
        }
    });
    // body...
}