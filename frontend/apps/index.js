let allApps = require.context('./', true, /\.app\.js$/);
const apps = allApps.keys().map(allApps).map(app => app.default);

let routes = [];
apps.forEach(app => {
  if (!app.routes) return;
  routes = routes.concat(app.routes);
});

export {
  routes,
  apps as default,
};
