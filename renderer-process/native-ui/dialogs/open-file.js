const ipc = require('electron').ipcRenderer
const remote = require('electron').remote;
const selectDirBtn = document.getElementById('select-directory')

selectDirBtn.addEventListener('click', function(event) {
    ipc.send('open-file-dialog')
})

ipc.on('selected-directory', function(event, path) {
    document.getElementById('selected-file').innerHTML = `You selected: ${path}`
    remote.getGlobal('selectedDirectory').path = path;
})