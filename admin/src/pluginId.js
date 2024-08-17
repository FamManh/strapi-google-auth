const pluginPkg = require('../../package.json');

let pluginId = pluginPkg.name.replace(/^strapi-plugin-/i, '');
pluginId = pluginPkg.name.replace(/^@viconsol\//i, '');

module.exports = pluginId;
