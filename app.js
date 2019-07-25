const { argv } = require('./config/yargs');
const { getInfo } = require('./clima/clima');



getInfo(argv.direccion);


//getClima(cordenada.lat, cordenada.lng).then(console.log).catch(console.log);