var menubar = require('menubar')
const electron = require('electron');
const Menu = electron.Menu;
const dialog = electron.dialog
const path = require('path')

var mb = menubar({
  width: 400,
  height: 800,
  //preloadWindow: true
});

mb.on('ready', function ready () {
  console.log('app is ready')

  const contextMenu = Menu.buildFromTemplate ([
      {label: 'Info', click: () => { dialog.showMessageBox({
            type: 'info',
            buttons: ['OK'],
            icon: path.join(__dirname, 'icons', 'todo_dock.png'),
            //title: 'menuDO',
            message: 'menuDo\n\nA native menubar wrapper for todo.microsoft.com'+'!'
        });

                                    }},
      {type: 'separator'},
      {label: 'Quit', click: () => {mb.app.quit ();}}
    ])
  this.tray.on ('right-click', () => {
        mb.tray.popUpContextMenu (contextMenu);
    })

});


mb.on('after-create-window', function loaded () {
	console.log('window created');
	//mb.window.openDevTools();


});