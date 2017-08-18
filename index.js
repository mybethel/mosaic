const Nautilus = require('@nautilus/electron');
const Mosaic = new Nautilus();

Mosaic.app.once('ready', () => {
  Mosaic.app.log.info('Application finished launching');
});
