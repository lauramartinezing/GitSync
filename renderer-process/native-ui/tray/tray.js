const ipc = require('electron').ipcRenderer
const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;
const trayBtn = document.getElementById('put-in-tray')
let trayOn = false

trayBtn.addEventListener('click', function (event) {
  var focusedWindow    = BrowserWindow.getFocusedWindow();
  //focusedWindow.hide();
  if (trayOn) {
    trayOn = false
    document.getElementById('tray-countdown').innerHTML = ''
    ipc.send('remove-tray')
  } else {
    trayOn = true
    const message = 'Click demo again to remove.'
    document.getElementById('tray-countdown').innerHTML = message
    ipc.send('put-in-tray')
  }
})
// Tray removed from context menu on icon
ipc.on('tray-removed', function () {
  ipc.send('remove-tray')
  trayOn = false
  document.getElementById('tray-countdown').innerHTML = ''
  var focusedWindow    = BrowserWindow.getFocusedWindow();
  focusedWindow.show();
})
