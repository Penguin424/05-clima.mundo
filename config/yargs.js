const { configDireccion } = require('./configsYargs');

const argv = require('yargs').options(configDireccion).argv;

module.exports = { argv }