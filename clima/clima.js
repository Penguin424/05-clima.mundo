const axios = require('axios');
const { getLugar } = require('../lugar/axios')

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e7fd15c85fbdc793052a8808c6977b52`);

    const data = resp.data.main.temp;

    return data;

}

const getInfo = async(direccion) => {

    const cordenadas = await getLugar(direccion);
    const temp = await getClima(cordenadas.lat, cordenadas.lng);

    return console.log(`El clima en la ciudad de ${cordenadas.direccionL} es de: ${temp - 273.15} (GRADOS CELSIUS)`)

}



module.exports = { getClima, getInfo }