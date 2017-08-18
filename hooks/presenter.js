const path = require('path');
const url = require('url');

const electron = require('electron');
const { BrowserWindow } = require('electron');

const { findIndex } = require('lodash');

module.exports = app => {

  app.presenter = {
    use(screen) {
      let isPrimary = screen.id === app.screens.primary;
      app.presenter.window.setBounds({
        x: isPrimary ? screen.bounds.width - 330 : screen.bounds.x - 4,
        y: isPrimary ? screen.workArea.y + 10 : screen.bounds.y - 4,
        width: isPrimary ? 320 : screen.bounds.width + 8,
        height: isPrimary ? 180 : screen.bounds.height + 8,
      });
    },
  };

  app.once('ready', function() {

    electron.screen.on('display-added', (event, newDisplay) => {

    });

    app.presenter.window = new BrowserWindow({
      backgroundColor: '#000',
      enableLargerThanScreen: true,
      focusable: false,
      frame: false,
      width: 640,
      height: 360,
      skipTaskbar: true,
    });
    app.presenter.window.setAlwaysOnTop(true, 'screen-saver', 1);
    app.presenter.window.loadURL(url.format({
      pathname: path.resolve(__dirname, '..', 'presenter', 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    app.screens = {
      all: electron.screen.getAllDisplays(),
      primary: electron.screen.getPrimaryDisplay().id,
    };

    let i = findIndex(app.config.menu, { role: 'window' });
    app.config.menu.splice(i, 0, {
      label: 'Presentation',
      submenu: [{
        label: 'Use Display',
        submenu: app.screens.all.map(screen => ({
          label: `${screen.id == app.screens.primary && 'Primary Display - '}${screen.size.width}x${screen.size.height}`,
          type: 'radio',
          click: () => app.presenter.use(screen),
        })),
      }],
    });
    app.menu.rebuild();

    app.presenter.use(app.screens.all.pop());
  });
}
