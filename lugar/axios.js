const axios = require('axios');



const getLugar = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '48ede6366fmshb83d6c4861bf208p1ecaffjsnc1286a27d91e' }
    })

    const resp = await instance.get();

    if (resp.data.Results.length === 0) throw new Error(`No hay resultados para ${direccion}`, resp);

    const data = resp.data.Results[0];
    const direccionL = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccionL,
        lat,
        lng
    }

}



module.exports = { getLugar }